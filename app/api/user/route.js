import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { verifySessionJwt } from "@/lib/auth";

async function getCurrentUserFromSession() {
  const token = cookies().get("session")?.value;
  if (!token) {
    return { ok: false, status: 401, message: "Yetkisiz" };
  }
  try {
    const payload = await verifySessionJwt(token);
    await dbConnect();
    const user = await User.findOne(
      { email: payload.email },
      {
        firstName: 1,
        lastName: 1,
        email: 1,
        phone: 1,
        birthDate: 1,
        courses: 1,
        role: 1,
        createdAt: 1,
        updatedAt: 1,
      }
    ).lean();
    if (!user) {
      return { ok: false, status: 404, message: "Kullanıcı bulunamadı" };
    }
    return { ok: true, user };
  } catch (_e) {
    return { ok: false, status: 401, message: "Yetkisiz" };
  }
}

export async function GET() {
  const result = await getCurrentUserFromSession();
  if (!result.ok) {
    return NextResponse.json(
      { message: result.message },
      { status: result.status }
    );
  }
  return NextResponse.json({ user: result.user });
}

export async function PATCH(request) {
  const token = cookies().get("session")?.value;
  if (!token) {
    return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });
  }
  try {
    const payload = await verifySessionJwt(token);
    const body = await request.json();
    const updateData = {};

    if (body?.email !== undefined) {
      updateData.email = String(body.email).trim().toLowerCase();
    }
    if (body?.phone !== undefined) {
      updateData.phone = String(body.phone).replace(/\D/g, "").slice(0, 10);
    }
    if (body?.birthDate !== undefined) {
      updateData.birthDate = body.birthDate ? new Date(body.birthDate) : null;
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { message: "Güncellenecek alan yok" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Mevcut kullanıcıyı bul
    const currentUser = await User.findOne(
      { email: payload.email },
      { _id: 1, email: 1 }
    );
    if (!currentUser) {
      return NextResponse.json(
        { message: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }

    // E-posta değişikliği gerçekten farklıysa benzersizlik kontrolü yap
    if (updateData.email && updateData.email !== currentUser.email) {
      const exists = await User.findOne({
        email: updateData.email,
        _id: { $ne: currentUser._id },
      });
      if (exists) {
        return NextResponse.json(
          { message: "Bu e-posta adresi zaten kullanılıyor" },
          { status: 400 }
        );
      }
    } else if (updateData.email === currentUser.email) {
      // Aynı e-posta gönderildiyse güncellemeden çıkar
      delete updateData.email;
    }

    const updated = await User.findOneAndUpdate(
      { _id: currentUser._id },
      { $set: updateData },
      {
        new: true,
        projection: {
          firstName: 1,
          lastName: 1,
          email: 1,
          phone: 1,
          birthDate: 1,
          courses: 1,
        },
      }
    ).lean();

    if (!updated) {
      return NextResponse.json(
        { message: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Profil güncellendi", user: updated });
  } catch (err) {
    console.error("/api/user PATCH error", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
