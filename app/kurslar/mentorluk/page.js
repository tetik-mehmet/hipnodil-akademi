"use client";

import Image from "next/image";

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-10 sm:mb-14">
            {title && (
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
            )}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-5" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function BulletItem({ children }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span className="text-gray-700 leading-relaxed">{children}</span>
    </li>
  );
}

function InfoCard({ title, children, accent = "blue" }) {
  const map = {
    blue: "from-blue-50 to-indigo-50 border-blue-200",
    indigo: "from-indigo-50 to-violet-50 border-indigo-200",
    emerald: "from-emerald-50 to-teal-50 border-emerald-200",
    amber: "from-amber-50 to-orange-50 border-amber-200",
  };
  return (
    <div className={`bg-gradient-to-br ${map[accent]} rounded-2xl p-6 border`}>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function MentorlukPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                MYK Koç Seviye 6 Mentörlük Programı
              </h1>
              <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl">
                Profesyonel Koçluk (Seviye 6) sınavına hazırlanmanız için
                online/canlı ve modüler yapıda tasarlanmış, modern ve kullanıcı
                dostu program.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#icerik"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
                >
                  İçeriğe Göz At
                </a>
                <a
                  href="#isleyis"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-800 font-medium hover:bg-gray-50 transition"
                >
                  Program İşleyişi
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-2xl opacity-30" />
                <Image
                  src="/hipnodilakademilogo.png"
                  alt="Hipnodil Akademi"
                  width={420}
                  height={420}
                  className="relative z-10 rounded-2xl shadow-2xl bg-white/60 p-6"
                />
                <div className="relative z-10 mt-6 flex justify-center">
                  <Image
                    src="/merve.png"
                    alt="Eğitmen Merve"
                    width={260}
                    height={260}
                    className="rounded-full shadow-xl ring-1 ring-black/5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kursun Amacı */}
      <Section
        id="amac"
        title="Kursun Amacı"
        subtitle="Koçluk mesleğinin nitelik, bilgi, beceri ve yetkinliklerini geliştirerek, katılımcıların MYK belgelendirme süreçlerine hazır hale gelmesini sağlamak."
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 sm:p-8">
            <ul className="space-y-4">
              <BulletItem>
                Koçların sahip olması gereken nitelik ve yetkinliklerin
                artırılması; deneyim ve pratik becerilerin güçlendirilmesi.
              </BulletItem>
              <BulletItem>
                Sahip olunan bilgi ve becerilerin &ldquo;Mesleki Yeterlilik
                Belgesi&rdquo; ile belgelendirilmesine yönelik hazırlıkların
                kazandırılması.
              </BulletItem>
              <BulletItem>
                Teori ve performans sınavlarında başarı için gerekli yöntem ve
                uygulamaların aktarılması.
              </BulletItem>
            </ul>
          </div>
        </div>
      </Section>

      {/* Kursun İçeriği */}
      <Section id="icerik" title="Kursun İçeriği">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <InfoCard
              title="Profesyonel Koçluk (Seviye 6) – Online / Canlı Sınıf | Sertifika Programı"
              accent="blue"
            >
              <ul className="space-y-3">
                <BulletItem>
                  Koçluk eğitimi almış katılımcılar, Hipnodil Akademi’nin{" "}
                  <strong>Koç (Seviye 6) MYK Sınavına Hazırlık Eğitimi</strong>
                  ’ne katılabilir.
                </BulletItem>
                <BulletItem>
                  Koçluk alanında ilerlemek isteyen profesyoneller; teori ve
                  performans sınavlarında başarı için gerekli bilgi ve
                  uygulamaları bu eğitimde bulur.
                </BulletItem>
                <BulletItem>
                  <strong>Koç (Seviye 6) MYK</strong> sınavına katılmak için en
                  az <strong>60 saatlik Temel Koçluk Eğitimi</strong>{" "}
                  gerekmektedir. Henüz almayanlar için 60 saatlik
                  &ldquo;Profesyonel Sertifikasyon Temel Koçluk&rdquo;
                  eğitimimiz önerilir.
                </BulletItem>
              </ul>
            </InfoCard>

            <InfoCard
              title="Ulusal Meslek Standartları ve MYK Sistemi"
              accent="amber"
            >
              <p>
                T.C. Çalışma ve Sosyal Güvenlik Bakanlığı’na bağlı{" "}
                <strong>Mesleki Yeterlilik Kurumu (MYK)</strong>, ulusal meslek
                standartlarının oluşturulması ve eğitim-öğretim programlarının
                bu standartlara göre hazırlanmasını sağlayan güvenilir bir
                sistemdir.
              </p>
            </InfoCard>

            <InfoCard
              title="Sertifikasyon ve Ölçme-Değerlendirme"
              accent="indigo"
            >
              <p>
                Program; profesyonel koçluk alanında ulusal meslek
                standartlarının karşılanıp karşılanmadığının tespiti için MYK
                tarafından yapılan sertifikasyon sınavına hazırlanmanıza destek
                olur.
              </p>
            </InfoCard>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-b from-blue-600 to-indigo-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Program Özeti</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1">🎥</span>
                  <span>50+ saat video içerik</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">🧑‍🏫</span>
                  <span>Canlı çevrimiçi sınıflar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">🧪</span>
                  <span>Demo ve pratik uygulamalar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">📄</span>
                  <span>Eğitim dökümanları ve ödevler</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
              <p className="text-gray-700">
                Tüm modüller responsive ve modülerdir; her bölüm bağımsız olarak
                güncellenebilir.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Programın İşleyişi */}
      <Section id="isleyis" title="Programın İşleyişi">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard title="Takvim ve Erişim" accent="emerald">
            <ul className="space-y-3">
              <BulletItem>
                Haftanın belirli günlerinde canlı (Zoom) sınıflar.
              </BulletItem>
              <BulletItem>
                7/24 erişilebilir kayıtlı video içerikleri.
              </BulletItem>
              <BulletItem>WhatsApp grupları ile düzenli duyurular.</BulletItem>
            </ul>
          </InfoCard>
          <InfoCard title="Katılımcı Akışı" accent="blue">
            <ul className="space-y-3">
              <BulletItem>
                Katılımcı, sahip olduğu birikime uygun alternatif programı seçer
                ve sürece dahil olur.
              </BulletItem>
              <BulletItem>
                Eğitimi tamamlayanlar;{" "}
                <strong>Koç (Seviye 6) Mesleki Yeterlilik Belgesi</strong> için
                teori ve performansa dayalı ölçme-değerlendirme süreçlerine
                katılır.
              </BulletItem>
            </ul>
          </InfoCard>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Mentörlük ile Sınav Başarınıza Hız Katın
          </h3>
          <p className="text-blue-100 max-w-3xl mx-auto mb-6">
            Profesyonel koçluk yolculuğunuzda yanınızdayız. Hemen iletişime
            geçin, size uygun modülü birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg bg-white text-blue-900 px-6 py-3 font-semibold hover:bg-blue-50 transition"
            >
              İletişime Geç
            </a>
            <a
              href="/paketler"
              className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Paketleri İncele
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
