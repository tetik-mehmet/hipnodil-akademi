export const metadata = {
  title: "Kriz Yönetimi Eğitimi | Hipnodil Akademi",
  description:
    "Kriz yönetimi eğitimi ile kurumlarda hazırlık, müdahale, toparlanma ve öğrenme süreçlerini modüler ve uygulamalı olarak geliştirin.",
};

function Section({ id, title, subtitle, children }) {
  return (
    <section
      id={id}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      <div className="mb-6 sm:mb-8">
        {title ? (
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
            {title}
          </h2>
        ) : null}
        {subtitle ? (
          <p className="text-gray-600 text-base sm:text-lg">{subtitle}</p>
        ) : null}
      </div>
      <div className="bg-white/70 backdrop-blur border border-gray-200 rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm">
        {children}
      </div>
    </section>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
      <span className="text-gray-700 leading-relaxed">{children}</span>
    </li>
  );
}

export default function Page() {
  const hedefler = [
    "Kriz türlerini ve etkilerini tanımlayabilecek",
    "Kriz öncesi hazırlık planlarını oluşturabilecek",
    "Kriz anında doğru iletişim ve koordinasyon tekniklerini uygulayabilecek",
    "Kriz sonrası iyileştirme süreçlerini yönlendirebilecek",
    "Kurum itibarını ve çalışan güvenini koruyabileceklerdir",
  ];

  const iletisimBasliklari = [
    "Kriz döneminde doğru iletişimin önemi",
    "İç iletişim (çalışan bilgilendirme, güven sağlama)",
    "Dış iletişim (müşteri, basın, kamuoyu, paydaşlar)",
    "Basın açıklaması hazırlama ve kriz sözcülüğü",
    "Sosyal medya yönetimi ve dijital krizler",
  ];

  const psikolojiBasliklari = [
    "Kriz anında stres yönetimi",
    "Ekip içi dayanışma ve moral yönetimi",
    "Kriz sonrası toparlanma psikolojisi",
    "Liderlerin duygusal dayanıklılık becerileri",
  ];

  const yontemler = [
    "Etkileşimli sunumlar",
    "Vaka analizleri",
    "Grup çalışmaları",
    "Kriz simülasyonları",
    "Rol oynama ve senaryo çalışmaları",
  ];

  const kazanımlar = [
    "Kurumlar krizlere hazırlıklı hale gelir",
    "Çalışanlar panik yerine çözüm odaklı davranır",
    "İtibar ve marka güveni korunur",
    "Daha dirençli ve proaktif kurum kültürü oluşur",
  ];

  const hedefKitle = [
    "Üst düzey yöneticiler",
    "Orta kademe yöneticiler",
    "İletişim, insan kaynakları ve halkla ilişkiler ekipleri",
    "Operasyonel yöneticiler ve kriz ekibi üyeleri",
  ];

  return (
    <main className="relative pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                Kriz Yönetimi Eğitimi
              </h1>
              <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                Kurumsal yapıların olası kriz durumlarında hızlı, doğru ve
                etkili kararlar alabilmesini sağlamak; itibar kaybı, operasyonel
                aksaklık ve çalışan paniklerini en aza indirgeyerek
                sürdürülebilir bir yönetim kültürü oluşturmaktır.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#hedefler"
                  className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2.5 text-white text-sm font-medium shadow hover:bg-emerald-700 transition"
                >
                  Eğitim Hedefleri
                </a>
                <a
                  href="#icerik"
                  className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-emerald-700 ring-1 ring-inset ring-emerald-200 text-sm font-medium hover:bg-emerald-50 transition"
                >
                  İçerik Akışı
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-emerald-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg bg-emerald-50 p-4">
                    <div className="text-emerald-700 font-semibold">Süre</div>
                    <div className="text-gray-700 mt-1">
                      1 tam gün (6-8 saat)
                    </div>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-4">
                    <div className="text-emerald-700 font-semibold">
                      Alternatif
                    </div>
                    <div className="text-gray-700 mt-1">
                      2× yarım gün (4’er saat)
                    </div>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-4 col-span-2">
                    <div className="text-emerald-700 font-semibold">
                      Uygulama
                    </div>
                    <div className="text-gray-700 mt-1">
                      Vaka, simülasyon ve rol oynama çalışmaları
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hedefler */}
      <Section id="hedefler" title="Eğitim Hedefleri">
        <ul className="space-y-3">
          {hedefler.map((m) => (
            <Bullet key={m}>{m}</Bullet>
          ))}
        </ul>
      </Section>

      {/* Eğitim Süresi */}
      <Section id="sure" title="Eğitimin Süresi">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="font-semibold text-gray-900">1 Tam Gün</div>
            <div className="text-gray-700">6-8 saat</div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="font-semibold text-gray-900">2 Yarım Gün</div>
            <div className="text-gray-700">4’er saat</div>
          </div>
        </div>
      </Section>

      {/* İçerik Akışı */}
      <Section id="icerik" title="Eğitim Başlıkları ve İçerik Akışı">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Kriz Kavramı ve Kurumsal Etkileri
            </h3>
            <ul className="space-y-2">
              <Bullet>
                Kriz nedir? Kriz türleri (operasyonel, finansal, itibar, siber,
                doğal afet vb.)
              </Bullet>
              <Bullet>Kurum kültüründe kriz algısı</Bullet>
              <Bullet>
                Krizin işletme üzerindeki kısa ve uzun vadeli etkileri
              </Bullet>
              <Bullet>
                Gerçek vaka analizleri (yerli ve yabancı örnekler)
              </Bullet>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Kriz Yönetim Sürecinin Aşamaları
            </h3>
            <ul className="space-y-2">
              <Bullet>Kriz öncesi hazırlık ve risk analizi</Bullet>
              <Bullet>Kriz anında müdahale adımları</Bullet>
              <Bullet>Kriz sonrası değerlendirme ve öğrenme süreçleri</Bullet>
              <Bullet>
                Kriz döngüsü modeli (hazırlık → müdahale → toparlanma → öğrenme)
              </Bullet>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Kriz Yönetim Ekibinin Yapılanması
            </h3>
            <ul className="space-y-2">
              <Bullet>Kriz yönetim ekibinin rol ve sorumlulukları</Bullet>
              <Bullet>Liderlik, koordinasyon ve yetkilendirme</Bullet>
              <Bullet>
                Kriz anında görev paylaşımı ve hızlı karar alma süreçleri
              </Bullet>
              <Bullet>
                Simülasyon: &quot;Kriz anında ilk 30 dakika&quot; senaryosu
              </Bullet>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Kriz İletişimi ve Medya Yönetimi
            </h3>
            <ul className="space-y-2">
              {iletisimBasliklari.map((m) => (
                <Bullet key={m}>{m}</Bullet>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5. Psikolojik Dayanıklılık ve Ekip Motivasyonu
            </h3>
            <ul className="space-y-2">
              {psikolojiBasliklari.map((m) => (
                <Bullet key={m}>{m}</Bullet>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6. Krizden Ders Çıkarmak ve Süreç İyileştirme
            </h3>
            <ul className="space-y-2">
              <Bullet>Kriz sonrası analiz raporları oluşturma</Bullet>
              <Bullet>Kurumsal hafıza ve öğrenme kültürü</Bullet>
              <Bullet>Kriz tatbikatları ve senaryo çalışmaları</Bullet>
              <Bullet>Sürdürülebilir kriz yönetim planı geliştirme</Bullet>
            </ul>
          </div>
        </div>
      </Section>

      {/* Yöntemler */}
      <Section id="yontem" title="Eğitim Yöntemleri">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {yontemler.map((y) => (
            <li
              key={y}
              className="rounded-lg border border-gray-200 px-4 py-3 text-gray-800"
            >
              {y}
            </li>
          ))}
        </ul>
      </Section>

      {/* Kazanımlar */}
      <Section id="kazanımlar" title="Eğitimden Kazanımlar">
        <ul className="space-y-3">
          {kazanımlar.map((k) => (
            <li key={k} className="flex items-start gap-3 text-gray-800">
              <span className="mt-0.5">✅</span>
              <span>{k}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Hedef Kitle */}
      <Section id="hedef-kitle" title="Hedef Kitle">
        <ul className="grid sm:grid-cols-2 gap-3">
          {hedefKitle.map((h) => (
            <li
              key={h}
              className="rounded-lg border border-gray-200 px-4 py-3 text-gray-800"
            >
              {h}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
