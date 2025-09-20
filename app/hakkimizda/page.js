"use client";

import { useState } from "react";

export default function Hakkimizda() {
  const [activeTab, setActiveTab] = useState(0);

  const faaliyetAlanlari = [
    {
      title: "Kişisel Gelişim Programları",
      content:
        "Katılımcıların kendi potansiyellerini keşfetmelerini, güçlü yönlerini geliştirmelerini ve yaşam hedeflerine daha emin adımlarla ilerlemelerini sağlayan eğitim ve atölye çalışmaları sunuyoruz.",
      icon: "🌱",
    },
    {
      title: "Mesleki Yeterlilik ve Sınav Hazırlık",
      content:
        "Öğrencilerin ve profesyonellerin, ulusal ve uluslararası standartlarda belirlenen mesleki yeterlilik sınavlarına en doğru şekilde hazırlanabilmeleri için kapsamlı eğitim desteği veriyoruz. Bu süreçte, katılımcılar yalnızca bilgi değil, aynı zamanda uygulama becerileriyle de donatılır.",
      icon: "🎯",
    },
    {
      title: "Psikolojik Danışmanlık Hizmetleri",
      content:
        "Alanında uzman danışmanlarımızla, bireylerin karşılaştıkları duygusal, sosyal ve psikolojik zorluklarda profesyonel destek sağlıyoruz. Amacımız, bireylerin yaşam kalitelerini artırmak ve psikolojik sağlamlıklarını güçlendirmektir.",
      icon: "💙",
    },
    {
      title: "Koçluk Eğitimleri",
      content:
        "Kişisel farkındalık, liderlik ve hedef odaklılık üzerine yoğunlaşan koçluk eğitimlerimiz, hem bireysel gelişim hem de profesyonel iş yaşamında etkin bir yol haritası sunar. Katılımcılar, edindikleri bilgi ve becerilerle kendi yaşamlarında olduğu kadar çevrelerinde de fark yaratan birer lider olurlar.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Hipnodil Akademi olarak, bireylerin kişisel gelişimlerini
              desteklemek ve topluma değer katmak için buradayız.
            </p>
          </div>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Giriş Paragrafı */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong className="text-blue-600">Hipnodil Akademi</strong>,
              bireylerin kişisel gelişimlerini desteklemek, mesleki yeterlilik
              süreçlerinde yanlarında olmak ve danışmanlık hizmetleri ile
              topluma değer katmak amacıyla kurulmuş bir eğitim ve danışmanlık
              merkezidir.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Akademimiz; bilimsel temellere dayalı programları, uzman kadrosu
              ve yenilikçi eğitim anlayışıyla, bireylerin hem kişisel hem de
              profesyonel yaşamlarında daha donanımlı bireyler olmalarını
              hedefler.
            </p>
          </div>
        </div>

        {/* Faaliyet Alanları */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Faaliyet Alanlarımız
          </h2>

          {/* Desktop Tab View */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap gap-4 mb-8">
              {faaliyetAlanlari.map((alan, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                  }`}
                >
                  {alan.icon} {alan.title}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">
                  {faaliyetAlanlari[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {faaliyetAlanlari[activeTab].title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {faaliyetAlanlari[activeTab].content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-6">
            {faaliyetAlanlari.map((alan, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{alan.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {alan.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{alan.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vizyon ve Misyon */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-lg leading-relaxed">
                Sürekli gelişimi destekleyen, bilimsel yöntemleri merkeze alan
                ve etik değerler ışığında hareket eden bir kurum olmak.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-lg leading-relaxed">
                Bireylerin eğitim ve danışmanlık ihtiyaçlarına kalıcı çözümler
                üreterek, topluma donanımlı, bilinçli ve başarılı bireyler
                kazandırmak.
              </p>
            </div>
          </div>
        </div>

        {/* Son Paragraf */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="text-6xl mb-6">💫</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Bizim İnançlarımız
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Biz, her bireyin gelişim yolculuğunun benzersiz olduğuna inanıyor ve
            bu yolculukta güvenilir bir rehber olmayı taahhüt ediyoruz.
          </p>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                500+
              </div>
              <div className="text-gray-300">Mutlu Katılımcı</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                30+
              </div>
              <div className="text-gray-300">Eğitim Programı</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                5+
              </div>
              <div className="text-gray-300">Uzman Eğitmen</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">
                5+
              </div>
              <div className="text-gray-300">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
