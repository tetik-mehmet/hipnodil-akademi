import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { sendPasswordResetEmail } from "@/lib/email";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "E-posta adresi gereklidir" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Kullanıcıyı bul
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      // Güvenlik için her durumda aynı mesajı döndür
      return NextResponse.json({
        message:
          "Eğer bu e-posta adresi kayıtlıysa, şifre yenileme bağlantısı gönderildi.",
      });
    }

    // Reset token oluştur
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 saat

    // Token'ı hash'le (güvenlik için)
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Kullanıcıyı güncelle
    await User.findByIdAndUpdate(user._id, {
      resetPasswordToken: hashedToken, // Hash'lenmiş token kaydet
      resetPasswordExpires: resetTokenExpires,
    });

    // E-posta gönder
    const emailResult = await sendPasswordResetEmail(email, resetToken);

    if (!emailResult.success) {
      console.error("E-posta gönderme hatası:", emailResult.error);
      return NextResponse.json(
        { message: "E-posta gönderilemedi. Lütfen tekrar deneyin." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message:
        "Eğer bu e-posta adresi kayıtlıysa, şifre yenileme bağlantısı gönderildi.",
    });
  } catch (error) {
    console.error("/api/auth/forgot-password error:", error);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
