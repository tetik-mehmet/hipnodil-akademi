import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { cookies } from "next/headers";
import { verifySessionJwt } from "@/lib/auth";
import bcrypt from "bcryptjs";

async function requireAdmin() {
  const token = cookies().get("session")?.value;
  if (!token)
    return {
      ok: false,
      res: NextResponse.json({ message: "Yetkisiz" }, { status: 401 }),
    };
  try {
    const payload = await verifySessionJwt(token);
    if (payload?.role !== "admin") {
      return {
        ok: false,
        res: NextResponse.json({ message: "Yetkisiz" }, { status: 403 }),
      };
    }
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      res: NextResponse.json({ message: "Yetkisiz" }, { status: 401 }),
    };
  }
}

export async function PATCH(_request, { params }) {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.res;
  try {
    const id = params.id;
    const body = await _request.json();
    const { action } = body || {};
    await dbConnect();

    if (action === "updateCourses") {
      const allowed = ["mentorluk_kursu", "seviye6_kursu"];
      const courses = Array.isArray(body.courses)
        ? body.courses.map(String).filter((c) => allowed.includes(c))
        : [];
      const updated = await User.findByIdAndUpdate(
        id,
        { $set: { courses } },
        {
          new: true,
          projection: { firstName: 1, lastName: 1, email: 1, courses: 1 },
        }
      );
      return NextResponse.json({ user: updated });
    }

    if (action === "resetPassword") {
      const newPassword = String(body?.newPassword || "");
      if (newPassword.length < 6) {
        return NextResponse.json(
          { message: "Şifre en az 6 karakter olmalı" },
          { status: 400 }
        );
      }
      const hashed = await bcrypt.hash(newPassword, 10);
      await User.findByIdAndUpdate(id, { $set: { password: hashed } });
      return NextResponse.json({ message: "Şifre güncellendi" });
    }

    if (action === "setRole") {
      const role = body?.role === "admin" ? "admin" : "user";
      const updated = await User.findByIdAndUpdate(
        id,
        { $set: { role } },
        { new: true, projection: { role: 1 } }
      );
      return NextResponse.json({ user: updated });
    }

    return NextResponse.json({ message: "Geçersiz işlem" }, { status: 400 });
  } catch (err) {
    console.error("/api/admin/users/[id] PATCH error", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}

export async function DELETE(_request, { params }) {
  const guard = await requireAdmin();
  if (!guard.ok) return guard.res;
  try {
    const id = params.id;
    await dbConnect();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/admin/users/[id] DELETE error", err);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
