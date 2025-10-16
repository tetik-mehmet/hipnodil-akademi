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

    if (action === "updateUser") {
      const {
        firstName,
        lastName,
        birthDate,
        tcNumber,
        phone,
        email,
        education,
        courses,
        role,
        examApplication,
        examStatus,
        examResult,
        createdAt,
      } = body;

      console.log("🔍 API RECEIVED - examApplication:", examApplication);
      console.log("🔍 API RECEIVED - examStatus:", examStatus);
      console.log("🔍 API RECEIVED - examResult:", examResult);

      // Güncellenecek alanları hazırla
      const updateData = {};

      if (firstName !== undefined)
        updateData.firstName = String(firstName).trim();
      if (lastName !== undefined) updateData.lastName = String(lastName).trim();
      if (birthDate !== undefined) updateData.birthDate = birthDate || null;
      if (tcNumber !== undefined)
        updateData.tcNumber = String(tcNumber).replace(/\D/g, "").slice(0, 11);
      if (phone !== undefined)
        updateData.phone = String(phone).replace(/\D/g, "").slice(0, 10);
      if (email !== undefined)
        updateData.email = String(email).trim().toLowerCase();
      if (education !== undefined) updateData.education = education || null;
      if (courses !== undefined) {
        const allowed = ["mentorluk_kursu", "seviye6_kursu"];
        updateData.courses = Array.isArray(courses)
          ? courses.map(String).filter((c) => allowed.includes(c))
          : [];
      }
      if (role !== undefined)
        updateData.role = role === "admin" ? "admin" : "user";
      if (examApplication !== undefined) {
        const allowedApplications = ["applied", "not_applied", "not_specified"];
        updateData.examApplication = allowedApplications.includes(
          examApplication
        )
          ? examApplication
          : "not_specified";

        // Eğer examApplication "applied" değilse, examStatus ve examResult'ı sıfırla
        if (updateData.examApplication !== "applied") {
          updateData.examStatus = "not_applicable";
          updateData.examResult = "not_applicable";
        }
      }
      if (examStatus !== undefined) {
        const allowedStatuses = ["entered", "not_entered", "not_applicable"];
        updateData.examStatus = allowedStatuses.includes(examStatus)
          ? examStatus
          : "not_applicable";

        // Eğer examStatus "entered" değilse, examResult'ı sıfırla
        if (updateData.examStatus !== "entered") {
          updateData.examResult = "not_applicable";
        }
      }
      if (examResult !== undefined) {
        const allowedResults = ["successful", "unsuccessful", "not_applicable"];
        updateData.examResult = allowedResults.includes(examResult)
          ? examResult
          : "not_applicable";
      }
      if (createdAt !== undefined) {
        updateData.createdAt = createdAt ? new Date(createdAt) : null;
      }

      // E-posta benzersizlik kontrolü (kendi e-postası hariç)
      if (updateData.email) {
        const existingUser = await User.findOne({
          email: updateData.email,
          _id: { $ne: id },
        });
        if (existingUser) {
          return NextResponse.json(
            { message: "Bu e-posta adresi zaten kullanılıyor" },
            { status: 400 }
          );
        }
      }

      console.log("💾 updateData:", updateData);

      const updated = await User.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true }
      );

      if (!updated) {
        return NextResponse.json(
          { message: "Kullanıcı bulunamadı" },
          { status: 404 }
        );
      }

      console.log(
        "✅ Updated User - examApplication:",
        updated.examApplication
      );
      console.log("✅ Updated User - examStatus:", updated.examStatus);
      console.log("✅ Updated User - examResult:", updated.examResult);

      return NextResponse.json({
        message: "Kullanıcı başarıyla güncellendi",
        user: updated,
      });
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
