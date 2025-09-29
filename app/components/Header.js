"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isConsultingOpen, setIsConsultingOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isOnEgitimIcerik = pathname?.startsWith("/egitim_icerik");
  const isOnAdmin = pathname?.startsWith("/admin");

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

  const checkAuthAndRedirect = async () => {
    try {
      const response = await fetch("/api/auth/verify", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        // Kullanıcı giriş yapmış, eğitim içeriği sayfasına yönlendir
        router.push("/egitim_icerik");
      } else {
        // Kullanıcı giriş yapmamış, hata mesajı göster
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Auth kontrol hatası:", error);
      // Hata durumunda da hata mesajı göster
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  const handleEgitimIcerikClick = (e) => {
    e.preventDefault();
    checkAuthAndRedirect();
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-br from-[#06b6d4] to-[#14b8a6] border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      {/* Glassmorphism overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white/15 supports-[backdrop-filter]:bg-white/10 backdrop-blur-xl backdrop-saturate-150"
      />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Dekoratif yumuşak parıltı */}
        <div className="pointer-events-none absolute inset-x-0 -top-8 mx-auto h-16 max-w-5xl scale-100 bg-gradient-to-r from-white/30 via-white/20 to-white/30 blur-2xl md:h-20 md:scale-105" />
        <Link href="/" className="flex items-center gap-3 -ml-2">
          <Image
            src="/hipnodilakademilogo.png"
            alt="Hipnodil Akademi"
            width={200}
            height={50}
            priority
            className="h-12 w-auto transition-transform duration-300 ease-out hover:scale-[1.03]"
          />
        </Link>

        {/* Mobil menü butonu */}
        <button
          id="mobile-menu-button"
          type="button"
          aria-label="Menüyü aç/kapat"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-transparent bg-[#F26B0F] px-3 py-2 text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
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
          <span className="ml-2 text-sm font-semibold">Menü</span>
        </button>

        <nav
          className="hidden items-center gap-8 md:flex ml-4 md:ml-8"
          aria-label="Ana gezinme"
        >
          <Link
            href="/"
            className={`relative font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:rounded after:transition-transform after:duration-300 ${
              pathname === "/"
                ? "text-[#F28B82] after:scale-x-100 after:bg-gradient-to-r after:from-[#F28B82] after:to-white"
                : "text-white hover:text-white/90 after:scale-x-0 after:bg-gradient-to-r after:from-[#F28B82] after:to-white hover:after:scale-x-100"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:rounded-md`}
          >
            Ana Sayfa
          </Link>
          <Link
            href="/hakkimizda"
            className={`relative font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:rounded after:transition-transform after:duration-300 ${
              pathname === "/hakkimizda"
                ? "text-[#F28B82] after:scale-x-100 after:bg-gradient-to-r after:from-[#F28B82] after:to-white"
                : "text-white hover:text-white/90 after:scale-x-0 after:bg-gradient-to-r after:from-[#F28B82] after:to-white hover:after:scale-x-100"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:rounded-md`}
          >
            Hakkımızda
          </Link>
          <Link
            href="/paketler"
            className={`relative font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:rounded after:transition-transform after:duration-300 ${
              pathname === "/paketler"
                ? "text-[#F28B82] after:scale-x-100 after:bg-gradient-to-r after:from-[#F28B82] after:to-white"
                : "text-white hover:text-white/90 after:scale-x-0 after:bg-gradient-to-r after:from-[#F28B82] after:to-white hover:after:scale-x-100"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:rounded-md`}
          >
            Koçluk Paketleri
          </Link>
          <Link
            href="/egitmenler"
            className={`relative font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:rounded after:transition-transform after:duration-300 ${
              pathname === "/egitmenler"
                ? "text-[#F28B82] after:scale-x-100 after:bg-gradient-to-r after:from-[#F28B82] after:to-white"
                : "text-white hover:text-white/90 after:scale-x-0 after:bg-gradient-to-r after:from-[#F28B82] after:to-white hover:after:scale-x-100"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:rounded-md`}
          >
            Eğitmenlerimiz
          </Link>
          <div className="relative group">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              className={`relative font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:rounded after:transition-transform after:duration-300 ${
                pathname === "/danismanlik" || pathname === "/grup_danismanlik"
                  ? "text-[#F28B82] after:scale-x-100 after:bg-gradient-to-r after:from-[#F28B82] after:to-white"
                  : "text-white hover:text-white/90 after:scale-x-0 after:bg-gradient-to-r after:from-[#F28B82] after:to-white hover:after:scale-x-100"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:rounded-md`}
            >
              Danışmanlık Hizmetleri
            </button>
            <div className="invisible absolute left-0 top-full z-40 mt-3 w-64 rounded-xl border border-gray-200 bg-white p-2 opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link
                href="/danismanlik"
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === "/danismanlik"
                    ? "text-[#F28B82] bg-[#F28B82]/10"
                    : "text-[#1F2937] hover:bg-[#1F2937]/5"
                }`}
              >
                Bireysel Danışmanlık Hizmetleri
              </Link>
              <Link
                href="/grup_danismanlik"
                className={`mt-1 block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === "/grup_danismanlik"
                    ? "text-[#F28B82] bg-[#F28B82]/10"
                    : "text-[#1F2937] hover:bg-[#1F2937]/5"
                }`}
              >
                Grup Danışmanlık Hizmetleri
              </Link>
            </div>
          </div>
          <Link
            href="/iletisim"
            className={`relative font-semibold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:rounded after:transition-transform after:duration-300 ${
              pathname === "/iletisim"
                ? "text-[#F28B82] after:scale-x-100 after:bg-gradient-to-r after:from-[#F28B82] after:to-white"
                : "text-white hover:text-white/90 after:scale-x-0 after:bg-gradient-to-r after:from-[#F28B82] after:to-white hover:after:scale-x-100"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:rounded-md`}
          >
            İletişim
          </Link>
          <button
            type="button"
            onClick={handleEgitimIcerikClick}
            className="relative font-bold text-white transition-colors hover:text-white/90 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-gradient-to-r after:from-white after:to-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:rounded-md"
          >
            Eğitim İçeriğim
          </button>
        </nav>

        <div className="hidden items-center gap-4 md:flex ml-8">
          {isOnEgitimIcerik || isOnAdmin ? (
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 font-bold text-white shadow-lg shadow-red-500/25 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1 hover:scale-105 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isLoggingOut ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Çıkış Yapılıyor...
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Çıkış Yap
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="group relative overflow-hidden rounded-2xl bg-[#0D1B2A] px-6 py-3 font-bold text-white shadow-lg shadow-[#0D1B2A]/25 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-[#0D1B2A]/40 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A]/60 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 transition-transform group-hover:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 12H14M14 12L11 9M14 12L11 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Giriş Yap
                </span>
              </Link>
              <Link
                href="/signup"
                className="group relative overflow-hidden rounded-2xl bg-[#F26B0F] px-6 py-3 font-bold text-white shadow-lg shadow-[#F26B0F]/25 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-[#F26B0F]/40 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26B0F]/60 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 transition-transform group-hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M259.993,460.958c14.498,14.498,75.487-23.002,89.985-37.492l59.598-59.606l-52.494-52.485l-59.597,59.597C282.996,385.462,245.504,446.46,259.993,460.958z" />
                    <path d="M493.251,227.7c-14.498-14.49-37.996-14.49-52.485,0l-71.68,71.678l52.494,52.486l71.671-71.68C507.741,265.695,507.741,242.198,493.251,227.7z M399.586,308.882l-9.008-8.999l50.18-50.18l8.991,8.99L399.586,308.882z" />
                    <path d="M374.714,448.193c-14.071,14.055-67.572,51.008-104.791,51.008c-0.008,0,0,0-0.008,0c-17.47,0-28.484-7.351-34.648-13.516c-44.758-44.775,36.604-138.56,37.492-139.439l4.123-4.124c-3.944-4.354-5.644-10.348-5.644-22.302c0-8.836,0-25.256,0-40.403c11.364-12.619,15.497-11.048,25.103-60.596c19.433,0,18.178-25.248,27.34-47.644c7.479-18.238,1.212-25.632-5.072-28.655c5.14-66.463,5.14-112.236-70.296-126.435c-27.349-23.438-68.606-15.48-88.158-11.57c-19.536,3.911-37.159,0-37.159,0l3.355,31.49C97.74,70.339,112.05,116.112,107.44,142.923c-5.994,3.27-11.407,10.809-4.269,28.254c9.17,22.396,7.906,47.644,27.339,47.644c9.614,49.548,13.747,47.976,25.111,60.596c0,15.148,0,31.567,0,40.403c0,25.248-8.58,25.684-28.134,36.612c-47.14,26.35-108.572,41.659-119.571,124.01C5.902,495.504,92.378,511.948,213.434,512c121.04-0.052,207.524-16.496,205.518-31.558c-3.168-23.702-10.648-41.547-20.68-55.806L374.714,448.193z" />
                  </svg>
                  Üye Ol
                </span>
              </Link>
            </>
          )}
        </div>

        {/* Mobil menü paneli */}
        {isOpen && (
          <div
            id="mobile-menu"
            role="menu"
            aria-labelledby="mobile-menu-button"
            className="md:hidden absolute inset-x-0 top-full mt-2 origin-top rounded-xl border border-gray-200 md:border-white/25 bg-white md:bg-white/20 md:backdrop-blur-xl md:backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out data-[state=closed]:scale-95 data-[state=closed]:opacity-0"
            data-state={isOpen ? "open" : "closed"}
          >
            <nav className="flex flex-col gap-1 p-3">
              <Link
                href="/"
                className={`rounded-lg px-3 py-2 font-semibold transition-colors ${
                  pathname === "/"
                    ? "text-[#1F2937] bg-[#F28B82]/10"
                    : "text-gray-900 hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28B82]`}
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hakkimizda"
                className={`rounded-lg px-3 py-2 font-semibold transition-colors ${
                  pathname === "/hakkimizda"
                    ? "text-[#1F2937] bg-[#F28B82]/10"
                    : "text-gray-900 hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28B82]`}
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/paketler"
                className={`rounded-lg px-3 py-2 font-semibold transition-colors ${
                  pathname === "/paketler"
                    ? "text-[#1F2937] bg-[#F28B82]/10"
                    : "text-gray-900 hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28B82]`}
                onClick={() => setIsOpen(false)}
              >
                Koçluk Paketleri
              </Link>
              <Link
                href="/egitmenler"
                className={`rounded-lg px-3 py-2 font-semibold transition-colors ${
                  pathname === "/egitmenler"
                    ? "text-[#1F2937] bg-[#F28B82]/10"
                    : "text-gray-900 hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28B82]`}
                onClick={() => setIsOpen(false)}
              >
                Eğitmenlerimiz
              </Link>
              <Link
                href="/danismanlik"
                className={`flex items-center justify-between rounded-lg px-3 py-2 font-semibold transition-colors ${
                  pathname === "/danismanlik" ||
                  pathname === "/grup_danismanlik"
                    ? "text-[#1F2937] bg-[#F28B82]/10"
                    : "text-gray-900 hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28B82]`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsConsultingOpen((v) => !v);
                }}
              >
                <span>Danışmanlık Hizmetleri</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-5 w-5 transition-transform ${
                    isConsultingOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 14.25a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 1 1 1.06-1.06L12 12.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {isConsultingOpen && (
                <div className="ml-2 flex flex-col gap-1 pb-1">
                  <Link
                    href="/danismanlik"
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === "/danismanlik"
                        ? "text-[#F28B82] bg-[#F28B82]/10"
                        : "text-[#1F2937] hover:bg-[#1F2937]/10"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28B82]`}
                    onClick={() => setIsOpen(false)}
                  >
                    Bireysel Danışmanlık Hizmetleri
                  </Link>
                  <Link
                    href="/grup_danismanlik"
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === "/grup_danismanlik"
                        ? "text-[#F28B82] bg-[#F28B82]/10"
                        : "text-[#1F2937] hover:bg-[#1F2937]/10"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28B82]`}
                    onClick={() => setIsOpen(false)}
                  >
                    Grup Danışmanlık Hizmetleri
                  </Link>
                </div>
              )}
              <Link
                href="/iletisim"
                className={`rounded-lg px-3 py-2 font-semibold transition-colors ${
                  pathname === "/iletisim"
                    ? "text-[#1F2937] bg-[#F28B82]/10"
                    : "text-gray-900 hover:bg-[#1F2937]/10 hover:text-[#1F2937]"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28B82]`}
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  handleEgitimIcerikClick(e);
                  setIsOpen(false);
                }}
                className="rounded-lg px-3 py-2 font-bold text-[#1E3A8A] hover:bg-[#059669]/10 hover:text-[#059669] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E3A8A]"
              >
                Eğitim İçeriğim
              </button>
              <div className="mt-4 flex flex-col gap-3 pt-2">
                {isOnEgitimIcerik || isOnAdmin ? (
                  <button
                    type="button"
                    onClick={async () => {
                      await handleLogout();
                      setIsOpen(false);
                    }}
                    disabled={isLoggingOut}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 font-bold text-white shadow-lg shadow-red-500/25 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1 hover:scale-105 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoggingOut ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Çıkış Yapılıyor...
                        </>
                      ) : (
                        <>
                          <svg
                            className="h-4 w-4 transition-transform group-hover:rotate-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            ></path>
                          </svg>
                          Çıkış Yap
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="group relative overflow-hidden rounded-2xl bg-[#0D1B2A] px-6 py-3 font-bold text-white shadow-lg shadow-[#0D1B2A]/25 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-[#0D1B2A]/40 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A]/60 active:scale-95"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 transition-transform group-hover:rotate-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4 12H14M14 12L11 9M14 12L11 15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Giriş Yap
                      </span>
                    </Link>
                    <Link
                      href="/signup"
                      className="group relative overflow-hidden rounded-2xl bg-[#F26B0F] px-6 py-3 font-bold text-white shadow-lg shadow-[#F26B0F]/25 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-[#F26B0F]/40 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26B0F]/60 active:scale-95"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 transition-transform group-hover:rotate-12"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path d="M259.993,460.958c14.498,14.498,75.487-23.002,89.985-37.492l59.598-59.606l-52.494-52.485l-59.597,59.597C282.996,385.462,245.504,446.46,259.993,460.958z" />
                          <path d="M493.251,227.7c-14.498-14.49-37.996-14.49-52.485,0l-71.68,71.678l52.494,52.486l71.671-71.68C507.741,265.695,507.741,242.198,493.251,227.7z M399.586,308.882l-9.008-8.999l50.18-50.18l8.991,8.99L399.586,308.882z" />
                          <path d="M374.714,448.193c-14.071,14.055-67.572,51.008-104.791,51.008c-0.008,0,0,0-0.008,0c-17.47,0-28.484-7.351-34.648-13.516c-44.758-44.775,36.604-138.56,37.492-139.439l4.123-4.124c-3.944-4.354-5.644-10.348-5.644-22.302c0-8.836,0-25.256,0-40.403c11.364-12.619,15.497-11.048,25.103-60.596c19.433,0,18.178-25.248,27.34-47.644c7.479-18.238,1.212-25.632-5.072-28.655c5.14-66.463,5.14-112.236-70.296-126.435c-27.349-23.438-68.606-15.48-88.158-11.57c-19.536,3.911-37.159,0-37.159,0l3.355,31.49C97.74,70.339,112.05,116.112,107.44,142.923c-5.994,3.27-11.407,10.809-4.269,28.254c9.17,22.396,7.906,47.644,27.339,47.644c9.614,49.548,13.747,47.976,25.111,60.596c0,15.148,0,31.567,0,40.403c0,25.248-8.58,25.684-28.134,36.612c-47.14,26.35-108.572,41.659-119.571,124.01C5.902,495.504,92.378,511.948,213.434,512c121.04-0.052,207.524-16.496,205.518-31.558c-3.168-23.702-10.648-41.547-20.68-55.806L374.714,448.193z" />
                        </svg>
                        Üye Ol
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}

        {/* İnce gradient alt çizgi */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      </div>

      {/* Hata mesajı */}
      {showError && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">
              Bu sayfaya erişim için giriş yapmanız gerekiyor!
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
