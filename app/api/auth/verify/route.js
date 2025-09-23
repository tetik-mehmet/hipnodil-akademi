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

    // JWT token'ı doğrula ve kullanıcı bilgilerini al
    const payload = await verifySessionJwt(token);

    return NextResponse.json(
      {
        message: "Session geçerli",
        user: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          courses: payload.courses || [],
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Session geçersiz" }, { status: 401 });
  }
}
