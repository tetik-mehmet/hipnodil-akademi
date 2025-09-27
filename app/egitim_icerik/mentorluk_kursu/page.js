"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const REQUIRED_COURSE = "mentorluk_kursu";
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
      src: "https://player.vimeo.com/video/1079774040?h=4218d79fbf&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "3. Grup 5. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 3. Grup 5. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1074962620?h=5b82794e4b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "3. Grup 1. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 3. Grup 1. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1052575306?h=846e0d9072&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "2. Grup 4. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 2. Grup 4. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1051894685?h=955590a4bd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "2. Grup 3. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 2. Grup 3. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1050053220?h=7233d65586&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "2. Grup 2. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 2. Grup 2. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1048934916?h=0af232a866&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "2. Grup 1. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 2. Grup 1. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1078294669?h=ce025ba24c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "3. Grup 4. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 3. Grup 4. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1078073738?h=8db7b19f98&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "3. Grup 3. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 3. Grup 3. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1077226974?h=dc5820387a&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "3. Grup 2. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 3. Grup 2. Canlı Yayın",
    },
  ];

  const sortedVideos = [...videos].sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { numeric: true, sensitivity: "base" })
  );

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
          MYK Koç Seviye 6 Mentorluk – Canlı Yayın Kayıtları
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Tüm oturumları küçük kartlar halinde izleyebilir, yakında eklenecek
          yeni kayıtları da buradan takip edebilirsiniz.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedVideos.map((v, idx) => (
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
                title={`${idx + 1}. Canlı Video`}
                allowFullScreen
              />
            </div>
            <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">{`${
              idx + 1
            }. Canlı Video`}</h3>
            <p className="mt-1 text-xs text-gray-500">Süre: —</p>
          </article>
        ))}
      </div>
    </main>
  );
}

function AutoFullscreenBinder() {
  useEffect(() => {
    if (
      !(typeof window !== "undefined" && window.Vimeo && window.Vimeo.Player)
    ) {
      return;
    }

    const iframes = Array.from(
      document.querySelectorAll('iframe[src*="player.vimeo.com"]')
    );
    const players = [];
    const offFns = [];

    iframes.forEach((iframe) => {
      try {
        const player = new window.Vimeo.Player(iframe);
        players.push(player);
        const onPlay = () => {
          // Kullanıcı etkileşimiyle tetiklenen play olayında tam ekran isteği
          player.requestFullscreen().catch(() => {
            // Tarayıcı ya da kullanıcı ayarları engelleyebilir; sessizce geç
          });
        };
        player.on("play", onPlay);
        offFns.push(() => player.off("play", onPlay));
      } catch (_e) {
        // Geçersiz iframe veya Player oluşturulamadı
      }
    });

    return () => {
      offFns.forEach((off) => off());
      // Player'ları destroy etmiyoruz; iframe ömrünü Next yönetiyor
    };
  }, []);

  return null;
}
