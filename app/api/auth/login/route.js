import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { createSessionJwt } from "@/lib/auth";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "E-posta ve şifre gereklidir" },
        { status: 400 }
      );
    }

    await dbConnect();
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

    if (!user) {
      return NextResponse.json(
        { message: "Geçersiz kimlik bilgileri" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Geçersiz kimlik bilgileri" },
        { status: 401 }
      );
    }

    // JWT oluştur ve HttpOnly cookie olarak ayarla
    const token = await createSessionJwt({
      sub: String(user._id),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      courses: user.courses || [],
    });

    const res = NextResponse.json({
      message: "Giriş başarılı",
      userId: user._id,
    });
    const isProd = process.env.NODE_ENV === "production";
    res.cookies.set("session", token, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 gün
    });
    return res;
  } catch (err) {
    console.error("/api/auth/login error", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
