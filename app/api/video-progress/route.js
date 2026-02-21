import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionJwt } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import {
  upsertProgress,
  getProgress,
} from "@/lib/services/videoProgressService";

// In-memory rate limiter: IP başına 10 saniyede maksimum 5 istek
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10_000;
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

async function getUserFromRequest() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;

  try {
    const payload = await verifySessionJwt(token);
    await dbConnect();
    const user = await User.findOne({ email: payload.email })
      .select({ _id: 1, email: 1 })
      .lean();
    return user || null;
  } catch {
    return null;
  }
}

export async function POST(request) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { message: "Çok fazla istek. Lütfen bekleyin." },
      { status: 429 }
    );
  }

  const user = await getUserFromRequest();
  if (!user) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Geçersiz istek gövdesi" },
      { status: 400 }
    );
  }

  const {
    videoId,
    videoTitle,
    lastPosition,
    totalDuration,
    watchedSeconds,
    completed,
  } = body;

  if (!videoId || typeof videoId !== "string") {
    return NextResponse.json(
      { message: "videoId gerekli" },
      { status: 400 }
    );
  }

  try {
    const result = await upsertProgress(user._id.toString(), {
      videoId,
      videoTitle,
      lastPosition: Number(lastPosition) || 0,
      totalDuration: Number(totalDuration) || 0,
      watchedSeconds: Number(watchedSeconds) || 0,
      completed: Boolean(completed),
    });

    return NextResponse.json({ progress: result });
  } catch (err) {
    console.error("/api/video-progress POST error:", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}

export async function GET(request) {
  const user = await getUserFromRequest();
  if (!user) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get("videoId");

  if (!videoId) {
    return NextResponse.json(
      { message: "videoId parametresi gerekli" },
      { status: 400 }
    );
  }

  try {
    const progress = await getProgress(user._id.toString(), videoId);
    return NextResponse.json({ progress: progress || null });
  } catch (err) {
    console.error("/api/video-progress GET error:", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
