"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReferansPage() {
  const kategoriler = {
    universiteler: {
      baslik: "Üniversiteler",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
        </svg>
      ),
      referanslar: [
        { src: "/ekstralar/ankara_uni.png", name: "Ankara Üniversitesi" },
        { src: "/ekstralar/cukurova.png", name: "Çukurova Üniversitesi" },
        { src: "/ekstralar/evran.png", name: "Ahi Evran Üniversitesi" },
        { src: "/ekstralar/izmir_sehir.png", name: "İzmir Şehir Üniversitesi" },
        { src: "/ekstralar/kayseri.png", name: "Kayseri Üniversitesi" },
        {
          src: "/ekstralar/mehmet_akif.png",
          name: "Mehmet Akif Ersoy Üniversitesi",
        },
        { src: "/ekstralar/yakin_dogu.png", name: "Yakın Doğu Üniversitesi" },
      ],
    },
    kamu: {
      baslik: "Kamu Kurumları",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <path
            fillRule="evenodd"
            d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      referanslar: [
        { src: "/ekstralar/ankara.png", name: "Ankara Büyükşehir Belediyesi" },
        { src: "/ekstralar/karabuk.png", name: "Karabük Kent Konseyi" },
        { src: "/ekstralar/kirsehir_valilik.png", name: "Kırşehir Valiliği" },
        { src: "/ekstralar/kirsehir.png", name: "Kırşehir Belediyesi" },
        { src: "/ekstralar/kktc_meclis.png", name: "KKTC Meclisi" },
        { src: "/ekstralar/kktc.png", name: "KKTC Cumhurbaşkanlığı" },
        { src: "/ekstralar/lefkosa.png", name: "Lefkoşa Belediyesi" },
        { src: "/ekstralar/milli_egitim.png", name: "Milli Eğitim Bakanlığı" },
        { src: "/ekstralar/parlemento.png", name: "KKTC Parlamentosu" },
        { src: "/ekstralar/trt_radyo.png", name: "TRT Radyo" },
      ],
    },
    ozel: {
      baslik: "Özel Sektör & Sivil Toplum",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>
      ),
      referanslar: [
        { src: "/ekstralar/doga.png", name: "Doğa Koleji" },
        { src: "/ekstralar/dusod.png", name: "DÜSOD" },
        { src: "/ekstralar/musiad.png", name: "MÜSİAD" },
        { src: "/ekstralar/nicosia.png", name: "Nicosia" },
      ],
    },
  };

  return (
    <div className="font-sans min-h-screen text-slate-800 bg-[#EEEEEE]">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F28B82] via-[#F9D162] to-[#F28B82] animate-gradient-x mb-4 sm:mb-6">
            Referanslarımız
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            İşte bizimle çalışan değerli iş ortaklarımız...
          </p>
        </div>
      </section>

      {/* References Grid - Modular Categories */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {Object.entries(kategoriler).map(([key, kategori], katIndex) => (
          <div
            key={key}
            className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_8px_32px_rgba(31,38,135,0.37)] bg-[radial-gradient(800px_500px_at_30%_20%,rgba(242,139,130,0.06),transparent_70%),radial-gradient(800px_500px_at_70%_80%,rgba(249,209,98,0.06),transparent_70%)] bg-no-repeat"
          >
            {/* Category Header */}
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#F28B82] to-[#F9D162] text-white shadow-lg">
                {kategori.icon}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F28B82] to-[#F9D162]">
                {kategori.baslik}
              </h2>
            </div>

            {/* References Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {kategori.referanslar.map((ref, index) => (
                <div
                  key={ref.src}
                  className="group relative rounded-2xl border-2 border-white/40 bg-white/30 backdrop-blur-sm p-3 sm:p-4 md:p-5 shadow-[0_4px_20px_rgba(31,38,135,0.25)] hover:shadow-[0_8px_32px_rgba(31,38,135,0.4)] hover:bg-white/40 hover:border-white/60 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1"
                  style={{
                    animationDelay: `${katIndex * 100 + index * 50}ms`,
                  }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F28B82]/0 to-[#F9D162]/0 group-hover:from-[#F28B82]/8 group-hover:to-[#F9D162]/8 transition-all duration-300 pointer-events-none" />

                  {/* Image Container - Fixed Aspect Ratio */}
                  <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-lg bg-white/50 backdrop-blur-sm">
                    <div className="relative w-full h-full p-3 sm:p-4">
                      <Image
                        src={ref.src}
                        alt={ref.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Show name on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 sm:pb-5">
                    <p className="text-white text-sm sm:text-base md:text-lg font-semibold text-center leading-tight px-3 drop-shadow-lg">
                      {ref.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 pb-16 sm:pb-20">
        <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-[#F28B82]/10 to-[#F9D162]/10 backdrop-blur-md p-8 sm:p-12 md:p-16 shadow-[0_8px_32px_rgba(31,38,135,0.37)] text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 mb-4 sm:mb-6">
            Siz de Ailemize Katılın
          </h2>
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Profesyonel koçluk eğitimlerimiz ile kariyerinizi bir üst seviyeye
            taşıyın ve prestijli kurumlar arasında yerinizi alın.
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F28B82] to-[#F9D162] hover:from-[#F9D162] hover:to-[#F28B82] text-white px-8 py-4 text-base font-semibold shadow-[0_4px_16px_rgba(242,139,130,0.3)] hover:shadow-[0_8px_24px_rgba(249,209,98,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm border border-white/20 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/905350123295"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
        className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50"
      >
        <span className="inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] ring-1 ring-white/50 transition-transform duration-200 hover:scale-105">
          <Image src="/wp.svg" alt="WhatsApp" width={30} height={30} />
        </span>
      </Link>
    </div>
  );
}
