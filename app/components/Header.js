"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isOnEgitimIcerik = pathname?.startsWith("/egitim_icerik");

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      // Önce logout API'sini çağır
      const response = await fetch("/api/auth/logout", { method: "POST" });

      if (response.ok) {
        // Logout başarılı, cache'i temizle
        if ("caches" in window) {
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        }

        // Kısa bir gecikme ile yönlendirme yap (logout işleminin tamamlanması için)
        setTimeout(() => {
          // Browser history'yi temizle ve login sayfasına yönlendir
          router.replace("/login");
          window.history.replaceState(null, "", "/login");

          // Sayfayı yenile (cache temizliği için)
          window.location.href = "/login";
        }, 100);
      }
    } catch (e) {
      console.error("Logout hatası:", e);
      // Hata durumunda da yönlendir
      router.replace("/login");
      window.location.href = "/login";
    } finally {
      setIsLoggingOut(false);
    }
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-white md:bg-white/10 md:supports-[backdrop-filter]:bg-white/10 md:backdrop-blur-xl md:backdrop-saturate-150 border-b border-gray-200 md:border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Dekoratif yumuşak parıltı */}
        <div className="pointer-events-none absolute inset-x-0 -top-8 mx-auto h-16 max-w-5xl scale-100 bg-gradient-to-r from-[#F28B82]/30 via-[#F9D162]/20 to-[#F28B82]/30 blur-2xl md:h-20 md:scale-105" />
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/hipnodilakademilogo.png"
            alt="Hipnodil Akademi"
            width={160}
            height={40}
            priority
            className="h-10 w-auto transition-transform duration-300 ease-out hover:scale-[1.03]"
          />
        </Link>

        {/* Mobil menü butonu */}
        <button
          type="button"
          aria-label="Menüyü aç/kapat"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-[#F28B82]/40 bg-white/70 px-3 py-2 text-[#F28B82] shadow-sm transition hover:border-[#F28B82]/60 hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="relative font-semibold text-[#F28B82] transition-colors hover:text-[#1F2937] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-gradient-to-r after:from-[#F28B82] after:to-[#1F2937] after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="#"
            className="relative font-semibold text-[#F28B82] transition-colors hover:text-[#1F2937] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-gradient-to-r after:from-[#F28B82] after:to-[#1F2937] after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Hakkımızda
          </Link>
          <Link
            href="/paketler"
            className="relative font-semibold text-[#F28B82] transition-colors hover:text-[#1F2937] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-gradient-to-r after:from-[#F28B82] after:to-[#1F2937] after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Paketler
          </Link>
          <Link
            href="/egitmenler"
            className="relative font-semibold text-[#F28B82] transition-colors hover:text-[#1F2937] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-gradient-to-r after:from-[#F28B82] after:to-[#1F2937] after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Eğitmenlerimiz
          </Link>
          <Link
            href="/iletisim"
            className="relative font-semibold text-[#F28B82] transition-colors hover:text-[#1F2937] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-gradient-to-r after:from-[#F28B82] after:to-[#1F2937] after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            İletişim
          </Link>
          <Link
            href="/egitim_icerik"
            className="relative font-semibold text-[#F28B82]/70 transition-colors hover:text-[#059669] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-gradient-to-r after:from-[#F28B82] after:to-[#059669] after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Eğitim İçeriğim
          </Link>
          {isOnEgitimIcerik && (
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="rounded-xl border border-red-300 bg-white px-4 py-2 text-red-600 shadow-sm transition-all duration-300 ease-out hover:border-red-400 hover:bg-red-50 hover:text-red-700 disabled:opacity-60"
            >
              {isLoggingOut ? "Çıkış Yapılıyor..." : "Çıkış Yap"}
            </button>
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-xl border border-[#F28B82]/40 bg-white px-5 py-2 text-[#F28B82] shadow-sm transition-all duration-300 ease-out hover:border-[#F28B82] hover:bg-[#F28B82] hover:text-white hover:shadow-[0_10px_30px_-10px_rgba(242,139,130,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28B82]/60 active:scale-[0.98]"
          >
            Giriş
          </Link>
          <Link
            href="/signup"
            className="rounded-xl bg-gradient-to-r from-[#F28B82] to-[#F9D162] px-5 py-2 text-white shadow-[0_10px_30px_-10px_rgba(242,139,130,0.45)] transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-12px_rgba(242,139,130,0.55)] hover:-translate-y-0.5 hover:from-[#F28B82] hover:to-[#F9D162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28B82]/60 active:translate-y-0 active:scale-[0.98]"
          >
            Üye Ol
          </Link>
        </div>

        {/* Mobil menü paneli */}
        {isOpen && (
          <div
            className="md:hidden absolute inset-x-0 top-full mt-2 origin-top rounded-xl border border-gray-200 md:border-white/25 bg-white md:bg-white/20 md:backdrop-blur-xl md:backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out data-[state=closed]:scale-95 data-[state=closed]:opacity-0"
            data-state={isOpen ? "open" : "closed"}
          >
            <nav className="flex flex-col gap-1 p-3">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 font-semibold text-[#F28B82] hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="#"
                className="rounded-lg px-3 py-2 font-semibold text-[#F28B82] hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/paketler"
                className="rounded-lg px-3 py-2 font-semibold text-[#F28B82] hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                onClick={() => setIsOpen(false)}
              >
                Paketler
              </Link>
              <Link
                href="/egitmenler"
                className="rounded-lg px-3 py-2 font-semibold text-[#F28B82] hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                onClick={() => setIsOpen(false)}
              >
                Eğitmenlerimiz
              </Link>
              <Link
                href="/iletisim"
                className="rounded-lg px-3 py-2 font-semibold text-[#F28B82] hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </Link>
              <Link
                href="/egitim_icerik"
                className="rounded-lg px-3 py-2 font-semibold text-[#F28B82]/70 hover:bg-[#059669]/10 hover:text-[#059669]"
                onClick={() => setIsOpen(false)}
              >
                Eğitim İçeriğim
              </Link>
              <div className="mt-2 flex items-center gap-2 pt-2">
                {isOnEgitimIcerik ? (
                  <button
                    type="button"
                    onClick={async () => {
                      await handleLogout();
                      setIsOpen(false);
                    }}
                    disabled={isLoggingOut}
                    className="flex-1 rounded-xl border border-red-300 bg-white px-4 py-2 text-center text-red-600 shadow-sm transition-all duration-300 ease-out hover:border-red-400 hover:bg-red-50 hover:text-red-700 disabled:opacity-60"
                  >
                    {isLoggingOut ? "Çıkış..." : "Çıkış Yap"}
                  </button>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="flex-1 rounded-xl border border-[#F28B82]/40 bg-white px-4 py-2 text-center text-[#F28B82] shadow-sm transition-all duration-300 ease-out hover:border-[#F28B82] hover:bg-[#F28B82] hover:text-white hover:shadow-[0_10px_30px_-10px_rgba(242,139,130,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28B82]/60 active:scale-[0.98]"
                      onClick={() => setIsOpen(false)}
                    >
                      Giriş
                    </Link>
                    <Link
                      href="/signup"
                      className="flex-1 rounded-xl bg-gradient-to-r from-[#F28B82] to-[#F9D162] px-4 py-2 text-center text-white shadow-[0_10px_30px_-10px_rgba(242,139,130,0.45)] transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-12px_rgba(242,139,130,0.55)] hover:-translate-y-0.5 hover:from-[#F28B82] hover:to-[#F9D162] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28B82]/60 active:translate-y-0 active:scale-[0.98]"
                      onClick={() => setIsOpen(false)}
                    >
                      Üye Ol
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}

        {/* İnce gradient alt çizgi */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-[#F28B82]/60 to-transparent" />
      </div>
    </header>
  );
}
