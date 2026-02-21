"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import VideoProgressTracker, { extractVimeoId } from "@/app/components/VideoProgressTracker";

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

  // Ders videoları
  const lessonVideos = [
    {
      src: "https://player.vimeo.com/video/1015297143?h=8c5aadb641&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "2. PERFORMANS DERSİ 2. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 2. PERFORMANS DERSİ 2. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1014780792?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 1 - ULUSAL YETERLİLİK SİMGELER, TERİMLER, VE KISALTMALAR",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 1 - ULUSAL YETERLİLİK SİMGELER, TERİMLER, VE KISALTMALAR",
    },
    {
      src: "https://player.vimeo.com/video/1015148357?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 2 - KOÇ ULUSAL YETERLİLİĞİNE GİRİŞ",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 2 - KOÇ ULUSAL YETERLİLİĞİNE GİRİŞ",
    },
    {
      src: "https://player.vimeo.com/video/1015153841?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 3 - ULUSAL YETERLİLİK BİRİMİ - 1",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 3 - ULUSAL YETERLİLİK BİRİMİ - 1",
    },
    {
      src: "https://player.vimeo.com/video/1015157127?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 4 - ULUSAL YETERLİLİK BİRİMİ - 2",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 4 - ULUSAL YETERLİLİK BİRİMİ - 2",
    },
    {
      src: "https://player.vimeo.com/video/1015157595?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 5 - ULUSAL YETERLİLİK BİRİMİ - 3",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 5 - ULUSAL YETERLİLİK BİRİMİ - 3",
    },
    {
      src: "https://player.vimeo.com/video/1015157883?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 6 - ULUSAL YETERLİLİK BİRİMİ - 4",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 6 - ULUSAL YETERLİLİK BİRİMİ - 4",
    },
    {
      src: "https://player.vimeo.com/video/1015160408?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 7 - ULUSAL YETERLİLİK BİRİMİ - 5",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 7 - ULUSAL YETERLİLİK BİRİMİ - 5",
    },
    {
      src: "https://player.vimeo.com/video/1015161158?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 8 - ULUSAL YETERLİLİK BİRİMİ - 6",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 8 - ULUSAL YETERLİLİK BİRİMİ - 6",
    },
    {
      src: "https://player.vimeo.com/video/1015162916?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 9 - ULUSAL YETERLİLİK BİRİMİ - 7",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 9 - ULUSAL YETERLİLİK BİRİMİ - 7",
    },
    {
      src: "https://player.vimeo.com/video/1015163317?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 10 - KOÇLUK SÜRECİNİ YAPILANDIRMA - GİRİŞ",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 10 - KOÇLUK SÜRECİNİ YAPILANDIRMA - GİRİŞ",
    },
    {
      src: "https://player.vimeo.com/video/1015165011?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 11 - KOÇLUK SÜRECİNİ YAPILANDIRMA 1",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 11 - KOÇLUK SÜRECİNİ YAPILANDIRMA 1",
    },
    {
      src: "https://player.vimeo.com/video/1015165684?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 12 - KOÇLUK SÜRECİNİ YAPILANDIRMA 2",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 12 - KOÇLUK SÜRECİNİ YAPILANDIRMA 2",
    },
    {
      src: "https://player.vimeo.com/video/1015179539?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 13 - KOÇLUK SÜRECİNİ YAPILANDIRMA 3",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 13 - KOÇLUK SÜRECİNİ YAPILANDIRMA 3",
    },
    {
      src: "https://player.vimeo.com/video/1015194733?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 14 - KOÇLUK SÜRECİNİ YAPILANDIRMA 4",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 14 - KOÇLUK SÜRECİNİ YAPILANDIRMA 4",
    },
    {
      src: "https://player.vimeo.com/video/1015197730?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 15 - KOÇLUK SÜRECİNİ YAPILANDIRMA 5",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 15 - KOÇLUK SÜRECİNİ YAPILANDIRMA 5",
    },
    {
      src: "https://player.vimeo.com/video/1015200790?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 16 - KOÇLUK SÜRECİNİ YAPILANDIRMA 6",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 16 - KOÇLUK SÜRECİNİ YAPILANDIRMA 6",
    },
    {
      src: "https://player.vimeo.com/video/1015225094?h=&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 17 - KOÇLUK SÜRECİNİ YAPILANDIRMA 7",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 17 - KOÇLUK SÜRECİNİ YAPILANDIRMA 7",
    },
    {
      src: "https://player.vimeo.com/video/1015226101?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "DERS 18 - TEORİK T2 AÇIK UÇLU SORU ANLATIMI",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - DERS 18 - TEORİK T2 AÇIK UÇLU SORU ANLATIMI",
    },
    {
      src: "https://player.vimeo.com/video/1015252543?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "T2 AÇIK UÇLU SORU ÇEŞİDİ 1. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - T2 AÇIK UÇLU SORU ÇEŞİDİ 1. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015258614?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "T2 AÇIK UÇLU SORU ÇEŞİDİ 2. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - T2 AÇIK UÇLU SORU ÇEŞİDİ 2. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015262022?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "1. PERFORMANS DERSİ 1. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 1. PERFORMANS DERSİ 1. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015269655?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "1. PERFORMANS DERSİ 2. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 1. PERFORMANS DERSİ 2. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015295843?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "2. PERFORMANS DERSİ 1. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 2. PERFORMANS DERSİ 1. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015297143?h=8c5aadb641&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "2. PERFORMANS DERSİ 2. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 2. PERFORMANS DERSİ 2. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015628175?h=99415a66bb&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "3. PERFORMANS DERSİ 1. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 3. PERFORMANS DERSİ 1. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015637515?h=ad1219c921&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "3. PERFORMANS DERSİ 2. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 3. PERFORMANS DERSİ 2. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015690889?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "4. PERFORMANS DERSİ 1. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 4. PERFORMANS DERSİ 1. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015693155?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "4. PERFORMANS DERSİ 2. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 4. PERFORMANS DERSİ 2. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1016155160?h=08bf8d0639&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "5. PERFORMANS DERSİ 1. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 5. PERFORMANS DERSİ 1. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1016251965?h=0c642082cc&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "5. PERFORMANS DERSİ 2. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 5. PERFORMANS DERSİ 2. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1016443320?h=042ab854e0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "6. PERFORMANS DERSİ 1. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 6. PERFORMANS DERSİ 1. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1016817484?h=c970c0ce89&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "6. PERFORMANS DERSİ 2. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - 6. PERFORMANS DERSİ 2. OTURUM",
    },
  ];

  // Canlı yayın videoları
  const liveVideos = [
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
    {
      src: "https://player.vimeo.com/video/1129875511?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "4. Grup 1. Canlı Yayın",
      iframeTitle:
        "MYK KOÇ SEVİYE 6 SINAVINA HAZIRLIK (MENTÖRLÜK) 4. GRUP 1. CANLI YAYIN",
    },
    {
      src: "https://player.vimeo.com/video/1130159831?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "4. Grup 2. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 4. Grup 2. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1132010457?h=9fef606088&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "4. Grup 3. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 4. Grup 3. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1132042547?h=cd542d2fcd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "4. Grup 4. Canlı Yayın",
      iframeTitle: "MYK KOÇ SEVİYE 6 - 4. Grup 4. Canlı Yayın",
    },
    {
      src: "https://player.vimeo.com/video/1015233575?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "TANIŞMA - CANLI YAYIN 1. DERS 1. OTURUM",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - TANIŞMA - CANLI YAYIN 1. DERS 1. OTURUM",
    },
    {
      src: "https://player.vimeo.com/video/1015251231?badge=0&autopause=0&player_id=0&app_id=58479",
      title: "CANLI YAYIN 1. DERS 2. OTURUM - MYK'NIN GÖREVLERİ NELERDİR",
      iframeTitle:
        "MYK Koçluk Seviye 6 Eğitimi - CANLI YAYIN 1. DERS 2. OTURUM - MYK'NIN GÖREVLERİ NELERDİR _",
    },
    {
      src: "https://player.vimeo.com/video/1166381749?h=792e5575e3&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Mentörluk 18 Şubat 3. Oturum",
      iframeTitle: "MYK Koç Seviye 6 Mentorluk - 18 Şubat 3. Oturum",
    },
    {
      src: "https://player.vimeo.com/video/1166379348?h=b37fe017f3&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Mentörluk 18 Şubat 1. Oturum",
      iframeTitle: "MYK Koç Seviye 6 Mentorluk - 18 Şubat 1. Oturum",
    },
    {
      src: "https://player.vimeo.com/video/1166377545?h=1e722fa2d9&badge=0&autopause=0&player_id=0&app_id=58479",
      title: "Mentörluk 18 Şubat 2. Oturum",
      iframeTitle: "MYK Koç Seviye 6 Mentorluk - 18 Şubat 2. Oturum",
    },
  ];

  // "PERFORMANS DERSİ" ve "T2 AÇIK UÇLU SORU ÇEŞİDİ" videolarını derslerden çıkar
  const performanceVideos = lessonVideos.filter((v) =>
    v.title?.toUpperCase().includes("PERFORMANS DERSİ"),
  );
  const t2Videos = lessonVideos.filter((v) =>
    v.title?.toUpperCase().startsWith("T2 AÇIK UÇLU SORU ÇEŞİDİ"),
  );
  const lessonVideosFiltered = lessonVideos.filter(
    (v) =>
      !v.title?.toUpperCase().includes("PERFORMANS DERSİ") &&
      !v.title?.toUpperCase().startsWith("T2 AÇIK UÇLU SORU ÇEŞİDİ"),
  );

  // Önce canlı listesine performans videolarını ekle ve mevcut kurala göre sırala
  const baseLive = [...liveVideos, ...performanceVideos];

  // Her grubu kendi içinde sırala
  const sortedLessonVideos = [...lessonVideosFiltered].sort((a, b) =>
    a.title.localeCompare(b.title, "tr", {
      numeric: true,
      sensitivity: "base",
    }),
  );

  // Belirli canlı yayınları listenin başına almak için öncelik tanımla
  const livePriority = new Set([
    "CANLI YAYIN 1. DERS 2. OTURUM - MYK'NIN GÖREVLERİ NELERDİR",
    "TANIŞMA - CANLI YAYIN 1. DERS 1. OTURUM",
  ]);

  const baseSortedLive = [...baseLive].sort((a, b) => {
    const aPriority = livePriority.has(a.title) ? 0 : 1;
    const bPriority = livePriority.has(b.title) ? 0 : 1;
    if (aPriority !== bPriority) return aPriority - bPriority;

    // Mentörluk 18 Şubat videoları için normal sıralama: 1, 2, 3
    const aIsMentorluk18 = a.title?.includes("Mentörluk 18 Şubat");
    const bIsMentorluk18 = b.title?.includes("Mentörluk 18 Şubat");

    if (aIsMentorluk18 && bIsMentorluk18) {
      // Normal sıralama: 1, 2, 3
      const aOturum = parseInt(a.title.match(/(\d+)\. Oturum/)?.[1] || "0");
      const bOturum = parseInt(b.title.match(/(\d+)\. Oturum/)?.[1] || "0");
      if (aOturum !== bOturum) return aOturum - bOturum;
    }

    return a.title.localeCompare(b.title, "tr", {
      numeric: true,
      sensitivity: "base",
    });
  });

  // T2 videolarını "1. PERFORMANS DERSİ 2. OTURUM"dan hemen sonra yerleştir
  const sortedLiveVideos = (() => {
    const result = [...baseSortedLive];
    if (t2Videos.length === 0) return result;
    const anchorIndex = result.findIndex(
      (v) => v.title === "1. PERFORMANS DERSİ 2. OTURUM",
    );
    const t2Sorted = [...t2Videos].sort((a, b) =>
      a.title.localeCompare(b.title, "tr", {
        numeric: true,
        sensitivity: "base",
      }),
    );
    if (anchorIndex === -1) {
      return [...result, ...t2Sorted];
    }
    const before = result.slice(0, anchorIndex + 1);
    const after = result.slice(anchorIndex + 1);
    return [...before, ...t2Sorted, ...after];
  })();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="afterInteractive"
        onLoad={() => setIsVimeoReady(true)}
      />
      {/* Vimeo oynatıcıları play olduğunda otomatik tam ekrana geçirme */}
      {isVimeoReady && <AutoFullscreenBinder />}
      {/* Video izleme takibi */}
      {isVimeoReady && <VideoProgressTracker />}
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          MYK Koç Seviye 6 Mentorluk Eğitimi
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Ders videoları ve canlı yayın kayıtlarını küçük kartlar halinde
          izleyebilirsiniz.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Toplam {lessonVideosFiltered.length + sortedLiveVideos.length} Video
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            ~
            {Math.round(
              (lessonVideosFiltered.length + sortedLiveVideos.length) * 1.5,
            )}{" "}
            Saat Eğitim
          </div>
        </div>
      </header>

      {/* Ders Videoları Bölümü */}
      <section className="mb-12">
        <header className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            Ders Videoları
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Eğitim içeriklerini sırasıyla takip edebilirsiniz.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedLessonVideos.map((v) => {
            const vid = extractVimeoId(v.src);
            return (
              <article
                key={v.src}
                className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md"
              >
                <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
                  <iframe
                    id={vid ? `vimeo-${vid}` : undefined}
                    data-video-title={v.title}
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
            );
          })}
        </div>
      </section>

      {/* Canlı Yayınlar Bölümü */}
      <section className="mb-12">
        <header className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            Canlı Yayın Kayıtları
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Grup çalışmaları ve canlı yayın kayıtlarını izleyebilirsiniz.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedLiveVideos.map((v) => {
            const vid = extractVimeoId(v.src);
            return (
              <article
                key={v.src}
                className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md"
              >
                <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
                  <iframe
                    id={vid ? `vimeo-${vid}` : undefined}
                    data-video-title={v.title}
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
            );
          })}
        </div>
      </section>

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
        document.querySelectorAll('iframe[src*="player.vimeo.com"]'),
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
