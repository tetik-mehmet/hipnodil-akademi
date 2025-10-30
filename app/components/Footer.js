"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (isPrivacyOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isPrivacyOpen, isMounted]);

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
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-white/90 transition-colors underline decoration-white/30 underline-offset-4"
                aria-haspopup="dialog"
                aria-expanded={isPrivacyOpen}
              >
                Gizlilik Politikası
              </button>
              <Link href="#" className="hover:text-white/90 transition-colors">
                Kullanım Koşulları
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

      {/* Gizlilik Politikası Modal (Portal) */}
      {isMounted &&
        isPrivacyOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gizlilik Politikası"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsPrivacyOpen(false)}
            />
            <div className="relative z-[101] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b px-6 py-4">
                <h2 className="text-base font-semibold text-gray-900">
                  Gizlilik Politikası
                </h2>
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(false)}
                  className="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  aria-label="Kapat"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811Z" />
                  </svg>
                </button>
              </div>
              <div className="max-h-[85vh] overflow-y-auto px-6 py-5 text-sm leading-6 text-gray-700">
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  1. Genel Bilgiler
                </h3>
                <p className="mb-4">
                  Hipnodil Akademi olarak, kullanıcılarımızın gizliliğine büyük
                  önem veriyoruz. Bu Gizlilik Politikası, web sitemiz ve mobil
                  platformlarımız aracılığıyla toplanan bilgilerin nasıl
                  toplandığını, kullanıldığını, korunduğunu ve paylaşıldığını
                  açıklar.
                </p>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  2. Toplanan Bilgiler
                </h3>
                <p className="mb-2">
                  Platformumuzda aşağıdaki bilgileri toplayabiliriz:
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5">
                  <li>Ad, soyad, e-posta adresi, telefon numarası</li>
                  <li>Kullanıcı adı, parola</li>
                  <li>IP adresi, tarayıcı bilgisi, cihaz türü</li>
                  <li>
                    Eğitim geçmişi ve platform üzerindeki etkileşim bilgileri
                  </li>
                  <li>Geri bildirimler, yorumlar veya destek talepleri</li>
                </ul>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  3. Bilgilerin Kullanım Amaçları
                </h3>
                <p className="mb-2">
                  Toplanan bilgiler şu amaçlarla kullanılabilir:
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5">
                  <li>Üyelik ve kimlik doğrulama süreçlerinin yürütülmesi</li>
                  <li>
                    Eğitim içeriklerine erişim ve kullanıcı deneyiminin
                    geliştirilmesi
                  </li>
                  <li>Sistem güvenliği ve performans optimizasyonu</li>
                  <li>
                    Kullanıcılara bilgilendirme, duyuru ve kampanya iletimi
                  </li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                </ul>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  4. Verilerin Saklanması ve Güvenliği
                </h3>
                <p className="mb-4">
                  Verileriniz güvenli sunucularda, şifrelenmiş bağlantılar (SSL)
                  aracılığıyla korunur. Kredi kartı veya ödeme bilgileri,
                  yalnızca ödeme sağlayıcısı (örneğin iyzico, Stripe vb.)
                  tarafından işlenir ve sistemimizde saklanmaz. Veriler, yasal
                  süre boyunca saklanır ve süresi dolduğunda güvenli şekilde
                  silinir.
                </p>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  5. Bilgilerin Paylaşımı
                </h3>
                <p className="mb-2">
                  Kişisel verileriniz, yalnızca aşağıdaki durumlarda
                  paylaşılabilir:
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5">
                  <li>Yasal yükümlülük gereği resmi kurumlarla,</li>
                  <li>
                    Hizmet aldığımız iş ortakları (barındırma, e-posta, güvenlik
                    sağlayıcıları) ile,
                  </li>
                  <li>Açık rızanızla belirttiğiniz üçüncü taraflarla.</li>
                </ul>
                <p className="mb-4">
                  Hiçbir durumda kişisel verileriniz üçüncü kişilere satılmaz.
                </p>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  6. Çocukların Gizliliği
                </h3>
                <p className="mb-4">
                  Hipnodil Akademi, 18 yaşından küçük kişilerden bilerek veri
                  toplamaz. Yanlışlıkla alınan bilgiler tespit edildiğinde
                  derhal silinir.
                </p>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  7. Haklarınız
                </h3>
                <p className="mb-2">
                  KVKK madde 11 kapsamında, kişisel verilerinizle ilgili: Bilgi
                  talep etme, düzeltme veya silinmesini isteme, işlenmesine
                  itiraz etme haklarına sahipsiniz.
                </p>
                <p className="mb-0">
                  Taleplerinizi{" "}
                  <a
                    href="mailto:kvkk@hipnodilakademi.net"
                    className="font-medium text-cyan-700 underline"
                  >
                    kvkk@hipnodilakademi.net
                  </a>{" "}
                  adresine gönderebilirsiniz.
                </p>
              </div>
              <div className="sticky bottom-0 flex items-center justify-end gap-3 border-t bg-white px-6 py-4">
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(false)}
                  className="rounded-md bg-cyan-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </footer>
  );
}
