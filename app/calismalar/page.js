"use client";

import Image from "next/image";
import Link from "next/link";

export default function CalismalarPage() {
  const etkinlikler = [
    {
      id: 1,
      baslik: "Sesini Dünyaya Duyur, Sen de Yapabilirsin",
      konusmaci: "Bülent Gardiyanoğlu",
      tarih: "25 Eylül 2025",
      yer: "Ahi Evran Kongre ve Kültür Merkezi",
      organizator:
        "Kırşehir Ahi Evran Üniversitesi Toplumsal Katkı Koordinatörlüğü",
      aciklama:
        "Hipnodil Akademi olarak öğrencilerin kişisel gelişimine katkı sağlayan etkinlikleri her zaman destekliyoruz. Bu kapsamda, Kırşehir Ahi Evran Üniversitesi Toplumsal Katkı Koordinatörlüğü tarafından düzenlenen ve kişisel farkındalık alanında önemli çalışmalara imza atan yazar Bülent Gardiyanoğlu'nun \"Sesini Dünyaya Duyur, Sen de Yapabilirsin\" konulu söyleşisi büyük ilgiyle gerçekleşti. 25 Eylül 2025 tarihinde Ahi Evran Kongre ve Kültür Merkezinde düzenlenen etkinliğe Vali Yardımcısı İsmail Çetinkaya, Rektör Yardımcısı Prof. Dr. Musa Özata, akademik ve idari personelin yanı sıra çok sayıda öğrenci katıldı. Öğrencilerin kendi potansiyellerini keşfetmelerine ilham veren bu anlamlı buluşmada, Gardiyanoğlu'nun paylaşımları salondan büyük beğeni topladı.",
      resimler: ["/gardiyan.png", "/etkinlik.png", "/etkinlik1.png"],
      kategori: "Söyleşi",
      katilimcilar: [
        "Vali Yardımcısı İsmail Çetinkaya",
        "Rektör Yardımcısı Prof. Dr. Musa Özata",
        "Akademik ve idari personel",
        "Öğrenciler",
      ],
    },
    {
      id: 2,
      baslik: "Kültür ve Sanat Etkinliği",
      konusmaci: "Hipnodil Akademi",
      tarih: "15 Ekim 2025",
      yer: "Neşet Ertaş Kültür ve Sanat Merkezi",
      organizator: "Hipnodil Akademi",
      aciklama:
        "Hipnodil Akademi olarak kişisel gelişim ve koçluk eğitimlerinin yanı sıra kültür-sanat etkinliklerine de büyük önem veriyoruz. Katılımcılarımızın yaratıcılıklarını geliştirmelerine, sanatsal düşünme becerilerini güçlendirmelerine ve sosyal etkileşimlerini artırmalarına yönelik düzenlediğimiz kültür-sanat etkinliklerimiz, farklı perspektifler kazanmalarına vesile oluyor. Bu özel etkinliğimizde, sanatseverler bir araya gelerek keyifli ve öğretici bir gün geçirdiler.",
      resimler: ["/kultur.png", "/kultur2.png", "/kultur3.png"],
      kategori: "Kültür & Sanat",
      katilimcilar: [
        "Hipnodil Akademi Eğitmenleri",
        "Kurs Katılımcıları",
        "Sanat Meraklıları",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#06b6d4] to-[#14b8a6] py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Çalışmalarımız
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Kişisel gelişim ve koçluk alanında gerçekleştirdiğimiz
              etkinlikler, söyleşiler ve eğitim programları
            </p>
          </div>
        </div>
        {/* Dekoratif şekiller */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Etkinlikler Bölümü */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Gerçekleştirilen Etkinlikler
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Toplumsal katkı ve kişisel gelişim odaklı etkinliklerimiz
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-1">
          {etkinlikler.map((etkinlik) => (
            <div key={etkinlik.id} className="space-y-8">
              {/* Resim Bölümü */}
              <div className="w-full">
                <div className="group relative overflow-hidden bg-white shadow-2xl shadow-gray-900/20 transition-all duration-500 hover:shadow-3xl hover:shadow-gray-900/30">
                  <div
                    className={`grid gap-0 h-auto ${
                      etkinlik.resimler.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {etkinlik.resimler.map((resim, index) => (
                      <div
                        key={index}
                        className="relative group/image overflow-hidden w-full flex items-center justify-center bg-white"
                      >
                        <Image
                          src={resim}
                          alt={`${etkinlik.baslik} - Resim ${index + 1}`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-auto h-auto max-w-full transition-transform duration-700 group-hover/image:scale-105"
                          style={{ width: "auto", height: "auto" }}
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        {index === 0 && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center rounded-full bg-[#F26B0F] px-5 py-2 text-sm font-bold text-white shadow-xl">
                              {etkinlik.kategori}
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/30 backdrop-blur-md rounded-lg p-3 border border-white/20">
                            <p className="text-white text-sm md:text-base lg:text-lg font-bold">
                              {etkinlik.resimler.length === 1
                                ? etkinlik.baslik
                                : etkinlik.id === 1
                                ? index === 0
                                  ? "Konuşmacı: Bülent Gardiyanoğlu"
                                  : index === 1
                                  ? "Etkinlik Anı"
                                  : "Etkinlik Görüntüsü"
                                : index === 0
                                ? "Kültür ve Sanat"
                                : index === 1
                                ? "Etkinlik Atmosferi"
                                : "Sanat Anı"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* İçerik Bölümü */}
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/10 p-8 lg:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <h3 className="text-4xl font-bold text-gray-900 mb-4">
                        {etkinlik.baslik}
                      </h3>
                      <p className="text-xl text-gray-600">
                        <span className="font-semibold">Konuşmacı:</span>{" "}
                        {etkinlik.konusmaci}
                      </p>
                    </div>

                    {/* Tarih ve Yer Bilgileri */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl p-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#F26B0F] rounded-full flex items-center justify-center">
                            <svg
                              className="h-6 w-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-900">
                            Tarih
                          </p>
                          <p className="text-lg text-gray-600">
                            {etkinlik.tarih}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl p-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#F26B0F] rounded-full flex items-center justify-center">
                            <svg
                              className="h-6 w-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-900">
                            Yer
                          </p>
                          <p className="text-lg text-gray-600">
                            {etkinlik.yer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Organizatör */}
                    <div className="mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6">
                        <p className="text-lg font-semibold text-gray-900 mb-3">
                          Organizatör
                        </p>
                        <p className="text-lg text-gray-700">
                          {etkinlik.organizator}
                        </p>
                      </div>
                    </div>

                    {/* Açıklama */}
                    <div className="mb-8">
                      <div className="bg-gray-50 rounded-2xl p-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {etkinlik.aciklama}
                        </p>
                      </div>
                    </div>

                    {/* Katılımcılar */}
                    <div className="mb-8">
                      <p className="text-xl font-semibold text-gray-900 mb-6 text-center">
                        Katılımcılar
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                        {etkinlik.katilimcilar.map((katilimci, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200"
                          >
                            {katilimci}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
