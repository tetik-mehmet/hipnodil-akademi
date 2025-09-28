"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProgramCard({ title, description, imageSrc = "/merve.png", href }) {
  const CardContent = (
    <div className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 sm:p-7 shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.5)] transition-all duration-300 text-slate-800 hover:bg-white/15">
      <div className="flex items-start gap-5 sm:gap-6">
        <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug text-slate-800">
            {title}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            {description}
          </p>
          <button className="mt-4 inline-flex items-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-slate-800 hover:bg-gradient-to-r hover:from-[#F28B82] hover:to-[#F9D162] hover:text-white hover:border-[#F28B82]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer shadow-[0_4px_16px_rgba(31,38,135,0.2)] hover:shadow-[0_8px_24px_rgba(242,139,130,0.3)]">
            Detaylı Bilgi
          </button>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{CardContent}</Link>;
  }

  return CardContent;
}

export default function Home() {
  const slides = ["/slider/bir.png", "/slider/iki.png", "/slider/uc.png"];

  const handleShare = async () => {
    const url = window.location.href;
    const text = "Hipnodil Akademi - Profesyonel Koçluk Eğitimleri";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Hipnodil Akademi",
          text: text,
          url: url,
        });
      } catch (err) {
        console.log("Paylaşım iptal edildi");
      }
    } else {
      // Fallback: URL'yi panoya kopyala
      try {
        await navigator.clipboard.writeText(url);
        alert("Link panoya kopyalandı!");
      } catch (err) {
        // Fallback: textarea ile kopyala
        const textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Link panoya kopyalandı!");
      }
    }
  };

  const programs = [
    {
      title: "MYK KOÇ SEVİYE 6 HAZIRLIK EĞİTİMİ",
      description:
        "Koçluk kariyerinize MYK sertifikası ile profesyonel bir başlangıç yapın.",
      href: "/kurslar/egitim_seviye_6",
    },
    {
      title: "MYK KOÇ MENTÖRLÜK EĞİTİMİ",
      description:
        "MYK Koç Seviye 6 sınavına hazırlık için özel tasarlanmış mentörlük programı.",
      href: "/kurslar/mentorluk",
    },
    {
      title: "KURUMSAL KOÇLUK EĞİTİMİ",
      description:
        "Kurumsal ortamlarda koçluk becerilerinizi geliştirin ve organizasyonlarda fark yaratın.",
      href: "/kurslar/kurumsal_kocluk",
      imageSrc: "/bulent.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    const nextIndex = (index + slides.length) % slides.length;
    setCurrentIndex(nextIndex);
  };

  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  useEffect(() => {
    if (isPaused) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isPaused, slides.length]);

  return (
    <div className="font-sans min-h-screen text-slate-800 bg-gradient-to-b from-[#FFF6E5] via-[#BBDCE5]/40 to-[#A8D5BA]/40">
      {/* soft, airy blurred background overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 blur-2xl opacity-70 [background-image:radial-gradient(1000px_600px_at_0%_0%,rgba(187,220,229,0.35),transparent_60%),radial-gradient(800px_500px_at_100%_100%,rgba(168,213,186,0.35),transparent_60%)]" />

      {/* Paylaş Butonu - Header'ın hemen altında */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-4 pb-2">
        <div className="flex justify-center">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-6 py-3 text-sm font-medium shadow-[0_4px_16px_rgba(51,65,85,0.3)] hover:shadow-[0_8px_24px_rgba(51,65,85,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm border border-slate-600/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                clipRule="evenodd"
              />
            </svg>
            Arkadaşına Haber Ver
          </button>
        </div>
      </div>

      <div
        className="relative w-full h-[70vh] sm:h-[75vh] md:h-[75vh] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((src, idx) => (
            <div key={src} className="relative min-w-full h-full">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <button
          aria-label="Önceki"
          onClick={prev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 text-slate-800 backdrop-blur-md border border-white/30 px-4 py-4 sm:px-3 sm:py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-[0_4px_16px_rgba(31,38,135,0.2)] hover:shadow-[0_8px_24px_rgba(31,38,135,0.3)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M15.53 4.47a.75.75 0 0 1 0 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          aria-label="Sonraki"
          onClick={next}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 text-slate-800 backdrop-blur-md border border-white/30 px-4 py-4 sm:px-3 sm:py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-[0_4px_16px_rgba(31,38,135,0.2)] hover:shadow-[0_8px_24px_rgba(31,38,135,0.3)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M8.47 19.53a.75.75 0 0 1 0-1.06L14.94 12 8.47 5.53a.75.75 0 1 1 1.06-1.06l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-3 sm:px-3 sm:py-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-3 sm:h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "w-8 sm:w-7 bg-white/80 shadow-[0_2px_8px_rgba(31,38,135,0.3)]"
                  : "w-3 sm:w-2.5 bg-white/40 hover:bg-white/60 hover:shadow-[0_2px_6px_rgba(31,38,135,0.2)]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile controls under slider */}
      <div className="md:hidden mt-3 flex items-center justify-center gap-3">
        <button
          aria-label="Önceki"
          onClick={prev}
          className="inline-flex items-center justify-center rounded-full bg-white/70 text-slate-800 border border-white/30 h-10 w-10 shadow-sm active:scale-95 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M15.53 4.47a.75.75 0 0 1 0 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-2 border border-white/40">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "w-6 bg-slate-800/80"
                  : "w-2.5 bg-slate-800/40"
              }`}
            />
          ))}
        </div>

        <button
          aria-label="Sonraki"
          onClick={next}
          className="inline-flex items-center justify-center rounded-full bg-white/70 text-slate-800 border border-white/30 h-10 w-10 shadow-sm active:scale-95 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M8.47 19.53a.75.75 0 0 1 0-1.06L14.94 12 8.47 5.53a.75.75 0 1 1 1.06-1.06l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 bg-[radial-gradient(700px_400px_at_0%_0%,rgba(242,139,130,0.08),transparent_60%),radial-gradient(700px_400px_at_100%_100%,rgba(249,209,98,0.08),transparent_60%)] bg-no-repeat">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F28B82] via-[#F9D162] to-[#F28B82]">
            Eğitimlerimiz
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700">
            Size uygun programı keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((p) => (
            <ProgramCard
              key={p.title}
              title={p.title}
              description={p.description}
              imageSrc={p.imageSrc}
              href={p.href}
            />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 bg-[radial-gradient(700px_400px_at_10%_10%,rgba(249,209,98,0.08),transparent_60%),radial-gradient(700px_400px_at_90%_90%,rgba(242,139,130,0.08),transparent_60%)] bg-no-repeat">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F9D162] via-[#F28B82] to-[#F9D162]">
            Referanslarımız
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700">
            Bizlere güvenen kurum ve markalar
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 md:border-white/20 bg-white md:bg-white/10 md:backdrop-blur-md p-6 sm:p-12 shadow-[0_8px_32px_rgba(31,38,135,0.37)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {[
              { src: "/referanslar/cz1.png", name: "Referans 1" },
              { src: "/referanslar/cz2.png", name: "Referans 2" },
              { src: "/referanslar/cz3.png", name: "Referans 3" },
              { src: "/referanslar/cz4.png", name: "Referans 4" },
            ].map((r) => (
              <div
                key={r.src}
                className="group rounded-2xl border border-gray-200 md:border-white/30 bg-white md:bg-white/20 md:backdrop-blur-sm p-4 sm:p-5 shadow-[0_4px_16px_rgba(31,38,135,0.2)] hover:shadow-[0_8px_24px_rgba(31,38,135,0.3)] md:hover:bg-white/25 transition-all duration-300"
              >
                <div className="relative mx-auto h-24 sm:h-28 md:h-36 w-full">
                  <Image
                    src={r.src}
                    alt={r.name}
                    fill
                    className="object-contain"
                    sizes="(min-width:768px) 25vw, 50vw"
                  />
                </div>
              </div>
            ))}
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
