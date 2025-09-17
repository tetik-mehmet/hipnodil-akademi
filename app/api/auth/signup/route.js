import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      birthDate,
      tcNumber,
      phone,
      email,
      education,
      password,
    } = body || {};

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { message: "Zorunlu alanlar eksik" },
        { status: 400 }
      );
    }

    await dbConnect();

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        {
          message:
            "Bu e-posta adresiyle zaten bir hesap bulunuyor. Lütfen giriş yapın.",
        },
        { status: 409 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      birthDate: birthDate ? new Date(birthDate) : null,
      tcNumber,
      phone,
      email: email.toLowerCase(),
      education,
      password: hashed,
    });

    return NextResponse.json(
      { message: "Kayıt başarılı", userId: user._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("/api/auth/signup error", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
