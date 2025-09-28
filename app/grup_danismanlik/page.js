"use client";

import { useState, useEffect } from "react";

export default function GrupDanismanlik() {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const phoneNumber = "+90 312 999 98 07";
  const phoneHref = "tel:+903129999807";
  const whatsappNumber = "5350123295";
  const whatsappHref = `https://wa.me/90${whatsappNumber}`;

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const closeDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({});
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Grup Danışmanlıklarımız
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Aşağıda yer alan grup çalışmalarıyla öğrenme ve gelişim sürecinizi
            hızlandırın.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* NLP Eğitimi */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                NLP Eğitimi
              </h2>
              <p className="mt-3 text-gray-600">
                Nöro-Dilbilimsel Programlama teknikleriyle iletişim, hedef
                belirleme ve davranış değişikliği becerilerinizi güçlendirin.
                Uygulamalı atölyeler ve grup aktiviteleri ile desteklenir.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(0)}
                  className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[0] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(0)}
                      >
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(0)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Yaratıcı Drama Çalışması */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-orange-400 to-rose-500 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Yaratıcı Drama Çalışması
              </h2>
              <p className="mt-3 text-gray-600">
                Duygusal ifade, empati ve yaratıcılığı artıran, tiyatro temelli
                grup çalışmaları. İletişim, işbirliği ve özgüveni geliştirmeye
                odaklanır.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(1)}
                  className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[1] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(1)}
                      >
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(1)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ebeveyn Okulu */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Ebeveyn Okulu
              </h2>
              <p className="mt-3 text-gray-600">
                Çocuk gelişimi, disiplin yöntemleri ve etkili ebeveynlik
                becerileri konularında uzman rehberliğinde grup çalışmaları.
                Deneyim paylaşımı ve pratik çözümler sunar.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(2)}
                  className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[2] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(2)}
                      >
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-emerald-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(2)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ergen Ebeveyn Atölyeleri */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Ergen Ebeveyn Atölyeleri
              </h2>
              <p className="mt-3 text-gray-600">
                Ergenlik dönemindeki çocuklarla iletişim kurma, sınır koyma ve
                rehberlik etme konularında özel atölye çalışmaları. Bu zorlu
                dönemde ebeveynlere pratik destek ve stratejiler sunar.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(3)}
                  className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[3] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-cyan-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(3)}
                      >
                        <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-cyan-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(3)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stres ve Kaygı Yönetimi */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Stres ve Kaygı Yönetimi
              </h2>
              <p className="mt-3 text-gray-600">
                Günlük yaşamda stres ve kaygıyla başa çıkma teknikleri. Nefes
                egzersizleri, mindfulness ve gevşeme teknikleri ile desteklenen
                grup terapisi yaklaşımı.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(4)}
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[4] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(4)}
                      >
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(4)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Psiko Drama Temelli Çocuk ve Yetişkin Atölyeleri */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Psikodrama Temelli Atölyeler
              </h2>
              <p className="mt-3 text-gray-600">
                Çocuk ve yetişkinler için psiko drama teknikleriyle duygusal
                ifade, problem çözme ve kişisel gelişim atölyeleri. Rol oynama
                ve spontanlık ile içgörü kazanma.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(5)}
                  className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[5] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-violet-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(5)}
                      >
                        <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-violet-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(5)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Kurumsal Danışmanlık */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-slate-600 to-gray-700 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Kurumsal Danışmanlık
              </h2>
              <p className="mt-3 text-gray-600">
                Şirketler için özel tasarlanmış grup danışmanlık hizmetleri.
                Takım çalışması, liderlik gelişimi, iletişim becerileri ve
                organizasyonel değişim süreçlerinde destek.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(6)}
                  className="w-full md:w-auto bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[6] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(6)}
                      >
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-slate-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(6)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* NLP ve Quantum Training Eğitimleri */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                NLP ve Quantum Training Eğitimleri
              </h2>
              <p className="mt-3 text-gray-600">
                Nöro-Dilbilimsel Programlama ile Quantum düşünce tekniklerinin
                birleştiği ileri seviye eğitim programı. Bilinçaltı programlama
                ve enerji çalışmaları ile kişisel dönüşüm.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(7)}
                  className="w-full md:w-auto bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[7] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-yellow-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(7)}
                      >
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-yellow-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(7)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sınav Kaygısı Grup Danışmanlığı */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Sınav Kaygısı Grup Danışmanlığı
              </h2>
              <p className="mt-3 text-gray-600">
                Sınav kaygısı yaşayan öğrenciler için özel tasarlanmış grup
                çalışması. Kaygı yönetimi teknikleri, nefes egzersizleri ve
                sınav stratejileri ile başarıya odaklanma.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(8)}
                  className="w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[8] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-rose-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(8)}
                      >
                        <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-rose-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(8)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Verimli Ders Çalışma Grup Danışmanlığı */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Verimli Ders Çalışma Grup Danışmanlığı
              </h2>
              <p className="mt-3 text-gray-600">
                Etkili çalışma teknikleri, zaman yönetimi ve öğrenme
                stratejileri konularında grup çalışması. Hafıza teknikleri, not
                alma yöntemleri ve motivasyon artırma stratejileri.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(9)}
                  className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[9] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-teal-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(9)}
                      >
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-teal-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(9)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ergenlik ve İletişim Becerileri Grup Danışmanlığı */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Ergenlik ve İletişim Becerileri Grup Danışmanlığı
              </h2>
              <p className="mt-3 text-gray-600">
                Ergenlik dönemindeki gençler için özel tasarlanmış iletişim
                becerileri geliştirme programı. Akran ilişkileri, aile iletişimi
                ve özgüven geliştirme konularında grup çalışması.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(10)}
                  className="w-full md:w-auto bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[10] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-fuchsia-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(10)}
                      >
                        <div className="w-8 h-8 bg-fuchsia-100 rounded-full flex items-center justify-center group-hover:bg-fuchsia-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-fuchsia-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(10)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Oyun Terapisi */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Oyun Terapisi Eğitimi
              </h2>
              <p className="mt-3 text-gray-600">
                Çocukların duygusal, sosyal ve davranışsal sorunlarını oyun
                yoluyla çözmeye odaklanan terapi yaklaşımı. Güvenli bir ortamda
                çocukların kendilerini ifade etmelerini ve problem çözme
                becerilerini geliştirmelerini sağlar.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(11)}
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[11] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(11)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(11)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Masal ve Hikaye Anlatıcılığı */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Masal ve Hikaye Anlatıcılığı Eğitimi
              </h2>
              <p className="mt-3 text-gray-600">
                Geleneksel masal ve hikaye anlatma sanatı ile çocukların hayal
                gücünü, dil becerilerini ve duygusal gelişimini destekleyen grup
                çalışması. Yaratıcılık, dinleme becerileri ve empati geliştirme
                odaklı aktiviteler.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(12)}
                  className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[12] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-amber-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(12)}
                      >
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-amber-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(12)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Beden Dili ve Diksiyon Eğitimi */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Beden Dili ve Diksiyon Eğitimi
              </h2>
              <p className="mt-3 text-gray-600">
                Etkili iletişim için beden dilini doğru kullanma ve diksiyon
                becerilerini geliştirme eğitimi. Topluluk önünde konuşma, sunum
                teknikleri ve özgüven artırma konularında grup çalışmasıdır.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(13)}
                  className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[13] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-sky-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(13)}
                      >
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-sky-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(13)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mindfullness Denge Yaşam Eğitimi */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-visible transition-all">
            <div className="bg-gradient-to-r from-lime-500 to-green-600 h-2" />
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Mindfullness Denge Yaşam Eğitimi
              </h2>
              <p className="mt-3 text-gray-600">
                Farkındalık temelli yaşam becerileri ve denge kurma eğitimi.
                Stres yönetimi, duygusal regülasyon ve iç huzur bulma teknikleri
                ile yaşam kalitesini artıran grup çalışmasıdır.
              </p>
              <div className="mt-6 relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(14)}
                  className="w-full md:w-auto bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 px-6 rounded-xl transition inline-block text-center flex items-center justify-center gap-2"
                >
                  Bilgi Al
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdowns[14] && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 min-w-[200px]">
                    <div className="p-2">
                      <a
                        href={phoneHref}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-lime-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(14)}
                      >
                        <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center group-hover:bg-lime-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-lime-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Ara</div>
                          <div className="text-sm text-gray-500">
                            {phoneNumber}
                          </div>
                        </div>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
                        onClick={() => closeDropdown(14)}
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            WhatsApp
                          </div>
                          <div className="text-sm text-gray-500">
                            Mesaj gönder
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
