"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative mt-0 w-full overflow-hidden bg-gradient-to-br from-[#06b6d4] to-[#14b8a6] backdrop-blur-xl backdrop-saturate-150 border-t border-white/20">
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo + Tanım */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/hipnodilakademilogo.png"
                alt="Hipnodil Akademi"
                width={180}
                height={44}
                className="h-11 w-auto"
                priority
              />
            </Link>
            <p className="mt-4 text-sm/6 text-white/90">
              Hipnodil Akademi, koçluk ve kişisel gelişim alanında
              Türkiye&#39;nin önde gelen eğitim kurumlarından biridir.
            </p>

            {/* Sosyal ikonlar */}
            <div className="mt-5 flex items-center gap-3">
              {[
                {
                  href: "https://www.instagram.com/hipnodilakademi/",
                  label: "Instagram",
                  src: "/insta.svg",
                },
                {
                  href: "https://www.youtube.com/@Hipnodil-Akademi",
                  label: "YouTube",
                  src: "/youtube.svg",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  aria-label={item.label}
                  href={item.href}
                  target={
                    typeof item.href === "string" &&
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    typeof item.href === "string" &&
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-white/25"
                >
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6"
                      priority={false}
                    />
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-white transition-all duration-300 group-hover:text-white/90 group-hover:scale-110 group-hover:rotate-6"
                      fill="currentColor"
                      aria-hidden
                    >
                      {item.svg}
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Hızlı Linkler
            </h3>
            <ul className="mt-4 space-y-3 text-sm/6">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "#", label: "Hakkımızda" },
                { href: "/egitmenler", label: "Eğitmenlerimiz" },
                { href: "/paketler", label: "Paketlerimiz" },
                { href: "/iletisim", label: "İletişim" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-white transition hover:text-white/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F28B82] to-[#F9D162]" />
                    <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all group-hover:after:w-full">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Eğitimlerimiz */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Eğitimlerimiz
            </h3>
            <ul className="mt-4 space-y-3 text-sm/6">
              {[
                {
                  label: "MYK KOÇ SEVİYE 6 HAZIRLIK EĞİTİMİ",
                  href: "/kurslar/egitim_seviye_6",
                },
                {
                  label: "MYK KOÇ MENTÖRLÜK EĞİTİMİ",
                  href: "/kurslar/mentorluk",
                },
                {
                  label: "KURUMSAL KOÇLUK EĞİTİMİ",
                  href: "/kurslar/kurumsal_kocluk",
                },
              ].map((item) => (
                <li key={item.label} className="text-white">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-white/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F28B82] to-[#F9D162]" />
                    <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all group-hover:after:w-full">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              İletişim
            </h3>
            <ul className="mt-4 space-y-4 text-sm/6 text-white">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </svg>
                </span>
                <a
                  href="https://www.google.com/maps?q=Ba%C4%9Fl%C4%B1ca%20Mah.%20Hilal%20Cad.%2013%2F2%20Etimesgut%2FANKARA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/90 underline decoration-white/50 underline-offset-2"
                >
                  Bağlıca Mah. Hilal Cad. 13/2 Etimesgut/ANKARA
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C12.85 21 3 11.15 3 0.99A1 1 0 0 1 4 0h2.49a1 1 0 0 1 1 1c0 1.23.2 2.44.57 3.56a1 1 0 0 1-.24 1.03l-2.2 2.2Z" />
                  </svg>
                </span>
                <a href="tel:+903129998807" className="hover:text-white/90">
                  +90 (312) 999 98 07
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                  >
                    <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm3 1 7 5 7-5H5Zm14 3.24-7 5-7-5V20h14V8.24Z" />
                  </svg>
                </span>
                <a
                  href="mailto:info@hipnodilakademi.com"
                  className="hover:text-white/90"
                >
                  info@hipnodilakademi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Telif */}
        <div className="mt-10 border-t border-white/20 pt-6 text-xs/6 text-white/80 md:mt-12 md:pt-7">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© 2024 Hipnodil Akademi. Tüm Hakları Saklıdır.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#" className="hover:text-white/90 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="hover:text-white/90 transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="#" className="hover:text-white/90 transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Sayfanın en üstüne git"
          className="fixed bottom-6 left-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#0e7490] to-[#0f766e] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-black/30 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2"
        >
          <svg
            className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </footer>
  );
}
