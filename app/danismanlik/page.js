"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DanismanlikPage() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const specialties = [
    { id: "ogrenci", title: "Öğrenci Koçu", price: "2500,00 TL" },
    { id: "quantum", title: "Quantum Koçu", price: "3000,00 TL" },
    { id: "psikolojik", title: "Psikolojik Danışmanlık", price: "4500,00 TL" },
    { id: "nlp", title: "NLP Danışmanlığı", price: "3000,00 TL" },
    { id: "aile", title: "Aile Danışmanlığı", price: "3500,00 TL" },
    { id: "moxo", title: "MOXO Dikkat Testi", price: "4000,00 TL" },
    {
      id: "cozum",
      title: "Çözüm Odaklı Kısa Süreli Terapi",
      price: "4500,00 TL",
    },
  ];

  const BioParagraph = ({ children }) => (
    <p className="text-gray-700 leading-7">{children}</p>
  );

  return (
    <main className="w-full bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Profil Başlığı */}
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5 sm:p-7 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                <Image
                  src="/merve.png"
                  alt="Merve Öcüt profil fotoğrafı"
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="md:hidden">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Merve Öcüt Çelik
                </h1>
                <p className="mt-1 text-sm sm:text-base text-gray-600">
                  <span className="text-lg font-bold text-cyan-600 uppercase">
                    PDR UZMANI
                  </span>
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="hidden md:block">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Merve Öcüt Çelik
                </h1>
                <p className="mt-2 text-gray-600 text-base">
                  <span className="text-xl font-bold text-cyan-600 uppercase">
                    PDR UZMANI
                  </span>
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4">
                <div className="space-y-4">
                  <BioParagraph>
                    10 yıl kurumsal alanda Psikolojik Danışmanlık ve Rehberlik
                    yapmıştır. Psikoloji alanında yüksek lisans eğitimini
                    tamamlamıştır. Ergen ve yetişkinlerle bireysel danışmanlık
                    yürütmektedir. Ayrıca drama alanında aldığı eğitimlerle hem
                    çocuklara hem de yetişkinlere yönelik psikolojik atölye
                    çalışmaları düzenlemiştir. TEGV&apos;de drama temelli
                    koordinasyon çalışmalarında aktif olarak yer almıştır. Bir
                    akademide Yaşam Koçluğu eğitimi vermektedir. Bunun yanı
                    sıra, Yaşam Koçluğu ve Öğrenci Koçluğu alanlarında
                    bireylerin gelişim süreçlerine destek olmakta; Quantum
                    Teknikleri, NLP (Neuro Linguistic Programming) gibi
                    yöntemlerle danışanlarına çok yönlü bir yol haritası
                    sunmaktadır. Etkili iletişim, Beden Dili, Öfke Kontrolü,
                    Kaygı ve Stres Yönetimi gibi kişisel gelişim konularında
                    çeşitli çalışmalar yürütmektedir. Ebeveynlere, ergenlere,
                    bireylere ve çiftlere yönelik psikolojik danışmanlık
                    sunmakta, aynı zamanda yaşam koçluğu ile bireylerin kendi
                    potansiyellerini keşfetmelerine yardımcı olmaktadır.
                  </BioParagraph>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                    Aldığım Eğitimler
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Beden Dili ve Diksiyon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>İletişim Teknikleri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Quantum Training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Öfke ve Stres Yönetimi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>NLP (Neuro Linguistic Programming)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Profesyonel Yaşam ve Öğrenci Koçluğu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Yaratıcı Drama</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Moxo Dikkat Testi Uygulayıcılığı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Mindfullness-Denge Yaşam Eğitimi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">•</span>
                      <span>Çözüm Odaklı Kısa Süreli Terapi</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <BioParagraph>
                    <span className="font-semibold text-cyan-600">
                      Hayatınıza Dokunmaya Hazırım☘
                    </span>
                  </BioParagraph>
                  <BioParagraph>
                    Eğer siz de kendi yolculuğunuzda bir eşlikçiye ihtiyaç
                    duyuyorsanız, duygusal yüklerinizi hafifletmek, daha dengeli
                    ve farkındalıklı bir yaşam kurmak istiyorsanız, benimle
                    iletişime geçebilirsiniz. Bu yolculukta size destek olmaktan
                    mutluluk duyarım.
                  </BioParagraph>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bireysel Danışmanlıklar */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Bireysel Danışmanlıklar
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Size özel danışmanlık hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialties.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                          {item.price}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          Seans Ücreti
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 text-sm font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`h-4 w-4 transition-all duration-300 ${
                          expandedItems[item.id] ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                      Detaylı Bilgi
                    </div>
                  </button>
                </div>

                {/* Detay Bölümü */}
                {expandedItems[item.id] && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <div className="rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 p-4 border border-cyan-100">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                          <div className="text-sm text-gray-700 leading-relaxed">
                            {item.id === "ogrenci" && (
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">
                                    Profosyonel Öğrenci Koçluğu
                                  </h4>
                                  <p className="text-sm text-gray-700 leading-relaxed">
                                    Öğrenci koçu, öğrencinin zaman yönetimi,
                                    ders çalışma teknikleri, sınav kaygısı ve
                                    hedef odaklı ilerleme konularında yol
                                    gösterir. Amaç, öğrencinin kendi
                                    potansiyelini fark etmesini ve daha verimli,
                                    dengeli bir öğrenme alışkanlığı
                                    geliştirmesini sağlamaktır. Öğrencinin
                                    duygusal ve akademik tüm süreci koçluk
                                    sistemi ile takip edilir.
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">
                                    Profesyonel Yaşam Koçluğu
                                  </h4>
                                  <p className="text-sm text-gray-700 leading-relaxed">
                                    Profesyonel yaşam koçluğu, bireylerin hayat
                                    yolculuğunda denge arayışlarına ayna
                                    tutan,hedeflerine ulaşmasına eşlik eden
                                    kapsamlı bir tekniktir . Kişinin
                                    yeteneklerini keşfetmesini, hedeflerini
                                    netleştirmesini ve bu hedeflere ulaşmak için
                                    gerekli becerileri geliştirmesini destekler.
                                    Kariyer planlaması, kişisel gelişim ve özel
                                    yaşamlarındaolumlu bir süreç sağlamalarına
                                    destek olur.
                                  </p>
                                </div>
                              </div>
                            )}
                            {item.id === "quantum" && (
                              <p>
                                Quantum koçluğu, bilinç ve bilinçaltı düzeyinde
                                dönüşüm sağlayarak kişinin yaşamına yön
                                vermesine yardımcı olan güçlü bir koçluk
                                yaklaşımıdır. Düşünce ve inançları keşfetmeyi,
                                engelleri dönüştürmeyi ve içsel potansiyeli
                                açığa çıkarmayı hedefler. Bu süreçle birlikte
                                kişi; hedeflerine daha kolay odaklanır,
                                yaşamında dengeyi kurar ve istediği değişimi
                                güvenle hayata geçirir.Negatif kodları pozitife
                                dönüştürme yolculuğudur.
                              </p>
                            )}
                            {item.id === "psikolojik" && (
                              <p>
                                Psikolojik danışmanlık, bireylerin duygusal,
                                zihinsel ve davranışsal süreçlerini anlamalarına
                                ve sağlıklı bir şekilde yönetmelerine destek
                                olan profesyonel bir yardım sürecidir. Kişinin
                                kendini keşfetmesine, yaşamındaki zorluklarla
                                başa çıkmasına ve daha dengeli, doyumlu bir
                                yaşam sürmesine yardımcı olur.
                              </p>
                            )}
                            {item.id === "nlp" && (
                              <p>
                                NLP (Neuro Linguistic Programming) danışmanlığı,
                                bireylerin düşünce, dil ve davranış kalıplarını
                                anlayarak kişisel gelişim ve değişim süreçlerini
                                hızlandıran bir koçluk yaklaşımıdır. Bireyin
                                kendi değişim sürecini fark etmesidir.
                              </p>
                            )}
                            {item.id === "aile" && (
                              <p>
                                Aile danışmanlığı, aile üyeleri arasındaki
                                iletişim problemlerini çözmeye, aile
                                dinamiklerini güçlendirmeye ve sağlıklı aile
                                ilişkileri kurmaya odaklanan profesyonel bir
                                destek sürecidir. Ebeveyn-çocuk ilişkilerini
                                iyileştirir ve aile bireylerinin birbirlerini
                                daha iyi anlamalarına yardımcı olur.
                              </p>
                            )}
                            {item.id === "moxo" && (
                              <p>
                                Moxo Dikkat Testi, dikkat eksikliği ve
                                dürtüsellik gibi bilişsel süreçleri ölçmek
                                amacıyla kullanılan bilgisayar tabanlı, objektif
                                bir değerlendirme aracıdır. Çocuklar ve
                                yetişkinlerde dikkat, zamanlama, dürtüsellik ve
                                hiperaktivite alanlarını ayrı ayrı inceleyerek
                                detaylı bir profil sunar.
                              </p>
                            )}
                            {item.id === "cozum" && (
                              <p>
                                Çözüm Odaklı Kısa Süreli Terapi, kişinin mevcut
                                kaynaklarını ve güçlü yanlarını kullanarak hızlı
                                ve etkili çözümler üretmeye odaklanan bir terapi
                                yaklaşımıdır. Geçmiş problemlerin kişiye nasıl
                                bir deneyim kattığına odaklanarak gelecekteki
                                hedefler ve çözümler üzerinde durur. Kısa sürede
                                sonuç alınmasını hedefleyen, pragmatik ve
                                pozitif bir yaklaşımdır.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
