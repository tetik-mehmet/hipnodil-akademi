import { NextResponse } from "next/server";
import { verifySessionJwt } from "@/lib/auth";

const PROTECTED_PATHS = ["/egitim_icerik"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Korumalı bir path mi?
  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p));
  if (!isProtected) {
    return NextResponse.next();
  }

  const token = request.cookies.get("session")?.value;
  if (!token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(url);
    // Cache kontrolü header'ları ekle
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
  }

  try {
    await verifySessionJwt(token);
    const response = NextResponse.next();
    // Cache kontrolü header'ları ekle
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
  } catch (e) {
    const url = new URL("/login", request.url);
    url.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(url);
    // Cache kontrolü header'ları ekle
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
  }
}

export const config = {
  matcher: ["/egitim_icerik"],
};
