"use client";

import Image from "next/image";
import Link from "next/link";

export default function IletisimPage() {
  const phoneNumber = "+90 312 999 98 07";
  const phoneHref = "tel:+903129999807";
  const whatsappNumber = "5350123295";
  const whatsappHref = `https://wa.me/90${whatsappNumber}`;
  const email = "info@hipnodil.com";
  const emailHref = `mailto:${email}`;
  const addressText =
    "Bağlıca Mahallesi Hilal Caddesi No:13 D:2 Etimesgut/ANKARA";
  const mapsHref =
    "https://maps.google.com/?q=Ba%C4%9Fl%C4%B1ca%20Mahallesi%20Hilal%20Caddesi%20No%3A13%20D%3A2%20Etimesgut%2FANKARA";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Başlık ve görsel */}
        <div className="flex flex-col items-center text-center">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24">
            <Image
              src="/contact.gif"
              alt="İletişim"
              fill
              priority
              sizes="96px"
              className="rounded-full ring-8 ring-sky-100"
            />
          </div>
          <h1 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800">
            İletişim Bilgileri
          </h1>
          <p className="mt-2 text-slate-500">Size ulaşmanın en kolay yolları</p>
        </div>

        {/* Kartlar */}
        <div className="mt-8 space-y-4">
          {/* Telefon */}
          <Link
            href={phoneHref}
            className="group block rounded-2xl bg-sky-50/70 p-5 sm:p-6 ring-1 ring-sky-100 hover:ring-sky-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm">
                {/* Telefon simgesi yerine contact.gif */}
                <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white">
                  <Image src="/contact.gif" alt="Telefon" fill sizes="48px" />
                </span>
              </span>
              <div className="flex-1">
                <p className="text-slate-700 font-semibold">Telefon</p>
                <p className="text-sky-700 group-hover:text-sky-800 font-medium">
                  {phoneNumber}
                </p>
              </div>
              <span className="ml-auto text-slate-400 group-hover:text-sky-600 transition-colors">
                ↗
              </span>
            </div>
          </Link>

          {/* WhatsApp */}
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-emerald-50/70 p-5 sm:p-6 ring-1 ring-emerald-100 hover:ring-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                <Image src="/wp.svg" alt="WhatsApp" width={28} height={28} />
              </span>
              <div className="flex-1">
                <p className="text-slate-700 font-semibold">WhatsApp</p>
                <p className="text-emerald-700 group-hover:text-emerald-800 font-medium">
                  +90 {whatsappNumber}
                </p>
              </div>
              <span className="ml-auto text-slate-400 group-hover:text-emerald-600 transition-colors">
                ↗
              </span>
            </div>
          </Link>

          {/* E-posta */}
          <Link
            href={emailHref}
            className="group block rounded-2xl bg-violet-50/70 p-5 sm:p-6 ring-1 ring-violet-100 hover:ring-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-slate-700 font-semibold">E-mail</p>
                <p className="text-violet-700 group-hover:text-violet-800 font-medium break-all">
                  {email}
                </p>
              </div>
              <span className="ml-auto text-slate-400 group-hover:text-violet-600 transition-colors">
                ↗
              </span>
            </div>
          </Link>

          {/* Adres */}
          <Link
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-amber-50/70 p-5 sm:p-6 ring-1 ring-amber-100 hover:ring-amber-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-slate-700 font-semibold">Adres</p>
                <p className="text-amber-800 group-hover:text-amber-900 font-medium">
                  {addressText}
                </p>
              </div>
              <span className="ml-auto text-slate-400 group-hover:text-amber-600 transition-colors">
                ↗
              </span>
            </div>
          </Link>

          {/* Çalışma Saatleri */}
          <div className="rounded-2xl bg-sky-50/70 p-5 sm:p-6 ring-1 ring-sky-100">
            <div className="flex items-start gap-4">
              <Image
                src="/wait.gif"
                alt="Çalışma Saatleri"
                width={48}
                height={48}
                className="shrink-0"
              />
              <div>
                <p className="text-slate-700 font-semibold">Çalışma Saatleri</p>
                <p className="text-slate-700">
                  Pazartesi - Cuma: 09:00 - 18:00
                </p>
                <p className="text-slate-700">Cumartesi: 09:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Harita - Adres */}
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
              </svg>
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                Bizi Ziyaret Edin
              </h2>
              <p className="text-slate-500">
                Merkez ofisimize kolayca ulaşabilirsiniz
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title="Hipnodil Ofis Haritası"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  addressText
                )}&output=embed`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="bg-white px-4 py-3 text-center text-slate-700">
              {addressText}
            </div>
          </div>
        </section>

        {/* Sosyal medya */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <p className="text-center text-slate-700 font-semibold">
            Sosyal Medya
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Link
              href="https://www.instagram.com/hipnodilakademi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 transition-all hover:bg-pink-50 hover:text-pink-700 hover:ring-pink-200 hover:-translate-y-0.5"
            >
              <Image src="/insta.svg" alt="Instagram" width={20} height={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@Hipnodil-Akademi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 transition-all hover:bg-red-50 hover:text-red-700 hover:ring-red-200 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
