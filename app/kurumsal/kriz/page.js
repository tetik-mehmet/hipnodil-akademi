import Image from "next/image";
export const metadata = {
  title: "Kriz Yönetimi ve Krize Müdahale Eğitimi | Hipnodil Akademi",
  description:
    "Kurumsal kriz yönetimi, kriz iletişimi ve müdahale becerileri eğitimi. Kurumlarda afet, itibar ve operasyonel krizlere hazırlık ve etkili yönetim.",
};

export default function KrizPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-100 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Sol Taraf - İçerik */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                Kriz Yönetimi ve Krize Müdahale Eğitimi
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
                Kurumsal yapıların olası kriz durumlarında hızlı, doğru ve
                etkili kararlar alabilmesini sağlamak; itibar kaybı, operasyonel
                aksaklık ve çalışan paniklerini en aza indirgeyerek
                sürdürülebilir bir yönetim kültürü oluşturmak.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#icerik"
                  className="inline-flex items-center rounded-full bg-cyan-600 px-5 py-2.5 text-base font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Eğitim İçeriği
                </a>
                <a
                  href="#hedefler"
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-base font-medium text-cyan-700 ring-1 ring-inset ring-cyan-200 shadow-sm hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Eğitim Hedefleri
                </a>
              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
              <Image
                src="/kriz_1.png"
                alt="Kriz yönetimi eğitimi görseli"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Süresi */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 p-8 sm:p-10 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Eğitimin Süresi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-3">📅</div>
                <div className="text-xl font-semibold text-white mb-2">
                  1 Tam Gün
                </div>
                <div className="text-cyan-100">6-8 saat</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-3">⏰</div>
                <div className="text-xl font-semibold text-white mb-2">
                  2 Yarım Gün
                </div>
                <div className="text-cyan-100">4&apos;er saat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Hedefleri */}
      <section
        id="hedefler"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16"
      >
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Eğitim Hedefleri
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Bu eğitimin sonunda katılımcıların geliştireceği beceriler.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🎯",
              title: "Kriz Türlerini Tanımlama",
              desc: "Kriz türlerini ve etkilerini analiz edebilme becerisi",
            },
            {
              icon: "📋",
              title: "Hazırlık Planı Oluşturma",
              desc: "Kriz öncesi hazırlık planlarını geliştirme yetkinliği",
            },
            {
              icon: "⚡",
              title: "Kriz Anında Müdahale",
              desc: "Doğru iletişim ve koordinasyon tekniklerini uygulama",
            },
            {
              icon: "🔄",
              title: "İyileştirme Süreçleri",
              desc: "Kriz sonrası iyileştirme süreçlerini yönetme becerisi",
            },
            {
              icon: "🛡️",
              title: "Kurumsal Güveni Koruma",
              desc: "Kurum prestijini ve çalışan güvenini koruma yetkinliği",
            },
            {
              icon: "📊",
              title: "Risk Analizi",
              desc: "Proaktif risk yönetimi ve önleme stratejileri",
            },
          ].map((goal, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl">{goal.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {goal.title}
                </h3>
                <p className="text-base text-gray-600">{goal.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eğitim İçeriği */}
      <section
        id="icerik"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16"
      >
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Eğitim Başlıkları ve İçerik Akışı
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Modüler yapı, her bölümde uygulanabilir araçlar ve pratikler.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
          {/* 1 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white text-base font-semibold">
                1
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Kriz Kavramı ve Kurumsal Etkileri
                </h3>
                <p className="text-base text-gray-500">
                  Temel kavramlar ve etkiler.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Kriz nedir? Kriz türleri analizi</li>
              <li>Kurum kültüründe kriz algısı</li>
              <li>Kısa ve uzun vadeli çözümler</li>
              <li>Gerçek vaka analizleri</li>
            </ul>
          </article>

          {/* 2 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white text-base font-semibold">
                2
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Kriz Yönetim Sürecinin Aşamaları
                </h3>
                <p className="text-base text-gray-500">
                  Hazırlık, müdahale ve toparlanma.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Risk analizi ve hazırlık planı</li>
              <li>Müdahale adımları ve protokoller</li>
              <li>Değerlendirme ve öğrenme süreçleri</li>
              <li>Kriz döngüsü modeli uygulaması</li>
            </ul>
          </article>

          {/* 3 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white text-base font-semibold">
                3
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Kriz Yönetim Ekibinin Yapılanması
                </h3>
                <p className="text-base text-gray-500">
                  Rol dağılımı ve koordinasyon.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Ekip rolleri ve sorumlulukları</li>
              <li>Liderlik ve yetkilendirme</li>
              <li>Görev paylaşımı ve çözüm odaklı karar verme </li>
              <li>Simülasyon: İlk 30 dakika senaryosu</li>
            </ul>
          </article>

          {/* 4 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white text-base font-semibold">
                4
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Kriz İletişimi ve Medya Yönetimi
                </h3>
                <p className="text-base text-gray-500">
                  İç ve dış iletişim stratejileri.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Çalışan bilgilendirme ve güven</li>
              <li>Müşteri, basın ve kamuoyu yönetimi</li>
              <li>Basın açıklaması hazırlama</li>
              <li>Sosyal medya ve dijital kriz yönetimi</li>
            </ul>
          </article>

          {/* 5 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white text-base font-semibold">
                5
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Psikolojik Dayanıklılık Ve İyi Oluş Hali
                </h3>
                <p className="text-base text-gray-500">
                  Stres ve moral yönetimi.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Kriz anında stres ve çatışma yönetimi</li>
              <li>Ekip dayanışması moral ve motivasyon</li>
              <li>Kriz sonrası iyi oluş ve dayanıklılık</li>
            </ul>
          </article>

          {/* 6 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white text-base font-semibold">
                6
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Krizden Ders Çıkarmak
                </h3>
                <p className="text-base text-gray-500">
                  Süreç iyileştirme ve öğrenme.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Kriz sonrası analiz raporları</li>
              <li>Kurumsal hafıza ve öğrenme kültürü</li>
              <li>Kriz tatbikatları ve senaryo süreçleri</li>
              <li>Sürdürülebilir yönetim planı geliştirme ve uygulama</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Eğitim Yöntemleri */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 lg:p-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Eğitim Yöntemleri
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "📊", text: "Etkileşimli sunumlar" },
              { icon: "📝", text: "Vaka analizleri" },
              { icon: "👥", text: "Grup çalışmaları" },
              { icon: "🎭", text: "Kriz simülasyonları" },
              { icon: "🎪", text: "Rol oynama" },
              { icon: "💡", text: "Senaryo çalışmaları" },
            ].map((method, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-lg bg-white p-4 border border-gray-100"
              >
                <span className="text-2xl">{method.icon}</span>
                <span className="text-base text-gray-700 font-medium">
                  {method.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kazanımlar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 p-[1px]">
          <div className="rounded-2xl bg-white p-6 sm:p-10">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Eğitimden Kazanımlar
              </h2>
              <p className="mt-2 text-base text-gray-500">
                Program sonunda kurumların elde edeceği faydalar.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {[
                { icon: "✅", text: "Kurumlar krizlere hazırlıklı hale gelir" },
                {
                  icon: "✅",
                  text: "Çalışanlar panik yerine çözüm odaklı davranır",
                },
                { icon: "✅", text: "Prestij ve marka güveni korunur" },
                {
                  icon: "✅",
                  text: "Daha dirençli ve proaktif kurum kültürü oluşur",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-base text-gray-700 leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hedef Kitle */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Hedef Kitle
            </h2>
            <p className="mt-2 text-base text-gray-500">
              Bu eğitime kimler katılmalı?
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "💼 Üst düzey yöneticiler",
                  "👔 Orta kademe yöneticiler",
                  "📢 İletişim ekipleri",
                  "👥 İK ve Halkla İlişkiler",
                  "⚙️ Operasyonel yöneticiler",
                  "🚨 Kriz ekibi üyeleri",
                ].map((audience, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-base text-gray-700"
                  >
                    {audience}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 lg:p-10 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Eğitimi kurumunuza uyarlayalım
              </h3>
              <p className="mt-1 text-base text-gray-600">
                İhtiyaç analizi ve modül seçimleri için bizimle iletişime geçin.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/iletisim"
                className="inline-flex items-center rounded-full bg-cyan-600 px-5 py-2.5 text-base font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                İletişime Geç
              </a>
              <a
                href="#icerik"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-base font-medium text-cyan-700 ring-1 ring-inset ring-cyan-200 shadow-sm hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                İçeriği İncele
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
