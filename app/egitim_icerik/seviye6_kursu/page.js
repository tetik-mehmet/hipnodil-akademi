"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const REQUIRED_COURSE = "seviye6_kursu";
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
          MYK Koçluk Seviye 6 Eğitimi – Ders Videoları
        </h1>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 shadow-lg">
            <svg
              className="mr-2 h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="text-base font-semibold text-white md:text-lg">
              Toplam <span className="mx-1 text-xl font-bold">82</span> Video
            </span>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600 md:text-base">
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
            Özlem İsa ile MYK Temel Koçluk – 23: Süpervizyon Nedir, NLP&apos;ye
            Giriş
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
            Özlem İsa ile MYK Temel Koçluk – 36: NLP&apos;nin Temel Kuralları ve
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

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 45 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045320001?h=a520c57395&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 45 - META PROGRAMLAR 1"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 45: Meta Programlar 1
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 46 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045319667?h=ba290ad75e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 46 - META PROGRAMLAR 2"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 46: Meta Programlar 2
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 47 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045319203?h=4837e6e582&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 47 - KOÇLUK TEKNİKLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 47: Koçluk Teknikleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 48 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045318800?h=8b1de31891&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 48 - HAREKETE GEÇİRME VE KOÇLUK GÖRUSMELERİNDE DİKKAT ETMEMİZ GEREKENLER"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 48: Harekete Geçirme ve Dikkat
            Edilmesi Gerekenler
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 49 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045318381?h=78717c16ff&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 49 - YARGILARIMIZ VE GÜÇLÜ SORULAR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 49: Yargılarımız ve Güçlü Sorular
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 50 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045317647?h=042685201d&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 50 - GÜÇLÜ SORULAR SMART MODEL VE GROW MODEL"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 50: Güçlü Sorular SMART Model ve
            GROW Model
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 51 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045317302?h=32d14aa8f7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 51 - GROW MODEL"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 51: GROW Model
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 52 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045316936?h=ef0acb4811&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 52 - ETKİN GERİ BİLDİRİM VE GÜÇLÜ RİCALAR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 52: Etkin Geri Bildirim ve Güçlü
            Ricalar
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 53 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045316586?h=43e4c94c40&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 53 - KOÇLUK SÜRECİ VE KOÇLUK MODELLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 53: Koçluk Süreci ve Koçluk
            Modelleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 54 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045320529?h=709285bc46&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 54 - KOÇLUK MODELLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 54: Koçluk Modelleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 55 */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1045320297?h=5fecf25e5e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 55 - İLK GÖRÜŞME VE GÖRÜŞME İPUÇLARI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            Özlem İsa ile MYK Temel Koçluk – 55: İlk Görüşme ve Görüşme İpuçları
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 1 - TEMEL KOÇLUĞA GİRİŞ */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016992464?h=6cd5f3e892&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 1 - TEMEL KOÇLUĞA GİRİŞ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 1: Temel Koçluğa Giriş
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 2 - KOÇLUK BECERİLERİ VE SORUMLULUKLARI */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016990709?h=c62453d179&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 2 - KOÇLUK BECERİLERİ VE SORUMLULUKLARI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 2: Koçluk Becerileri ve Sorumlulukları
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 3 - GÜÇLÜ SORULAR VE SÜREÇ YÖNETİMİ */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017004129?h=8766d022cc&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 3 - GÜÇLÜ SORULAR VE SÜREÇ YÖNETİMİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 3: Güçlü Sorular ve Süreç Yönetimi
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 4 - KOÇ NELERİ YAPMALI / YAPMAMALI ? */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017012349?h=066e46ff8b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 4 - KOÇ NELERİ YAPMALI / YAPMAMALI ?"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 4: Koç Neleri Yapmalı / Yapmamalı?
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 5 - HEDEF - PLAN VE STRATEJİ OLUŞTURMA */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1017024764?h=caa4600996&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 5 - HEDEF - PLAN VE STRATEJİ OLUŞTURMA"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 5: Hedef - Plan ve Strateji Oluşturma
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 6 - KOÇLUKTA İLETİŞİM VE SEANS SÜRECİ */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016117189?h=8669a9514e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 6 - KOÇLUKTA İLETİŞİM VE SEANS SÜRECİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 6: Koçlukta İletişim ve Seans Süreci
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 7 - ÖĞRENME BİÇİMLERİ */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016117036?h=42be36be2e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 7 - ÖĞRENME BİÇİMLERİ"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 7: Öğrenme Biçimleri
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 8 - KİŞİLİK TİPLERİ SARI ve KIRMIZI */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016115350?h=489d512421&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 8 - KİŞİLİK TİPLERİ SARI ve KIRMIZI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 8: Kişilik Tipleri Sarı ve Kırmızı
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 9 - KİŞİLİK TİPLERİ MAVİ ve YEŞİL */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016116104?h=8850a9fb63&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 9 - KİŞİLİK TİPLERİ MAVİ ve YEŞİL"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 9: Kişilik Tipleri Mavi ve Yeşil
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 10 - İNANÇLAR VE KALIP YARGILAR */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016115880?h=13419a66c3&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 10 - İNANÇLAR VE KALIP YARGILAR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 10: İnançlar ve Kalıp Yargılar
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 11 - KOÇLUKTA DEĞERLER VE HAYAL KAVRAMI */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016116770?h=fe9a6814a0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 11 - KOÇLUKTA DEĞERLER VE HAYAL KAVRAMI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 11: Koçlukta Değerler ve Hayal Kavramı
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 12 - HEDEF KAVRAMI */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016114795?h=d3c820e34f&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 12 - HEDEF KAVRAMI"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 12: Hedef Kavramı
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 13 - KOÇLUKTA CANLANDIRMA NEDİR */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016115138?h=e4b749b287&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 13 - KOÇLUKTA CANLANDIRMA NEDİR"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 13: Koçlukta Canlandırma Nedir
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>

        {/* MYK TEMEL YAŞAM KOÇLUĞU DERS 14 - MÜŞTERİYİ HAREKETE GEÇİRME */}
        <article className="group rounded-xl border-2 border-blue-900 bg-white p-3 shadow-sm transition hover:shadow-md">
          <div className="relative w-full overflow-hidden rounded-lg bg-black pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1016116526?h=df07f72639&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="MYK TEMEL YAŞAM KOÇLUĞU DERS 14 - MÜŞTERİYİ HAREKETE GEÇİRME"
              allowFullScreen
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-900">
            MYK Temel Yaşam Koçluğu Ders 14: Müşteriyi Harekete Geçirme
          </h3>
          <p className="mt-1 text-xs text-gray-500">Süre: —</p>
        </article>
      </div>

      {/* PDF Dökümanlar Bölümü */}
      <section className="mt-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
            Eğitim Dökümanları
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 shadow-lg">
              <svg
                className="mr-2 h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="text-base font-semibold text-white md:text-lg">
                Toplam <span className="mx-1 text-xl font-bold">11</span> PDF
                Döküman
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            Eğitim materyallerini indirebilir ve inceleyebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* PDF 1 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-1-modul-temel-kocluk1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Modül 1: Temel Koçluk
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 2 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-2-modul-genel-kocluk-notlari2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Modül 2: Genel Koçluk Notları
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 3 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-4-modul-koclukta-derinlesme-nlp-ile-kisisel-gelisime-giris4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Modül 4: Koçlukta Derinleşme - NLP ile Kişisel Gelişime Giriş
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 4 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-koc-myk-seviye-6-detay5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Koç MYK Seviye 6 Detayları
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 5 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-kocluk-musteri-cizelgesi11.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Koçluk Müşteri Çizelgesi
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 6 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-koclukta-johari-penceresi-uygulama-ornegi6.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Koçlukta Johari Penceresi Uygulama Örneği
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 7 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-musteri-yasam-degerlendirme-gorusme-anketi7.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Müşteri Yaşam Değerlendirme Görüşme Anketi
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 8 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-ogrenme-stili-testi8.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Öğrenme Stili Testi
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 9 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-ornek-kocluk-gorusmesi9.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Örnek Koçluk Görüşmesi
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 10 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-temel-kocluk-egitimi-1-odev12.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Temel Koçluk Eğitimi - Ödev 1
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* PDF 11 */}
          <a
            href="/seviye6_pdf/myk-koc-seviye-6-hazirlik-egitimi-yasam-denge-carki-alistirmasi10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border-2 border-red-900 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-red-50"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                Yaşam Denge Çarkı Alıştırması
              </h3>
              <p className="mt-1 text-xs text-gray-500">PDF Döküman</p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
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
