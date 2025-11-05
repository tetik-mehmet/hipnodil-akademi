"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (isPrivacyOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isPrivacyOpen, isMounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative mt-0 w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Wave SVG - Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="waveGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#06b6d4", stopOpacity: 0.8 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#14b8a6", stopOpacity: 0.9 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0891b2", stopOpacity: 0.8 }}
              />
            </linearGradient>
            <linearGradient
              id="waveGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#0891b2", stopOpacity: 0.5 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#06b6d4", stopOpacity: 0.6 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#14b8a6", stopOpacity: 0.5 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#waveGradient1)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z;M321.39,70c58-10.79,114.16-20,172-30,82.39-12,168.19-12,250.45,0C823.78,52,906.67,65,985.66,80c70.05,13.48,146.53,20,214.34,0V0H0V40A600.21,600.21,0,0,0,321.39,70Z;M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            />
          </path>
          <path
            d="M0,20.31c40.33,8.48,85.59,14,129.33,14.93,96.61,2.11,192.87-8.99,288.06-27.5,102.87-20,204.63-47.3,310.26-54.5,98.1-6.69,198.61,8.42,293.48,38.5,46.15,14.63,93.25,30.93,142.5,38.5V0H0Z"
            fill="url(#waveGradient2)"
            opacity="0.7"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="M0,20.31c40.33,8.48,85.59,14,129.33,14.93,96.61,2.11,192.87-8.99,288.06-27.5,102.87-20,204.63-47.3,310.26-54.5,98.1-6.69,198.61,8.42,293.48,38.5,46.15,14.63,93.25,30.93,142.5,38.5V0H0Z;M0,35c40.33,5,85.59,8,129.33,9,96.61,1,192.87-5,288.06-15,102.87-12,204.63-25,310.26-28,98.1-3,198.61,4,293.48,20,46.15,8,93.25,18,142.5,22V0H0Z;M0,20.31c40.33,8.48,85.59,14,129.33,14.93,96.61,2.11,192.87-8.99,288.06-27.5,102.87-20,204.63-47.3,310.26-54.5,98.1-6.69,198.61,8.42,293.48,38.5,46.15,14.63,93.25,30.93,142.5,38.5V0H0Z"
            />
          </path>
        </svg>
      </div>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24 mt-12 md:mt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Logo + Tanım - Premium Section */}
          <div className="lg:col-span-4">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <Link href="/" className="inline-block group">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-1 backdrop-blur-sm transition-all duration-300 hover:from-white/10 hover:to-white/5">
                    <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-4">
                      <Image
                        src="/hipnodilakademilogo.png"
                        alt="Hipnodil Akademi"
                        width={180}
                        height={44}
                        className="h-11 w-auto brightness-110 transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                </Link>
                <p className="mt-6 text-sm/6 text-gray-300 font-light">
                  Hipnodil Akademi, koçluk ve kişisel gelişim alanında
                  Türkiye&#39;nin{" "}
                  <span className="font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    önde gelen
                  </span>{" "}
                  eğitim kurumlarından biridir.
                </p>

                {/* Sosyal Medya - Ultra Premium */}
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Bizi Takip Edin
                  </p>
                  <div className="flex items-center gap-3">
                    {[
                      {
                        href: "https://www.instagram.com/hipnodilakademi/",
                        label: "Instagram",
                        src: "/insta.svg",
                        color: "from-pink-500 to-purple-500",
                      },
                      {
                        href: "https://www.youtube.com/@Hipnodil-Akademi",
                        label: "YouTube",
                        src: "/youtube.svg",
                        color: "from-red-500 to-red-600",
                      },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        aria-label={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social relative"
                      >
                        {/* Ana Glow - Sürekli Görünür */}
                        <div
                          className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-60 group-hover/social:opacity-100 group-hover/social:blur-2xl group-hover/social:scale-110 transition-all duration-500 animate-pulse`}
                        ></div>

                        {/* Hover Rotate Glow */}
                        <div
                          className={`absolute -inset-3 bg-gradient-to-r ${item.color} rounded-2xl blur-2xl opacity-0 group-hover/social:opacity-80 group-hover/social:animate-spin-slow transition-all duration-700`}
                        ></div>

                        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover/social:scale-125 group-hover/social:rotate-12 group-hover/social:ring-white/60 group-hover/social:shadow-2xl">
                          <Image
                            src={item.src}
                            alt={item.label}
                            width={22}
                            height={22}
                            className="h-5.5 w-5.5 object-contain brightness-110 transition-all duration-300 group-hover/social:brightness-150 group-hover/social:scale-125 group-hover/social:-rotate-12"
                            priority={false}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Sections - Modern Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {/* Hızlı Linkler */}
              <div className="group">
                <div className="relative inline-block mb-6">
                  <h3 className="relative text-lg font-bold tracking-tight text-white">
                    Hızlı Linkler
                    <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    {
                      href: "/",
                      label: "Ana Sayfa",
                      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                    },
                    {
                      href: "/hakkimizda",
                      label: "Hakkımızda",
                      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    },
                    {
                      href: "/egitmenler",
                      label: "Eğitmenlerimiz",
                      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                    },
                    {
                      href: "/paketler",
                      label: "Paketlerimiz",
                      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                    },
                    {
                      href: "/iletisim",
                      label: "İletişim",
                      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    },
                  ].map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group/link flex items-center gap-3 text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
                      >
                        <svg
                          className="h-4 w-4 text-cyan-400 transition-all duration-300 group-hover/link:text-teal-400 group-hover/link:scale-110"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={l.icon}
                          />
                        </svg>
                        <span className="text-sm font-medium relative">
                          {l.label}
                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover/link:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eğitimlerimiz */}
              <div className="group">
                <div className="relative inline-block mb-6">
                  <h3 className="relative text-lg font-bold tracking-tight text-white">
                    Eğitimlerimiz
                    <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    {
                      label: "MYK KOÇ SEVİYE 6",
                      href: "/kurslar/egitim_seviye_6",
                      badge: "Seviye 6",
                    },
                    {
                      label: "MYK KOÇ MENTÖRLÜK",
                      href: "/kurslar/mentorluk",
                      badge: "Mentörlük",
                    },
                    {
                      label: "KURUMSAL KOÇLUK",
                      href: "/kurslar/kurumsal_kocluk",
                      badge: "Kurumsal",
                    },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group/link block transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="flex items-start gap-2">
                          <svg
                            className="h-4 w-4 mt-0.5 text-teal-400 flex-shrink-0 transition-all duration-300 group-hover/link:text-cyan-400 group-hover/link:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-white transition-colors">
                              {item.label}
                            </span>
                            <span className="block text-xs text-cyan-400/70 mt-0.5">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* İletişim - Premium Design */}
              <div className="group">
                <div className="relative inline-block mb-6">
                  <h3 className="relative text-lg font-bold tracking-tight text-white">
                    İletişim
                    <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.google.com/maps?q=Ba%C4%9Fl%C4%B1ca%20Mah.%20Hilal%20Cad.%2013%2F2%20Etimesgut%2FANKARA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/contact flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg blur-md opacity-0 group-hover/contact:opacity-50 transition-opacity"></div>
                          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 ring-1 ring-cyan-400/30">
                            <svg
                              className="h-4 w-4 text-cyan-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 hover:text-white transition-colors flex-1">
                        Bağlıca Mah. Hilal Cad. 13/2 Etimesgut/ANKARA
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+903129998807"
                      className="group/contact flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg blur-md opacity-0 group-hover/contact:opacity-50 transition-opacity"></div>
                          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 ring-1 ring-teal-400/30">
                            <svg
                              className="h-4 w-4 text-teal-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C12.85 21 3 11.15 3 0.99A1 1 0 0 1 4 0h2.49a1 1 0 0 1 1 1c0 1.23.2 2.44.57 3.56a1 1 0 0 1-.24 1.03l-2.2 2.2Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 hover:text-white transition-colors font-medium">
                        +90 (312) 999 98 07
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@hipnodilakademi.com"
                      className="group/contact flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur-md opacity-0 group-hover/contact:opacity-50 transition-opacity"></div>
                          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 ring-1 ring-blue-400/30">
                            <svg
                              className="h-4 w-4 text-blue-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm3 1 7 5 7-5H5Zm14 3.24-7 5-7-5V20h14V8.24Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 hover:text-white transition-colors">
                        info@hipnodilakademi.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="relative mt-16 md:mt-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          {/* Copyright Section - Ultra Premium */}
          <div className="relative pt-8 pb-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left: Copyright */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 ring-1 ring-cyan-400/20">
                  <svg
                    className="h-5 w-5 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">
                    © 2024{" "}
                    <span className="font-bold text-white">
                      Hipnodil Akademi
                    </span>
                  </p>
                  <p className="text-xs text-gray-400">Tüm Hakları Saklıdır.</p>
                </div>
              </div>

              {/* Center: Decorative Element */}
              <div className="hidden lg:flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 opacity-${
                      (i + 1) * 30
                    }`}
                  ></div>
                ))}
              </div>

              {/* Right: Legal Links */}
              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(true)}
                  className="group/legal relative inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                  aria-haspopup="dialog"
                  aria-expanded={isPrivacyOpen}
                >
                  <svg
                    className="h-4 w-4 text-cyan-400 transition-transform group-hover/legal:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="relative">
                    Gizlilik Politikası
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all group-hover/legal:w-full"></span>
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-teal-500/30"></div>
              <div className="flex gap-1">
                <div className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse"></div>
                <div className="h-1 w-1 rounded-full bg-teal-400 animate-pulse animation-delay-200"></div>
                <div className="h-1 w-1 rounded-full bg-blue-400 animate-pulse animation-delay-400"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-cyan-500/0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Ultra Premium */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Sayfanın en üstüne git"
          className="group fixed bottom-8 left-8 z-50"
        >
          {/* Animated Rings */}
          <div className="absolute inset-0 animate-ping">
            <div className="h-full w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 opacity-20"></div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

          {/* Button Body */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 via-cyan-500 to-teal-600 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-cyan-500/50 group-hover:-translate-y-1">
            {/* Inner Gradient Border */}
            <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 opacity-50"></div>

            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <svg
                className="h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="relative px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-xl ring-1 ring-white/10 whitespace-nowrap">
              Yukarı Çık
              <div className="absolute top-full left-6 -mt-1 border-4 border-transparent border-t-slate-900"></div>
            </div>
          </div>
        </button>
      )}

      {/* Gizlilik Politikası Modal (Portal) */}
      {isMounted &&
        isPrivacyOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gizlilik Politikası"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsPrivacyOpen(false)}
            />
            <div className="relative z-[101] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b px-6 py-4">
                <h2 className="text-base font-semibold text-gray-900">
                  Gizlilik Politikası
                </h2>
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(false)}
                  className="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  aria-label="Kapat"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811Z" />
                  </svg>
                </button>
              </div>
              <div className="max-h-[85vh] overflow-y-auto px-6 py-5 text-sm leading-6 text-gray-700">
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  1. Genel Bilgiler
                </h3>
                <p className="mb-4">
                  Hipnodil Akademi olarak, kullanıcılarımızın gizliliğine büyük
                  önem veriyoruz. Bu Gizlilik Politikası, web sitemiz ve mobil
                  platformlarımız aracılığıyla toplanan bilgilerin nasıl
                  toplandığını, kullanıldığını, korunduğunu ve paylaşıldığını
                  açıklar.
                </p>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  2. Toplanan Bilgiler
                </h3>
                <p className="mb-2">
                  Platformumuzda aşağıdaki bilgileri toplayabiliriz:
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5">
                  <li>Ad, soyad, e-posta adresi, telefon numarası</li>
                  <li>Kullanıcı adı, parola</li>
                  <li>IP adresi, tarayıcı bilgisi, cihaz türü</li>
                  <li>
                    Eğitim geçmişi ve platform üzerindeki etkileşim bilgileri
                  </li>
                  <li>Geri bildirimler, yorumlar veya destek talepleri</li>
                </ul>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  3. Bilgilerin Kullanım Amaçları
                </h3>
                <p className="mb-2">
                  Toplanan bilgiler şu amaçlarla kullanılabilir:
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5">
                  <li>Üyelik ve kimlik doğrulama süreçlerinin yürütülmesi</li>
                  <li>
                    Eğitim içeriklerine erişim ve kullanıcı deneyiminin
                    geliştirilmesi
                  </li>
                  <li>Sistem güvenliği ve performans optimizasyonu</li>
                  <li>
                    Kullanıcılara bilgilendirme, duyuru ve kampanya iletimi
                  </li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                </ul>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  4. Verilerin Saklanması ve Güvenliği
                </h3>
                <p className="mb-4">
                  Verileriniz güvenli sunucularda, şifrelenmiş bağlantılar (SSL)
                  aracılığıyla korunur. Kredi kartı veya ödeme bilgileri,
                  yalnızca ödeme sağlayıcısı (örneğin iyzico, Stripe vb.)
                  tarafından işlenir ve sistemimizde saklanmaz. Veriler, yasal
                  süre boyunca saklanır ve süresi dolduğunda güvenli şekilde
                  silinir.
                </p>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  5. Bilgilerin Paylaşımı
                </h3>
                <p className="mb-2">
                  Kişisel verileriniz, yalnızca aşağıdaki durumlarda
                  paylaşılabilir:
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5">
                  <li>Yasal yükümlülük gereği resmi kurumlarla,</li>
                  <li>
                    Hizmet aldığımız iş ortakları (barındırma, e-posta, güvenlik
                    sağlayıcıları) ile,
                  </li>
                  <li>Açık rızanızla belirttiğiniz üçüncü taraflarla.</li>
                </ul>
                <p className="mb-4">
                  Hiçbir durumda kişisel verileriniz üçüncü kişilere satılmaz.
                </p>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  6. Çocukların Gizliliği
                </h3>
                <p className="mb-4">
                  Hipnodil Akademi, 18 yaşından küçük kişilerden bilerek veri
                  toplamaz. Yanlışlıkla alınan bilgiler tespit edildiğinde
                  derhal silinir.
                </p>

                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  7. Haklarınız
                </h3>
                <p className="mb-2">
                  KVKK madde 11 kapsamında, kişisel verilerinizle ilgili: Bilgi
                  talep etme, düzeltme veya silinmesini isteme, işlenmesine
                  itiraz etme haklarına sahipsiniz.
                </p>
                <p className="mb-0">
                  Taleplerinizi{" "}
                  <a
                    href="mailto:kvkk@hipnodilakademi.net"
                    className="font-medium text-cyan-700 underline"
                  >
                    hipnodilakademi@gmail.com
                  </a>{" "}
                  adresine gönderebilirsiniz.
                </p>
              </div>
              <div className="sticky bottom-0 flex items-center justify-end gap-3 border-t bg-white px-6 py-4">
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(false)}
                  className="rounded-md bg-cyan-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </footer>
  );
}
