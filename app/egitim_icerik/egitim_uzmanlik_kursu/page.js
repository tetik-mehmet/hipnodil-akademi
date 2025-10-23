"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const REQUIRED_COURSE = "egitim_uzmanlik_kursu";
  const [isVimeoReady, setIsVimeoReady] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/verify", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          const allowed = (data.user?.courses || []).includes(REQUIRED_COURSE);
          if (!allowed) {
            router.replace("/egitim_icerik");
            return;
          }
          setIsAuthenticated(true);
        } else {
          router.replace("/login");
        }
      } catch (_error) {
        router.replace("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const videos = [
    {
      src: "https://player.vimeo.com/video/1016065587?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Performans Sınavı İçeriği - Ölçme ve Değerlendirme",
      iframeTitle:
        "EĞİTİM UZMANLIĞI - (P1) PERFORMANS SINAVI İÇERİĞİ - ÖLÇME VE DEĞERLENDİRME",
    },
    {
      src: "https://player.vimeo.com/video/1016061307?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Eğitim Faaliyetleri 1. Bölüm",
      iframeTitle:
        "MYK EĞİTİM UZMANLIĞI SEVİYE 6 - EĞİTİM FAALİYETLERİ 1. BÖLÜM",
    },
    {
      src: "https://player.vimeo.com/video/1016062819?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Eğitim Faaliyetleri 2. Bölüm",
      iframeTitle:
        "MYK EĞİTİM UZMANLIĞI SEVİYE 6 - EĞİTİM FAALİYETLERİ 2. BÖLÜM",
    },
    {
      src: "https://player.vimeo.com/video/1129134347?h=9e661fa619&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Eğitim Uzmanlığı 2",
      iframeTitle: "egitim_uzmanlik_2",
    },
    {
      src: "https://player.vimeo.com/video/1129135818?h=1378ae5a7b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Eğitim Uzmanlığı 3",
      iframeTitle: "egitim_uzmanlik_3",
    },
  ];

  const pdfs = [
    {
      file: "/uzmanlik_pdf/egitim-uzmanligi-seviye-6-plus-mentorluk-egitimi-modul-1-giris1.pdf",
      title: "Modül 1 - Giriş",
    },
    {
      file: "/uzmanlik_pdf/egitim-uzmanligi-seviye-6-plus-mentorluk-egitimi-modul-2-tyc-terimler-sozlugu2.pdf",
      title: "Modül 2 - TYÇ Terimler Sözlüğü",
    },
    {
      file: "/uzmanlik_pdf/egitim-uzmanligi-seviye-6-plus-mentorluk-egitimi-modul-3-isg-is-sagligi-ve-guvenligi3.pdf",
      title: "Modül 3 - İSG (İş Sağlığı ve Güvenliği)",
    },
    {
      file: "/uzmanlik_pdf/egitim-uzmanligi-seviye-6-plus-mentorluk-egitimi-modul-4-butce4.pdf",
      title: "Modül 4 - Bütçe",
    },
    {
      file: "/uzmanlik_pdf/egitim-uzmanligi-seviye-6-plus-mentorluk-egitimi-myk-egitim-uzmani-dokumani5.pdf",
      title: "MYK Eğitim Uzmanı Dokümanı",
    },
    {
      file: "/uzmanlik_pdf/myk-egitim-uzmanligi-sinavina-hazirlik-mentorluk-egitimi-myk-egitim-uzmani-dokumani-26.pdf",
      title: "MYK Eğitim Uzmanı Dokümanı 2",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="afterInteractive"
        onLoad={() => setIsVimeoReady(true)}
      />
      {/* Vimeo oynatıcıları play olduğunda otomatik tam ekrana geçirme */}
      {isVimeoReady && <AutoFullscreenBinder />}
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          MYK Eğitim Uzmanlığı Seviye 6 – Eğitim Videoları
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Tüm eğitim videolarını küçük kartlar halinde izleyebilir, yakında
          eklenecek yeni kayıtları da buradan takip edebilirsiniz.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((v, idx) => (
          <article
            key={v.src}
            className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md"
          >
            <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
              <iframe
                src={v.src}
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={v.iframeTitle}
                allowFullScreen
              />
            </div>
            <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
              {v.title}
            </h3>
            <p className="mt-1 text-xs text-gray-500">Süre: —</p>
          </article>
        ))}
      </div>

      {/* PDF Dokümanları Bölümü */}
      <section className="mt-16">
        <header className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
            Eğitim Dokümanları (PDF)
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            Eğitim sürecinizde kullanabileceğiniz tüm PDF dokümanlarını buradan
            indirebilirsiniz.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pdfs.map((pdf, idx) => (
            <a
              key={pdf.file}
              href={pdf.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-50">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                  {pdf.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">PDF Dokümanı</p>
              </div>
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-gray-400 group-hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function AutoFullscreenBinder() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const boundIframes = new Set();
    const offFns = [];
    let attempts = 0;
    const maxAttempts = 20;

    const setupPlayer = (iframe) => {
      // Bu iframe zaten bağlandıysa atla
      if (boundIframes.has(iframe)) return;

      // Vimeo API hazır değilse bekle
      if (!window.Vimeo || !window.Vimeo.Player) return;

      try {
        const player = new window.Vimeo.Player(iframe);
        boundIframes.add(iframe);

        const onPlay = () => {
          // Kullanıcı etkileşimiyle tetiklenen play olayında tam ekran isteği
          player.requestFullscreen().catch(() => {
            // Tarayıcı ya da kullanıcı ayarları engelleyebilir; sessizce geç
          });
        };

        player.on("play", onPlay);
        offFns.push(() => {
          try {
            player.off("play", onPlay);
          } catch (_e) {
            // Player zaten destroy olmuş
          }
        });
      } catch (_e) {
        // Geçersiz iframe veya Player oluşturulamadı
      }
    };

    // Mevcut iframe'leri bağla
    const setupExistingIframes = () => {
      const iframes = Array.from(
        document.querySelectorAll('iframe[src*="player.vimeo.com"]')
      );
      iframes.forEach(setupPlayer);
    };

    // Tekrarlayan kontrol - iframe'ler ve API'nin hazır olmasını bekler
    const checkInterval = setInterval(() => {
      attempts++;
      setupExistingIframes();

      if (attempts >= maxAttempts) {
        clearInterval(checkInterval);
      }
    }, 200);

    // 5 saniye sonra interval'i durdur
    const stopTimer = setTimeout(() => {
      clearInterval(checkInterval);
    }, 5000);

    // Dinamik olarak eklenen iframe'ler için observer
    const observer = new MutationObserver(() => {
      setupExistingIframes();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearInterval(checkInterval);
      clearTimeout(stopTimer);
      observer.disconnect();
      offFns.forEach((off) => off());
      boundIframes.clear();
    };
  }, []);

  return null;
}
