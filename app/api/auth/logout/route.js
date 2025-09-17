import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Çıkış yapıldı" });
  const isProd = process.env.NODE_ENV === "production";

  // Session cookie'sini tamamen temizle
  res.cookies.set("session", "", {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
    expires: new Date(0), // Geçmiş bir tarih
  });

  // Ek güvenlik için cache kontrolü header'ları ekle
  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");

  return res;
}
