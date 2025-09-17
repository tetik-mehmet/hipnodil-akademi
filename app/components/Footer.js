import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-0 w-full overflow-hidden bg-gradient-to-br from-[#F28B82] via-[#F9D162] to-[#F28B82] text-white">
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
            <p className="mt-4 text-sm/6 text-white/85">
              Hipnodil Akademi, hipnoz ve kişisel gelişim alanında
              Türkiye&#39;nin önde gelen eğitim kurumlarından biridir.
            </p>

            {/* Sosyal ikonlar */}
            <div className="mt-5 flex items-center gap-3">
              {[
                {
                  href: "#",
                  label: "Instagram",
                  src: "/insta.svg",
                },
                {
                  href: "#",
                  label: "YouTube",
                  src: "/youtube.svg",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  aria-label={item.label}
                  href={item.href}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain opacity-90 transition group-hover:opacity-100"
                      priority={false}
                    />
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-white/90 transition group-hover:text-white"
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
            <h3 className="text-lg font-semibold tracking-tight">
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
                    className="group inline-flex items-center gap-2 text-white/90 transition hover:text-white"
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
            <h3 className="text-lg font-semibold tracking-tight">
              Eğitimlerimiz
            </h3>
            <ul className="mt-4 space-y-3 text-sm/6">
              {[
                "MYK KOÇ SEVİYE 6 HAZIRLIK EĞİTİMİ",
                "MYK KOÇ MENTÖRLÜK EĞİTİMİ",
                "KURUMSAL KOÇLUK EĞİTİMİ",
              ].map((text) => (
                <li key={text} className="text-white/90">
                  <span
                    role="link"
                    aria-disabled="true"
                    className="group inline-flex cursor-default items-center gap-2 transition hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F28B82] to-[#F9D162]" />
                    <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all group-hover:after:w-full">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight">İletişim</h3>
            <ul className="mt-4 space-y-4 text-sm/6 text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </svg>
                </span>
                <a
                  href="https://www.google.com/maps?q=Ba%C4%9Fl%C4%B1ca%20Mah.%20Hilal%20Cad.%2013%2F2%20Etimesgut%2FANKARA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline decoration-white/40 underline-offset-2"
                >
                  Bağlıca Mah. Hilal Cad. 13/2 Etimesgut/ANKARA
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C12.85 21 3 11.15 3 0.99A1 1 0 0 1 4 0h2.49a1 1 0 0 1 1 1c0 1.23.2 2.44.57 3.56a1 1 0 0 1-.24 1.03l-2.2 2.2Z" />
                  </svg>
                </span>
                <a href="tel:+903129998807" className="hover:text-white">
                  +90 (312) 999 98 07
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm3 1 7 5 7-5H5Zm14 3.24-7 5-7-5V20h14V8.24Z" />
                  </svg>
                </span>
                <a
                  href="mailto:info@hipnodilakademi.com"
                  className="hover:text-white"
                >
                  info@hipnodilakademi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Telif */}
        <div className="mt-10 border-t border-white/15 pt-6 text-xs/6 text-white/80 md:mt-12 md:pt-7">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© 2025 Hipnodil Akademi. Tüm Hakları Saklıdır.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#" className="hover:text-white">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="hover:text-white">
                Kullanım Koşulları
              </Link>
              <Link href="#" className="hover:text-white">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
