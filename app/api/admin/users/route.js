import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { cookies } from "next/headers";
import { verifySessionJwt } from "@/lib/auth";

export async function GET() {
  try {
    const token = cookies().get("session")?.value;
    if (!token) {
      return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
    }
    const payload = await verifySessionJwt(token);
    if (payload?.role !== "admin") {
      return NextResponse.json({ message: "Yetkisiz" }, { status: 403 });
    }

    await dbConnect();
    const users = await User.find(
      {},
      {
        firstName: 1,
        lastName: 1,
        email: 1,
        phone: 1,
        education: 1,
        courses: 1,
        role: 1,
        createdAt: 1,
      }
    )
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ users });
  } catch (err) {
    console.error("/api/admin/users GET error", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
