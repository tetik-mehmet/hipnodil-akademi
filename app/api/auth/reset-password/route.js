import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json(
        { message: "Token ve yeni şifre gereklidir" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Şifre en az 6 karakter olmalıdır" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Token'ı hash'le ve kullanıcıyı bul
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Geçersiz veya süresi dolmuş token" },
        { status: 400 }
      );
    }

    // Yeni şifreyi hash'le
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Kullanıcıyı güncelle
    await User.findByIdAndUpdate(user._id, {
      password: hashedPassword,
      resetPasswordToken: undefined,
      resetPasswordExpires: undefined,
    });

    return NextResponse.json({
      message: "Şifreniz başarıyla yenilendi",
    });
  } catch (error) {
    console.error("/api/auth/reset-password error:", error);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
