import { NextResponse } from "next/server";
import { verifySessionJwt } from "@/lib/auth";

export async function GET(request) {
  try {
    const token = request.cookies.get("session")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Session bulunamadı" },
        { status: 401 }
      );
    }

    // JWT token'ı doğrula
    await verifySessionJwt(token);

    return NextResponse.json({ message: "Session geçerli" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Session geçersiz" }, { status: 401 });
  }
}
