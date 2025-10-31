import Link from "next/link";

function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-6">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-base sm:text-lg">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items, columns = 1 }) {
  return (
    <ul
      className={
        `grid gap-3 sm:gap-4 list-disc pl-5 marker:text-gray-400 ` +
        (columns === 2 ? "sm:grid-cols-2" : "grid-cols-1")
      }
    >
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function OfkeStresKaygiPage() {
  return (
    <main className="w-full">
      {/* Kahraman Bölümü */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-rose-100 blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-100 blur-3xl opacity-60" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Öfke, Stres ve Kaygı Yönetimi Eğitimi
              </h1>
              <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-2xl">
                Duygusal Dayanıklılık, Etkili İletişim ve Kurumsal Verimlilik
              </p>
              <p className="mt-4 text-gray-600 max-w-3xl">
                Modern iş hayatında stres, yoğun tempo ve baskı kaçınılmazdır.
                Ancak önemli olan bu duyguları kontrol altına alabilmek,
                enerjiyi doğru yönetmek ve duygusal dengeyi koruyabilmektir.
              </p>
              <p className="mt-3 text-gray-600 max-w-3xl">
                Öfke, Stres ve Kaygı Yönetimi Eğitimi, çalışanların zorlu
                durumlar karşısında soğukkanlı, çözüm odaklı ve profesyonel
                kalabilmelerini sağlar. Bu sayede kurum içi iletişim güçlenir,
                motivasyon artar ve genel iş performansı yükselir.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-white text-sm sm:text-base font-medium shadow-sm hover:bg-rose-700 transition"
                >
                  İletişime Geç
                </Link>
                <a
                  href="#icerik"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-rose-700 ring-1 ring-inset ring-rose-200 bg-white text-sm sm:text-base font-medium hover:bg-rose-50 transition"
                >
                  İçeriği Gör
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-5 sm:p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {["Stres", "Kaygı", "Öfke", "Denge"].map((tag) => (
                    <div
                      key={tag}
                      className="rounded-lg border border-gray-200 bg-white p-3 sm:p-4 text-center text-sm text-gray-700 font-medium"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  ✨ Duygusal denge, sağlıklı iletişim ve verimlilik eğitimle
                  güçlenir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitimin Amacı */}
      <Section id="amac" title="Eğitimin Amacı">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-5 sm:p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hedef</h3>
            <p className="text-gray-700">
              Katılımcıların stres, öfke ve kaygı gibi duyguları tanımalarını,
              nedenlerini fark etmelerini ve bu duygularla sağlıklı baş etme
              yöntemleri geliştirmelerini sağlamak. Amaç, hem bireysel refahı
              artırmak hem de kurumsal ortamda pozitif bir iletişim kültürü
              oluşturmaktır.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5 sm:p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Beklenen Çıktılar
            </h3>
            <BulletList
              items={[
                "Duygusal farkındalık ve öz düzenleme becerisi",
                "Çatışmalı durumlarında çözüm odaklı yaklaşım",
                "Kurumsal iletişimde empati ve anlayış kültürü",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Eğitim İçeriği */}
      <Section id="icerik" title="Eğitim İçeriği">
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <BulletList
            columns={2}
            items={[
              "Stresin Kaynakları ve Etkileri",
              "Kaygı Düzeyini Tanıma ve Yönetme Teknikleri",
              "Öfke Döngüsü ve Kontrol Yöntemleri",
              "Zihinsel Dayanıklılığı Güçlendirme",
              "Duygusal Farkındalık ve Öz Farkındalık Çalışmaları",
              "Nefes, Gevşeme ve Odaklanma Egzersizleri",
              "Çatışma Durumlarında Sakin Kalma Stratejileri",
              "Kurum İçi Stres Yönetim Kültürü Oluşturma",
            ]}
          />
        </div>
      </Section>

      {/* Eğitim Formatı */}
      <Section id="format" title="Eğitim Formatı">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <BulletList
              items={[
                "Yüz yüze veya online eğitim",
                "Uygulamalı egzersizler, grup çalışmaları ve vaka örnekleri",
                "Psikoloji ve iletişim temelli içerikler",
                "Katılım belgesi ve bireysel farkındalık testleri",
              ]}
            />
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Süre ve Grup
            </h3>
            <p className="text-gray-700">
              Süre, uygulama oranı ve içerik derinliği kurum ihtiyaçlarına göre
              özelleştirilir. Önerilen grup büyüklüğü: 12–20 kişi.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-rose-50 text-rose-700 px-3 py-2 text-sm">
              <span className="font-medium">Not:</span>
              <span>Kuruma özel vaka ve egzersizler dahil edilebilir.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Kazanımlar */}
      <Section id="kazanımlar" title="Kazanımlar">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Kontrolü Elinde Tutan Çalışan",
              desc: "Stres ve öfke karşısında denge ve profesyonellik.",
            },
            {
              title: "Uyumlu ve Üretken Ekipler",
              desc: "Motivasyonu yüksek, çözüm odaklı ekip yapısı.",
            },
            {
              title: "Empati ve Anlayış Kültürü",
              desc: "Kurum içi iletişimde güven ve iş birliği.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-700">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700">
          Zihinsel dayanıklılığı yüksek, duygusal olarak güçlü bir kurum yapısı.
        </p>
        <div className="mt-6">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-white text-sm sm:text-base font-medium shadow-sm hover:bg-rose-700 transition"
          >
            Teklif Al / Planla
          </Link>
        </div>
      </Section>

      {/* Kapanış Mesajı ve CTA */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-rose-50 p-6 sm:p-8">
          <p className="text-gray-800 text-base sm:text-lg">
            💡 Mutlu çalışan, güçlü kurum demektir. Siz de çalışanlarınıza stres
            ve öfke yönetimi becerileri kazandırarak daha huzurlu, verimli ve
            dayanıklı bir çalışma ortamı oluşturabilirsiniz.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-white text-sm sm:text-base font-medium shadow-sm hover:bg-rose-700 transition"
            >
              Kurumsal Eğitim Teklifi Al
            </Link>
            <a
              href="#amac"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-rose-700 ring-1 ring-inset ring-rose-200 bg-white text-sm sm:text-base font-medium hover:bg-rose-50 transition"
            >
              Eğitimin Amacı
            </a>
          </div>
          <p className="mt-4 text-gray-600">
            Profesyonel eğitmen kadromuzla, kurumunuza özel içerikler
            hazırlayalım.
          </p>
        </div>
      </section>
    </main>
  );
}
