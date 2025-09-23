"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/verify", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
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
      </div>
    </main>
  );
}
