"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const REQUIRED_COURSE = "seviye6_kursu";

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

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          MYK Koçluk Seviye 6 Eğitimi – Ders Videoları
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Aşağıdaki dersleri sırasıyla izleyebilir, kaldığınız yerden devam
          edebilirsiniz.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Ders 1 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1014780792?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 1 - ULUSAL YETERLİLİK SİMGELER, TERİMLER,  VE KISALTMALAR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 1: Simgeler, Terimler ve Kısaltmalar
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 2 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015148357?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 2 - KOÇ ULUSAL YETERLİLİĞİNE GİRİŞ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 2: Koç Ulusal Yeterliliğine Giriş
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 3 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015153841?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 3 - ULUSAL  YETERLİLİK BİRİMİ - 1"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 3: Ulusal Yeterlilik Birimi - 1
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 4 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015157127?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 4 - ULUSAL YETERLİLİK BİRİMİ - 2"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 4: Ulusal Yeterlilik Birimi - 2
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 5 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015157595?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 5 - ULUSAL YETERLİLİK BİRİMİ - 3"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 5: Ulusal Yeterlilik Birimi - 3
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 7 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015160408?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 7 - ULUSAL YETERLİLİK BİRİMİ - 5"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 7: Ulusal Yeterlilik Birimi - 5
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 9 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015162916?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 9 - ULUSAL YETERLİLİK BİRİMİ - 7"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 9: Ulusal Yeterlilik Birimi - 7
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 11 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015165011?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 11 - KOÇLUK SÜRECİNİ YAPILANDIRMA   1"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 11: Koçluk Sürecini Yapılandırma 1
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 12 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015165684?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 12 - KOÇLUK SÜRECİNİ YAPILANDIRMA   2"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 12: Koçluk Sürecini Yapılandırma 2
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 13 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015179539?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 13 - KOÇLUK SÜRECİNİ YAPILANDIRMA 3"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 13: Koçluk Sürecini Yapılandırma 3
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 14 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015194733?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 14 - KOÇLUK SÜRECİNİ YAPILANDIRMA 4"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 14: Koçluk Sürecini Yapılandırma 4
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 16 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015200790?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS 16 - KOÇLUK SÜRECİNİ YAPILANDIRMA 6"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 16: Koçluk Sürecini Yapılandırma 6
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Ders 18 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015226101?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - DERS  18 - TEORİK T2 AÇIK UÇLU SORU ANLATIMI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Ders 18: Teorik T2 Açık Uçlu Soru Anlatımı
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* T2 Açık Uçlu Soru Çeşidi 1. Oturum */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015252543?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - T2 AÇIK UÇLU SORU ÇEŞİDİ 1. OTURUM"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            T2 Açık Uçlu Soru Çeşidi – 1. Oturum
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* T2 Açık Uçlu Soru Çeşidi 2. Oturum */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015258614?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - T2 AÇIK UÇLU SORU ÇEŞİDİ 2. OTURUM"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            T2 Açık Uçlu Soru Çeşidi – 2. Oturum
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* 1. Performans Dersi 1. Oturum */}
        <article className="group rounded-xl border-2 border-orange-500 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015262022?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - 1. PERFORMANS DERSİ 1. OTURUM"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            1. Performans Dersi – 1. Oturum
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* 1. Performans Dersi 2. Oturum */}
        <article className="group rounded-xl border-2 border-orange-500 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015269655?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - 1. PERFORMANS DERSİ 2. OTURUM"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            1. Performans Dersi – 2. Oturum
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* 2. Performans Dersi 2. Oturum */}
        <article className="group rounded-xl border-2 border-orange-500 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015297143?h=8c5aadb641&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - 2. PERFORMANS DERSİ 2. OTURUM"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            2. Performans Dersi – 2. Oturum
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* 3. Performans Dersi 1. Oturum */}
        <article className="group rounded-xl border-2 border-orange-500 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015628175?h=99415a66bb&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - 3. PERFORMANS DERSİ 1. OTURUM"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            3. Performans Dersi – 1. Oturum
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* 3. Performans Dersi 2. Oturum */}
        <article className="group rounded-xl border-2 border-orange-500 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015637515?h=ad1219c921&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - 3. PERFORMANS DERSİ 2. OTURUM"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            3. Performans Dersi – 2. Oturum
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>
        {/* Mentorluk – Canlı Yayın Kayıtları */}
        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1079774040?h=4218d79fbf&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 3. Grup 5. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            3. Grup 5. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1074962620?h=5b82794e4b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 3. Grup 1. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            3. Grup 1. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1052575306?h=846e0d9072&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 2. Grup 4. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            2. Grup 4. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1051894685?h=955590a4bd&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 2. Grup 3. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            2. Grup 3. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1050053220?h=7233d65586&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 2. Grup 2. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            2. Grup 2. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1048934916?h=0af232a866&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 2. Grup 1. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            2. Grup 1. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1078294669?h=ce025ba24c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 3. Grup 4. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            3. Grup 4. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1078073738?h=8db7b19f98&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 3. Grup 3. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            3. Grup 3. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1077226974?h=dc5820387a&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK KOÇ SEVİYE 6 - 3. Grup 2. Canlı Yayın"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            3. Grup 2. Canlı Yayın
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Tanışma – Canlı Yayın 1. Ders 1. Oturum */}
        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015233575?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - TANIŞMA - CANLI YAYIN 1. DERS 1. OTURUM"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Tanışma – Canlı Yayın 1. Ders 1. Oturum
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* Canlı Yayın 1. Ders 2. Oturum – MYK’nın Görevleri Nelerdir? */}
        <article className="group rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1015251231?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK Koçluk Seviye 6 Eğitimi - CANLI YAYIN 1. DERS 2. OTURUM - MYK'NIN GÖREVLERİ NELERDİR?"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Canlı Yayın 1. Ders 2. Oturum – MYK’nın Görevleri Nelerdir?
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 1 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016483327?h=ce75d29d33&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 1 - GİRİŞ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 1: Giriş
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 2 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016480899?h=87aa77f0bf&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 2 - KOÇLUĞUN TANIMI VE TEMEL KOÇLUK KAVRAMLARI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 2: Koçluğun Tanımı ve Temel
            Kavramlar
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 3 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016482253?h=bc6f2e2140&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 3 - TEMEL KAVRAMLAR VE RESMİ GAZETEDEKİ KOÇLUK MESLEK TANIMI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 3: Temel Kavramlar ve Meslek Tanımı
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 4 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016482775?h=26f7c4b85f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 4 - RESMİ GAZETEDEKİ KOÇLUK TANIMI, KOÇLUĞUN TARİHÇESİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 4: Koçluk Tanımı ve Tarihçesi
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 5 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016480107?h=079c6973af&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 5 - KOÇLUK İLİŞKİSİ (HARİTASI)"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 5: Koçluk İlişkisi (Haritası)
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 6 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016480329?h=176c5a4e30&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 6 - YETKİNLİKLER"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 6: Yetkinlikler
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 7 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016480688?h=66468adf92&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 7 - KOÇLUK FAYDALARI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 7: Koçluk Faydaları
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 8 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016479724?h=5b8a5bba1f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 8 - KOÇLUK DURUŞU VE ETİK KURALLAR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 8: Koçluk Duruşu ve Etik Kurallar
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 9 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016479871?h=da3e33a13f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 9 - KOÇLUK GÖRÜŞMELERİNİN TEMEL İLKELERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 9: Görüşmelerin Temel İlkeleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 10 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016479572?h=86f2239123&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 10 - TANIŞMA VE KOÇLUK BECERİLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 10: Tanışma ve Koçluk Becerileri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 11 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016479212?h=7bfbfbb188&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK  TEMEL KOÇLUK - 11 - KOÇLUKTA İLETİŞİM BECERİLERİ VE DİNLEME EVRELERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 11: İletişim Becerileri ve Dinleme
            Evreleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 12 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017492252?h=48f760cfe5&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 12 - BEDEN DİLİ VE GÖRÜŞMENİN AŞAMALARI 1"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 12: Beden Dili ve Görüşmenin
            Aşamaları 1
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 13 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017492515?h=66b733589c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 13 - GÖRÜŞMENİN AŞAMALARI 2"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 13: Görüşmenin Aşamaları 2
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 14 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017492839?h=2e0fa03d0b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 14 - GÖRÜŞMENİN AŞAMALARI DİNLEME"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 14: Görüşmenin Aşamaları - Dinleme
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 15 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017493140?h=d6936ea4ab&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 15 - İLETİŞİM ENGELLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 15: İletişim Engelleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 16 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017491273?h=05115bb4c9&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 16 - YANSITMA VE PEKİŞTİRME NEDİR NASIL YAPILIR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 16: Yansıtma ve Pekiştirme
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 17 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017491617?h=f010a2a724&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 17 - YORUMLAMA VE BİRLİKTE HAREKET ETME"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 17: Yorumlama ve Birlikte Hareket
            Etme
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 18 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017491947?h=ac89ea73c9&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 18 - KOÇLUKTA SORU TÜRLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 18: Koçlukta Soru Türleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 19 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017490926?h=8867074f07&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 19 - KOÇLUKTA SORU TÜRLERİ 2"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 19: Koçlukta Soru Türleri 2
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 20 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1025017034?h=b4e3db88a8&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 20 - SORU SORMA TEKNİKLERİ VE GÖRÜŞME ORTAMI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 20: Soru Sorma Teknikleri ve
            Görüşme Ortamı
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 21 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1025021298?h=d06990df7b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 21 - TALEP EDİLECEK ÜCRET, KOÇLUK SÖZLEŞMESİ, KURALLAR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 21: Talep Edilecek Ücret, Koçluk
            Sözleşmesi ve Kurallar
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 22 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1025020971?h=9f2a741fe6&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 22 - KURALLARIN HATIRLATILMASI , UZMANA YÖNLENDİRME"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 22: Kuralların Hatırlatılması ve
            Uzmana Yönlendirme
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 23 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1026136367?h=3f1062b9e6&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 23 - SUPERVİZYON NEDİR, NLP'YE GİRİŞ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 23: Süpervizyon Nedir, NLP'ye Giriş
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 24 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1026135937?h=2ade96a0c8&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 24 - NLP TARİHÇESİ ve NLP 4 TEMEL İLKESİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 24: NLP Tarihçesi ve NLP 4 Temel
            İlkesi
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 25 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1026135626?h=a0d3dd0377&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 25 - HEDEFE YAKLAŞIM ANALİZ UNSURLARI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 25: Hedefe Yaklaşım Analiz
            Unsurları
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 26 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1027273204?h=70351ed35c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 26 - SOSYAL İLETİŞİM VE YETERLİ ESNEKLİGE SAHİP OLMAK"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 26: Sosyal İletişim ve Yeterli
            Esneklik Sahip Olmak
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 27 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1027272809?h=0f4821b732&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 27 - SAĞ BEYİN VE SOL BEYİN ÖZELLİKLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 27: Sağ Beyin ve Sol Beyin
            Özellikleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 28 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1027272513?h=b8d34649d7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 28 - BİLİNÇLİ ZİHİN VE BİLİNÇALTI ZİHİN"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 28: Bilinçli Zihin ve Bilinçaltı
            Zihin
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 29 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1027272246?h=54fa9cb3f9&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 29 - HEDEFLERE ULAŞMAK İÇİN İYİ BİÇİMLENMİŞ KOŞULLAR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 29: Hedeflere Ulaşmak İçin İyi
            Biçimlenmiş Koşullar
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 30 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1027271457?h=2f11f5b28a&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 30 - HEDEFİ BAĞLAMA YERLEŞTİRMEK"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 30: Hedefi Bağlama Yerleştirmek
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 31 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1027271979?h=3bf8a8d654&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 31 - HEDEFİ NET BAĞLAMA DAYANDIRMAK VE OLUMLU YANLARINI KORUMAK"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 31: Hedefi Net Bağlama Dayandırmak
            ve Olumlu Yanlarını Korumak
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 32 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1027271722?h=d425d19723&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 32 - ARZULANAN HEDEF, MEVCUT DURUMUN OLUMLU YANLARINI KORUMAK"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 32: Arzulanan Hedef, Mevcut Durumun
            Olumlu Yanlarını Korumak
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 33 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1033441176?h=860c72e0a7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 33 - İYİ TASARLANMIŞ HEDEFLER, HEDEF DURUM KARŞILAŞTIRMASI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 33: İyi Tasarlanmış Hedefler, Hedef
            Durum Karşılaştırması
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 34 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1033441001?h=8aff7ced52&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 34 - TOTE MODELİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 34: TOTE Modeli
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 35 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1033440605?h=64e7cb1519&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 35 - İYİ TASARIMLANMIŞ SONUÇ İÇİN KONTROL LİSTESİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 35: İyi Tasarımlanmış Sonuç İçin
            Kontrol Listesi
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 36 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1033441781?h=309a296b3c&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 36 - NLP'NİN TEMEL KURALLARI VE İLKELERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 36: NLP'nin Temel Kuralları ve
            İlkeleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 37 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1033442217?h=ecca836366&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 37 - VİZYON VE ÖGRENME STİLLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 37: Vizyon ve Öğrenme Stilleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 38 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1039102142?h=d60ee7ecb9&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 38 - DİLDE DUYUSAL TERCİHLER VE KIRMIZI KİŞİLİK TİPİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 38: Dilde Duyusal Tercihler ve
            Kırmızı Kişilik Tipi
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 39 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1039101607?h=c58b3ee1df&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 39 - KİŞİLİK TİPLERİ SARI YEŞİL MAVİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 39: Kişilik Tipleri Sarı Yeşil Mavi
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 40 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1039101105?h=ab28934643&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 40 - GERÇEKLİK HARİTALARI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 40: Gerçeklik Haritaları
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 41 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1039100808?h=a49e0cfab7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 41 - ÇERÇEVELEME VE META MODEL"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 41: Çerçeveleme ve Meta Model
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 42 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1039100340?h=26453e0a9d&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 42 - İMGELEME - CANLANDIRMA - OLUMLAMA"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 42: İmgeleme, Canlandırma ve
            Olumlama
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 43 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1039098107?h=61d73868bf&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 43 - GÖZLE ERİŞİM İPUÇLARI - PEŞİN HUKUMLER"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 43: Gözle Erişim İpuçları ve Peşin
            Hükümler
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 44 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1039099942?h=8e1b4dcfd8&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 44 - ÖLÇEKLENDİRME - ÇAPA ATMA"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 44: Ölçeklendirme ve Çapa Atma
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>
      </div>
    </main>
  );
}
