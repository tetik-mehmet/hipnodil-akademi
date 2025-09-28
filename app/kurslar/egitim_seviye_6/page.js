"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EgitimSeviye6() {
  const router = useRouter();

  const handleKayitOl = () => {
    router.push("/iletisim");
  };

  const handleDanismanlik = () => {
    router.push("/iletisim");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="block whitespace-nowrap">
                  Profesyonel Koç (Seviye 6)
                </span>
                <span className="block text-blue-300">
                  Sınav Hazırlık Eğitimi
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Mesleki Yeterlilik Kurumu (MYK) sınavına hazırlık için
                tasarlanmış kapsamlı ve profesyonel koçluk eğitim programı.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-30"></div>
                <Image
                  src="/merve.png"
                  alt="Eğitmen Merve"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kursun Amacı Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kursun Amacı
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu program, koçluk mesleğini kariyer olarak sürdürmek isteyen
                bireyleri ve etkili iletişim becerileriyle profesyonel
                yaşamlarını geliştirmek isteyen kişileri yönlendirmeyi
                amaçlamaktadır.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Katılımcılar farkındalık kazanacak, empatinin önemini öğrenecek
                ve hedeflerine ulaşmada destek alacaklardır.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <p className="text-gray-800 font-medium mb-4">
                  Eğitim tamamlandığında, Hipnodil Akademi tarafından
                  uluslararası geçerliliği olan sertifika verilecektir. 60
                  saatlik &ldquo;Temel Koçluk Eğitimi&rdquo; Mesleki Yeterlilik
                  Kurumu&apos;nun (MYK) sınavının ön koşuludur.
                </p>
                <p className="text-gray-800">
                  &ldquo;Profesyonel Koç (Seviye 6) Sınav Hazırlık
                  Eğitimi&rdquo; MYK sınavına daha etkili hazırlanmanıza
                  yardımcı olacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Sonrası Kazanımlar */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bu Eğitimden Sonra
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Güçlü Yaşam
              </h3>
              <p className="text-gray-600">
                Hem sizin hem de çevrenizdekilerin hayatı daha güçlü ve etkili
                hale gelecek.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kariyer Gelişimi
              </h3>
              <p className="text-gray-600">
                Koçluğu kariyerine katmak isteyen bir profesyonel
                olabileceksiniz.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Liderlik
              </h3>
              <p className="text-gray-600">
                Ekip üyelerinin verimliliğini artırmayı hedefleyen bir lider
                olacaksınız.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Girişimcilik
              </h3>
              <p className="text-gray-600">
                İnsanlara rehberlik etmek isteyen bir girişimci olabileceksiniz.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                İletişim
              </h3>
              <p className="text-gray-600">
                İletişim yetkinliklerini ileriye taşımak isteyen bir birey
                olacaksınız.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                İlham Kaynağı
              </h3>
              <p className="text-gray-600">
                Kendi deneyimlerinden başkalarına ilham olmak isteyen bir yol
                gösterici olacaksınız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kursun İçeriği Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kursun İçeriği
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-3xl p-8 md:p-12 text-white mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Profesyonel Sertifikasyon için Temel Koçluk Eğitimi
            </h3>
            <p className="text-lg text-blue-100 text-center mb-8">
              Videolar + Online / Canlı Sınıf Eğitimi | Sertifika Programı (60
              Saat)
            </p>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-black">
                Program Hakkında
              </h4>
              <p className="text-black leading-relaxed font-medium">
                Temel Koçluk Eğitimi, güçlü bir iş modeli oluşturmanıza ve
                etkili iletişim becerileri geliştirmede önemli adımlar atmanıza
                yardımcı olacaktır.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Video İçerikleri
                </h4>
              </div>
              <p className="text-gray-700 font-medium">
                50 saati aşkın kapsamlı video içerikleri
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Canlı Eğitimler
                </h4>
              </div>
              <p className="text-gray-700 font-medium">
                8 saatlik çevrimiçi canlı sınıf eğitimleri
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Demo Uygulamaları
                </h4>
              </div>
              <p className="text-gray-700 font-medium">
                2 saatlik demo uygulamaları
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Envanterler
                </h4>
              </div>
              <p className="text-gray-700 font-medium">
                Çeşitli değerlendirme envanterleri
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Ödevler</h4>
              </div>
              <p className="text-gray-700 font-medium">
                Çeşitli ödevler ve uygulamalar
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Eğitim Dökümanları
                </h4>
              </div>
              <p className="text-gray-700 font-medium">
                Detaylı eğitim dökümanları
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                60 Saatlik Değişim Serüveni
              </h3>
              <p className="text-lg text-blue-100">
                Demo koçluklar ve uygulama örneklerinden oluşan toplam 60
                saatlik bir değişim serüvenine katılacaksınız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programın İşleyişi Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programın İşleyişi
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Canlı Sınıflar
                </h3>
              </div>
              <p className="text-gray-600">
                MYK Belgeli Profesyonel Koçlarımız ile canlı sınıflara ve
                mentörlük uygulamalarına katılabileceksiniz.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Esnek Eğitim
                </h3>
              </div>
              <p className="text-gray-600">
                Kendi seçtikleri zaman dilimlerinde videoları ve uygulamaları
                izleyebilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Değerlendirme
                </h3>
              </div>
              <p className="text-gray-600">
                Her bölümün sonunda bulunan kısa uygulamalar ile bilgilerinizi
                sınayabileceksiniz.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Demo Koçluk
                </h3>
              </div>
              <p className="text-gray-600">
                Demo koçluklarının ses kayıtlarını alarak Hipnodil
                Akademi&apos;ye göndereceksiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Çevirimiçi-Canlı Sınıflar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Çevirimiçi-Canlı Sınıflar (Zoom Toplantıları)
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Program Takvimi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Haftanın 2 günü, çevrimiçi canlı sınıf etkinlikleri düzenli
                  olarak açılacak ve katılımcılara tarihleri duyurulacak.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Haftalık 2 Gün Canlı Eğitim
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Eğitim İçeriği
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Bu çevrimiçi - canlı etkinliklerin gündemleri eğitim
                  içeriklerinden belirlenmiş konulardan oluşacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soru-Cevap Etkinliği Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Soru-Cevap Etkinliği
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Merak Ettiklerinizi Sorun
                </h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Bu etkinlikte; program hakkında merak ettikleriniz,
                sertifikasyon süreci, MYK süreci, eğitimle ilgili merak
                ettiğiniz konular vb. başlıklara dair sorularınızı{" "}
                <strong>YAZILI</strong> olarak ileteceksiniz.
              </p>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Nasıl Çalışır?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Yazılı olarak bildirdiğiniz bu sorular eğitimi hazırlayanlar
                  tarafından, Zoom toplantısında canlı olarak cevaplanacak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Koçluk Toplantıları Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Demo Koçluk Toplantıları
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Haftalık Değerlendirme Süreci
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Her hafta, programı tamamlayan katılımcılar değerlendirmeleri
                dinleyecek ve bazen soru bazen de yorumlarınızla değerlendirme
                sürecinin parçası olacaksınız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kursun Günleri/Saatleri Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kursun Günleri/Saatleri
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Video Erişimi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eğitim kaydı tamamlanan öğrencilerimizin ders videolarına
                  sistemimiz üzerinden erişim sağlayabilecektir.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  7/24 Video Erişimi
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Duyuru Sistemi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Online etkinliklerimiz WhatsApp gruplarımızdan duyurulacaktır.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  WhatsApp Grup Duyuruları
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitmen Ünvanı Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Eğitmen Ünvanı
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/experience.gif"
                  alt="Experience"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-bold mb-4">PDR Uzmanı</h3>
              <h4 className="text-2xl font-semibold text-blue-200 mb-6">
                Profesyonel Yaşam Koçu
              </h4>

              <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Alanında uzman eğitmenlerimiz ile profesyonel koçluk eğitimi
                alacaksınız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Profesyonel Koçluk Kariyerinize Başlayın
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            MYK sertifikası ile koçluk alanında profesyonel bir kariyer inşa
            edin. Bugün kayıt olun ve değişim yolculuğunuza başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleKayitOl}
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105"
            >
              Hemen Kayıt Ol
            </button>
            <button
              onClick={handleDanismanlik}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
            >
              Ücretsiz Danışmanlık
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
