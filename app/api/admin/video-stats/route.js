import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionJwt } from "@/lib/auth";
import {
  getAdminStats,
  getVideoStats,
  getViewerStats,
  backfillVideoTitles,
} from "@/lib/services/videoProgressService";

async function checkAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return false;

  try {
    const payload = await verifySessionJwt(token);
    return payload?.role === "admin";
  } catch {
    return false;
  }
}

export async function GET() {
  const isAdmin = await checkAdmin();
  if (!isAdmin) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  try {
    const [summary, videoStats, viewerStats] = await Promise.all([
      getAdminStats(),
      getVideoStats(),
      getViewerStats(),
    ]);

    return NextResponse.json({ summary, videoStats, viewerStats });
  } catch (err) {
    console.error("/api/admin/video-stats GET error:", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}

export async function POST() {
  const isAdmin = await checkAdmin();
  if (!isAdmin) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }

  try {
    const result = await backfillVideoTitles();
    return NextResponse.json({ success: true, ...result });
  } catch (err) {
    console.error("/api/admin/video-stats POST error:", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
