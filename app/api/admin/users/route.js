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
        birthDate: 1,
        tcNumber: 1,
        phone: 1,
        email: 1,
        education: 1,
        courses: 1,
        role: 1,
        examApplication: 1,
        examStatus: 1,
        examResult: 1,
        createdAt: 1,
        updatedAt: 1,
      }
    )
      .sort({ createdAt: -1 })
      .lean();

    // Eski kullanıcılarda examApplication alanı yoksa default değer ekle
    const processedUsers = users.map((user) => {
      if (user.examApplication === undefined || user.examApplication === null) {
        // Eğer examStatus varsa, examApplication'ı "applied" yap
        // Yoksa "not_specified" yap
        if (user.examStatus && user.examStatus !== "not_applicable") {
          user.examApplication = "applied";
        } else {
          user.examApplication = "not_specified";
        }
      }
      return user;
    });

    // Debug: İlk kullanıcının examApplication değerini kontrol et
    if (processedUsers.length > 0) {
      console.log(
        "📊 DB'den gelen ilk kullanıcı examApplication:",
        processedUsers[0].examApplication
      );
    }

    return NextResponse.json({ users: processedUsers });
  } catch (err) {
    console.error("/api/admin/users GET error", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
