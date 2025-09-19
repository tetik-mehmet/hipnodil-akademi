import Link from "next/link";

export const metadata = {
  title: "Eğitimlerimiz | Hipnodil Akademi",
  description:
    "Aile Dizilimi ve Astroloji eğitimleri: derin içgörü, güçlü dönüşüm ve uygulamalı öğrenme.",
};

export default function EgitimlerimizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute -top-24 -left-10 h-72 w-72 rounded-full bg-cyan-200 blur-3xl" />
          <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-fuchsia-200 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-6xl px-6 py-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                stroke="#475569"
                strokeWidth="1.5"
              />
            </svg>
            Programlarımız
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Dönüşüm odaklı eğitimlerle uzmanlığını derinleştir
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Kelimelerin gücüyle uyumlu, modern ve profesyonel içerikler.
            Uygulamalı, deneyim temelli ve gerçek hayata dokunan ders
            akışlarıyla tasarlandı.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="container mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Aile Dizilimi */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50/60 via-white to-cyan-50/60 opacity-80" />
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-rose-600/10 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-600/20">
                  Aile Dizilimi
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Uygulamalı Atölye
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Aile Dizilimi Eğitimi
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                Aile sisteminin görünmeyen dinamiklerini güvenli bir çerçevede
                keşfet. Dönüşümü tetikleyen temsil çalışmaları, vaka analizleri
                ve süpervizyonlarla derin içgörü kazan.
              </p>

              <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />{" "}
                  Temsil teknikleri ve sistemik bakış
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />{" "}
                  Canlı atölye ve süpervizyon
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Etik
                  ve güvenli alan oluşturma
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />{" "}
                  Uygulamalı vaka çalışmaları
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6V12L16 14"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>{" "}
                    40+ saat
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5H21M3 12H21M3 19H21"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>{" "}
                    Modüler
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/iletisim"
                    className="rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                  >
                    Detayları İncele
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Astroloji */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/60 via-white to-teal-50/60 opacity-80" />
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                  Astroloji
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Temel + İleri
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Astroloji Eğitimi
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                Sembollerin diliyle tanış. Doğum haritası okuma, temel-ileri
                teknikler ve etik yorumlama ilkeleriyle adım adım uzmanlaşma
                yolculuğu.
              </p>

              <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />{" "}
                  Doğum haritası bileşenleri
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />{" "}
                  Transit, progres, solar teknikler
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />{" "}
                  Etik yaklaşımlar ve danışan dili
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />{" "}
                  Uygulamalı okuma atölyeleri
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6V12L16 14"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>{" "}
                    36+ saat
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5H21M3 12H21M3 19H21"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>{" "}
                    Hibrid
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm">
                    Kontenjan Sınırlı
                  </span>
                  <Link
                    href="/iletisim"
                    className="rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                  >
                    Detayları İncele
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Numeroloji */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/60 opacity-80" />
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-600/10 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-600/20">
                  Numeroloji
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Temel + Uygulama
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Numeroloji Eğitimi
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                Sayıların diliyle kendini ve danışanını tanı. Yaşam yolu, kader
                sayısı ve kişisel döngülerle analitik bir bakış geliştir.
              </p>

              <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                  Yaşam yolu ve kader sayıları
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                  Kişisel yıl/ay döngüleri
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                  İlişki uyum analizi
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                  Uygulamalı yorumlama oturumları
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6V12L16 14"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>{" "}
                    24+ saat
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5H21M3 12H21M3 19H21"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>{" "}
                    Online
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/iletisim"
                    className="rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                  >
                    Detayları İncele
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                Programlar hakkında danışmak ister misin?
              </h3>
              <p className="mt-1 text-sm text-slate-600 md:text-base">
                İhtiyacına en uygun rotayı birlikte planlayalım.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/iletisim"
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
              >
                Bize Ulaşın
              </Link>
              <Link
                href="/paketler"
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Paketleri Gör
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
