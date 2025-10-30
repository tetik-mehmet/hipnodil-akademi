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

export default function ProtokolPage() {
  return (
    <main className="w-full">
      {/* Üst Kahraman Bölümü */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-100 blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Protokol Kuralları ve Kurumsal Karşılama Eğitimi
              </h1>
              <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-2xl">
                Kurumsal İmaj, Etkili Temsil ve Profesyonel Davranış
              </p>
              <p className="mt-4 text-gray-600 max-w-3xl">
                Kurumların dış dünyadaki en güçlü yansıması, çalışanlarının
                davranış biçimi, iletişim dili ve temsil gücüdür. Protokol
                kuralları yalnızca resmi davetlerde değil; her gün, her kurumsal
                etkileşimde fark yaratan bir unsurdur. Bu eğitimle,
                çalışanlarınızın kurumsal temsil yetkinliklerini güçlendiriyor;
                doğru karşılama ve ağırlama kültürünü kazandırıyoruz.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white text-sm sm:text-base font-medium shadow-sm hover:bg-indigo-700 transition"
                >
                  İletişime Geç
                </Link>
                <a
                  href="#icerik"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 text-indigo-700 ring-1 ring-inset ring-indigo-200 bg-white text-sm sm:text-base font-medium hover:bg-indigo-50 transition"
                >
                  İçeriği Gör
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-5 sm:p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {["Protokol", "Temsil", "İletişim", "Ağırlama"].map((tag) => (
                    <div
                      key={tag}
                      className="rounded-lg border border-gray-200 bg-white p-3 sm:p-4 text-center text-sm text-gray-700 font-medium"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  ✨ Profesyonel görünüm, doğru iletişim ve güçlü temsil tesadüf
                  değil; eğitimle kazanılan bir kültürdür.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Hedefler
            </h3>
            <BulletList
              items={[
                "Resmî, yarı resmî ve sosyal ortamlarda doğru iletişim, temsil, hitap ve davranış biçimlerini kazandırmak.",
                "Kurumsal imajı güçlendirirken çalışanların özgüvenini ve profesyonel duruşunu desteklemek.",
              ]}
            />
          </div>
          <div className="rounded-xl border border-gray-200 p-5 sm:p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Beklenen Kazanımlar
            </h3>
            <BulletList
              items={[
                "Güçlü kurumsal temsil ve etkili iletişim kültürü",
                "Doğru karşılama ve ağırlama prosedürlerinin içselleştirilmesi",
                "Profesyonel görünüm ve beden dili uyumu",
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
              "Kurumsal Temsil ve Protokol Kavramları",
              "Kurum İçi ve Kurum Dışı Davranış İlkeleri",
              "Hitap Biçimleri, Üstlerle ve Misafirlerle İletişim",
              "Toplantı, Tören, Davet ve Resmî Ziyaret Kuralları",
              "Misafir Karşılama ve Ağırlama Prosedürleri",
              "Kartvizit, Telefon, E-posta ve Sosyal Medya Adabı",
              "Giyim, Duruş ve Beden Dili Uyumları",
              "Kriz Anında İletişim ve Profesyonel Yaklaşım",
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
                "Yüz yüze veya online eğitim seçenekleri",
                "Uygulamalı senaryo çalışmaları ve örnek canlandırmalar",
                "Kuruma özel uyarlamalar (yönetici, resepsiyon, satış ekibi vb.)",
                "Eğitim sonunda katılım belgesi",
              ]}
            />
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Süre ve Grup
            </h3>
            <p className="text-gray-700">
              Süre, içerik derinliği ve uygulama oranı kurum ihtiyaçlarına göre
              özelleştirilir. Önerilen grup büyüklüğü: 12–20 kişi.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-indigo-50 text-indigo-700 px-3 py-2 text-sm">
              <span className="font-medium">Not:</span>
              <span>Kuruma özel vaka ve senaryolar dahil edilebilir.</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Neden Bu Eğitim? */}
      <Section id="neden" title="Neden Bu Eğitimi Almalısınız?">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Profesyonel Temsil",
              desc: "Kurumunuzu dışarıda profesyonel, saygılı ve güvenilir şekilde temsil edin.",
            },
            {
              title: "Etkili İletişim",
              desc: "Çalışanlarınıza özgüvenli, etkili iletişim becerileri kazandırın.",
            },
            {
              title: "Güçlü İtibar",
              desc: "Kurumsal itibarınızı güçlendirin ve iş ilişkilerinde fark yaratın.",
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
          ✨ Profesyonel görünüm, doğru iletişim ve güçlü temsil bir tesadüf
          değil, eğitimle kazanılan bir kültürdür.
        </p>
        <div className="mt-6">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white text-sm sm:text-base font-medium shadow-sm hover:bg-indigo-700 transition"
          >
            Teklif Al / Planla
          </Link>
        </div>
      </Section>
    </main>
  );
}
