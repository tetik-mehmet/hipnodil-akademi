import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionJwt } from "@/lib/auth";
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
      courses: incomingCourses,
      examApplication: incomingExamApplication,
      examStatus: incomingExamStatus,
      examResult: incomingExamResult,
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

    // Sadece admin kullanıcı "courses", "examApplication", "examStatus" ve "examResult" alanlarını set edebilsin
    let coursesToAssign = [];
    let examApplicationToAssign = "not_specified";
    let examStatusToAssign = "not_applicable";
    let examResultToAssign = "not_applicable";
    try {
      const sessionToken = cookies().get("session")?.value;
      if (sessionToken) {
        const payload = await verifySessionJwt(sessionToken);
        if (payload?.role === "admin") {
          if (Array.isArray(incomingCourses)) {
            // İzin verilen kurslar ile kesişim al
            const allowed = ["mentorluk_kursu", "seviye6_kursu"];
            coursesToAssign = incomingCourses
              .map((c) => String(c))
              .filter((c) => allowed.includes(c));
          }
          if (incomingExamApplication) {
            const allowedApplications = [
              "applied",
              "not_applied",
              "not_specified",
            ];
            if (allowedApplications.includes(incomingExamApplication)) {
              examApplicationToAssign = incomingExamApplication;
            }
          }
          if (incomingExamStatus) {
            const allowedStatuses = [
              "entered",
              "not_entered",
              "not_applicable",
            ];
            if (allowedStatuses.includes(incomingExamStatus)) {
              examStatusToAssign = incomingExamStatus;
            }
          }
          if (incomingExamResult && examStatusToAssign === "entered") {
            const allowedResults = [
              "successful",
              "unsuccessful",
              "not_applicable",
            ];
            if (allowedResults.includes(incomingExamResult)) {
              examResultToAssign = incomingExamResult;
            }
          }
        }
      }
    } catch (_) {
      // Sessiyon yoksa veya doğrulanamadıysa courses boş kalır
    }

    const user = await User.create({
      firstName,
      lastName,
      birthDate: birthDate ? new Date(birthDate) : null,
      tcNumber,
      phone,
      email: email.toLowerCase(),
      education,
      password: hashed,
      examApplication: examApplicationToAssign,
      examStatus: examStatusToAssign,
      examResult: examResultToAssign,
      ...(coursesToAssign.length > 0 ? { courses: coursesToAssign } : {}),
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
