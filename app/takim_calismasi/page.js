import Image from "next/image";

export default function TakimCalismasiPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Sol Taraf - İçerik */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Ekip Dinamikleri ve Motivasyon
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Takım Çalışması ve Motivasyon Eğitimi
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600">
                Kurumlarda ekiplerin ortak hedeflere uyum içinde ve yüksek
                motivasyonla ulaşmasını destekleyen, iletişim, iş birliği ve
                güven odaklı, uygulamalı bir gelişim programı.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  1 tam gün
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
                  2× yarım gün seçeneği
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                  Yüz yüze / Online
                </span>
              </div>

              {/* Anahtar Kelimeler */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "Takım ruhu",
                    "İletişim",
                    "İş birliği",
                    "Motivasyon",
                    "Çatışma yönetimi",
                    "Performans",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
              <Image
                src="/takim_2.png"
                alt="Takım çalışması ve motivasyon eğitimi görseli"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amaç ve Hedefler */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Eğitimin Amacı
            </h2>
            <p className="mt-4 text-slate-600">
              Kurumlarda ekiplerin ortak hedeflere uyum içinde, yüksek
              motivasyonla ulaşmasını sağlamak; çalışanlar arasında iletişim, iş
              birliği ve güveni güçlendirmek.
            </p>
            <p className="mt-2 text-slate-600">
              Bu eğitimle ekip üyeleri sadece birlikte çalışmayı değil, birlikte
              başarmayı öğrenir.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Eğitim Hedefleri
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {[
                "Takım olmanın ve birlikte üretmenin önemini kavrar",
                "Farklı kişilik tipleriyle etkili iletişim kurmayı öğrenir",
                "Kurumsal hedeflerle bireysel motivasyonu hizalamayı başarır",
                "Çatışmaları yapıcı şekilde yönetme becerisi kazanır",
                "Takım içi güven, aidiyet ve sinerji oluşturmayı deneyimler",
              ].map((goal) => (
                <li key={goal} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-500"></span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Süre ve Format */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Eğitim Süresi
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>1 tam gün (6–8 saat)</li>
              <li>veya 2 yarım gün (4’er saat)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Eğitimin Formatı
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>📍 Yüz yüze veya online uygulanabilir</li>
              <li>🎯 Kuruma özel vaka ve örneklerle özelleştirilebilir</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Hedef Kitle
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Kurum genelindeki ekipler</li>
              <li>Orta ve üst kademe yöneticiler</li>
              <li>İK ve proje ekipleri</li>
              <li>Liderlik potansiyeli taşıyan çalışanlar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Başlıklar ve Akış */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Eğitim Başlıkları ve İçerik Akışı
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              1. Takım Ruhu ve Kurumsal Kültür
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>Takım ve grup farkı</li>
              <li>Başarılı ekiplerin temel dinamikleri</li>
              <li>Ortak vizyon, değer ve hedeflerin önemi</li>
              <li>Güven kültürünün oluşturulması</li>
            </ul>
          </div>
          {/* 2 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              2. Etkili İletişim ve İş Birliği
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>Ekip içinde açık iletişim ve geri bildirim kültürü</li>
              <li>Aktif dinleme, empati ve anlayış</li>
              <li>Rol paylaşımı ve görev netliği</li>
              <li>Departmanlar arası sinerji yaratma yöntemleri</li>
            </ul>
          </div>
          {/* 3 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              3. Motivasyonun Bilimi
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>Motivasyon kaynakları (içsel ve dışsal)</li>
              <li>Kurumsal hedeflerle bireysel motivasyonun uyumu</li>
              <li>Liderin motivasyon üzerindeki etkisi</li>
              <li>Ödül, takdir ve başarı paylaşımı kültürü</li>
            </ul>
          </div>
          {/* 4 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              4. Takım İçinde Çatışma Yönetimi
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>Çatışma türleri ve nedenleri</li>
              <li>Yapıcı çatışma çözüm teknikleri</li>
              <li>Duygusal zeka ile denge kurma</li>
              <li>“Fikir ayrılığı, saygı birliği” anlayışı</li>
            </ul>
          </div>
          {/* 5 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              5. Takım Dayanışması ve Performans
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>Ekip içinde rol farkındalığı</li>
              <li>Zor zamanlarda dayanışma becerisi</li>
              <li>Ortak başarı kutlamaları</li>
              <li>Yüksek performanslı ekiplerin alışkanlıkları</li>
            </ul>
          </div>
          {/* 6 */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              6. Uygulamalı Etkinlikler
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>“Birlikte Başar” takım oyunu</li>
              <li>Motivasyon senaryoları</li>
              <li>Liderlik simülasyonları</li>
              <li>Kapanışta takım manifesto oluşturma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Yöntemler ve Kazanımlar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Eğitim Yöntemleri
            </h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              {[
                "Etkileşimli sunumlar",
                "Grup çalışmaları",
                "Takım oyunları ve simülasyonlar",
                "Rol oynama aktiviteleri",
                "Geri bildirim seansları",
              ].map((method) => (
                <li key={method} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-indigo-500"></span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Eğitimden Kazanımlar
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              {[
                "✅ Güçlü ekip bağları ve yüksek motivasyon",
                "✅ Çalışanlar arasında güven, saygı ve iş birliği",
                "✅ Verimlilik, yaratıcılık ve çözüm odaklılıkta artış",
                "✅ Ortak hedefe yönelen, sinerjik kurum kültürü",
              ].map((gain) => (
                <li key={gain} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-500"></span>
                  <span>{gain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-slate-700">
          <p className="text-sm sm:text-base">
            Program kurumunuza özel örneklerle özelleştirilebilir. Detaylar ve
            takvim için bizimle iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            İletişime Geçin
          </a>
        </div>
      </section>
    </main>
  );
}
