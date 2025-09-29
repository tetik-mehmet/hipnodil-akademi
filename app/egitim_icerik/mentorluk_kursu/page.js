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
  const [docs, setDocs] = useState([]);
  const [isDocsLoading, setIsDocsLoading] = useState(true);
  const [docsError, setDocsError] = useState("");

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

  // PDF dokümanlarını getir
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        setIsDocsLoading(true);
        const res = await fetch("/api/docs/mentorluk", { cache: "no-store" });
        if (!res.ok) throw new Error("Doküman listesi alınamadı");
        const data = await res.json();
        const list = Array.isArray(data.docs) ? data.docs : [];
        setDocs(list);
      } catch (e) {
        setDocsError(e?.message || "Bir hata oluştu");
      } finally {
        setIsDocsLoading(false);
      }
    };

    fetchDocs();
  }, []);

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

      {/* Dokümanlar Bölümü */}
      <section className="mt-12">
        <header className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
              Dokümanlar
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Eğitimle ilgili PDF dokümanlarını görüntüleyebilir veya
              indirebilirsiniz.
            </p>
          </div>
          {!isDocsLoading && docs?.length > 0 && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              {docs.length} dosya
            </span>
          )}
        </header>

        {isDocsLoading ? (
          <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-b-transparent"></div>
            <p className="text-sm text-gray-600">Dokümanlar yükleniyor…</p>
          </div>
        ) : docsError ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {docsError}
          </div>
        ) : docs.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white p-6 text-center text-sm text-gray-600">
            Henüz doküman eklenmemiş.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {docs.map((doc) => (
              <DocCard key={doc.href} doc={doc} />
            ))}
          </div>
        )}
      </section>
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

function DocCard({ doc }) {
  return (
    <article className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600 ring-1 ring-red-100">
          {/* PDF simgesi */}
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16.005A1.995 1.995 0 0 0 5.995 22H18a2 2 0 0 0 2-2V8z"
              opacity=".2"
            ></path>
            <path d="M14 2v6h6M8 11h5M8 14h8M8 17h8"></path>
          </svg>
        </div>
        <div className="min-w-0">
          <h3
            className="truncate text-sm font-medium text-gray-900"
            title={doc.title}
          >
            {doc.title}
          </h3>
          {doc.sizeText && (
            <p className="mt-0.5 text-xs text-gray-500">{doc.sizeText}</p>
          )}
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <a
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Görüntüle
        </a>
        <a
          href={doc.href}
          download
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          İndir
        </a>
      </div>
    </article>
  );
}
