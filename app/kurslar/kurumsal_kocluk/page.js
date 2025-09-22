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
      {title && (
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
      )}
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function KurumsalKoclukPage() {
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
                Kurumsal Koçluk Programı
              </h1>
              <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl">
                Vizyon, misyon ve hedeflerinize ulaşmanız için planlı ve
                ölçülebilir gelişim odaklı modern kurumsal koçluk yaklaşımı.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#amac"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
                >
                  Kursun Amacı
                </a>
                <a
                  href="#faydalar"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-800 font-medium hover:bg-gray-50 transition"
                >
                  Faydalar
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
                    src="/bulent.png"
                    alt="Bülent"
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

      {/* Kursun Amacı (ekrandaki metne göre) */}
      <Section
        id="amac"
        title="Kursun Amacı"
        subtitle="İstenen performansa ulaşmak için koç ve danışan arasında kurulan planlı bir gelişim ilişkisidir. Koçluk; performansı artırmada ve her türlü öğrenmenin kazanılmasında hızlı ve bütünsel bir yöntemdir."
      >
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 sm:p-8">
            <div className="space-y-4 text-gray-700">
              <p>
                Koçluk uygulayan kurumlar; çalışanların vizyonları ile
                organizasyonun vizyonu arasındaki uyumu güçlendirir, bireysel
                performansı artırarak kurumsal hedeflere kolaylıkla ulaşır.
              </p>
              <p>
                Kurumsal Koçluk, kurumsal farkındalık kazandırır. Vizyon, misyon
                ve hedefler belirlenir; stratejik planlama yapılır ve yol
                haritası oluşturulur.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InfoCard
              title="Kurumsal Koçluk Uygulaması ile Firmalarda"
              accent="blue"
            >
              <ul className="space-y-3">
                <BulletItem>Liderlik</BulletItem>
                <BulletItem>Vizyon geliştirme</BulletItem>
                <BulletItem>Motivasyonu geliştirme</BulletItem>
                <BulletItem>Kariyer beklentilerine ulaşma</BulletItem>
                <BulletItem>Kurumsal uyum ve takım çalışması</BulletItem>
                <BulletItem>Performans değerlendirme</BulletItem>
                <BulletItem>Hedef koyma ve değerlendirme becerileri</BulletItem>
              </ul>
            </InfoCard>

            <InfoCard accent="amber">
              <p>
                Bu çalışmaların sonucu olarak kurum içinde artan üretkenlik,
                müşteri ve çalışan memnuniyeti gözlenir; azalan çatışmalarla
                birlikte yetenekli liderler ortaya çıkar.
              </p>
            </InfoCard>
          </div>
        </div>
      </Section>

      {/* Faydalar */}
      <Section
        id="faydalar"
        title="Kurumsal Koçluğun Faydaları"
        subtitle="Modüler, ölçülebilir ve sürdürülebilir gelişim."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard title="Stratejik Uyum" accent="indigo">
            Organizasyonel vizyon ile ekiplerin bireysel hedeflerini hizalar,
            yol haritalarını netleştirir.
          </InfoCard>
          <InfoCard title="Performans Artışı" accent="emerald">
            Yetkinlik gelişimi, düzenli geri bildirim ve ölçme-değerlendirme ile
            performansı yükseltir.
          </InfoCard>
          <InfoCard title="Motivasyon ve Bağlılık" accent="blue">
            Güçlü iletişim, takdir kültürü ve sorumluluk sahipliğiyle çalışan
            bağlılığını artırır.
          </InfoCard>
        </div>
      </Section>

      {/* Kursun İçeriği */}
      <Section
        id="icerik"
        title="Kursun İçeriği"
        subtitle="Şirketler Kurumsal Koçluk Eğitimini neden almalı? Eğitim, liderlerin ekiplerindeki farkındalığı artırarak hızlı büyümeyi ve sürdürülebilir verimliliği destekler."
      >
        <div className="max-w-5xl mx-auto space-y-6">
          <InfoCard
            title="Koçluğun Kurum Üzerindeki Olumlu Etkileri"
            accent="indigo"
          >
            <ul className="space-y-3">
              <BulletItem>
                Sponsor olan kişiler ve ekiplerle olan ilişkilerde iyileşme
              </BulletItem>
              <BulletItem>
                İş motivasyonu ve takım uyumunda niteliksel artış
              </BulletItem>
              <BulletItem>
                Yöneticiler ve görev alanlarının uyumlu gelişmesi
              </BulletItem>
              <BulletItem>
                Diğer ekip çalışanlarıyla ilişkilerde iyileşme
              </BulletItem>
              <BulletItem>Ekibin, üstleriyle ilişkilerinde iyileşme</BulletItem>
              <BulletItem>Ekip çalışması verimliliğinde artış</BulletItem>
              <BulletItem>İşten duyulan mutlulukta artış</BulletItem>
              <BulletItem>Kurum içi çatışmalarda azalma</BulletItem>
              <BulletItem>Müşterilerle ilişkilerde iyileşme</BulletItem>
            </ul>
          </InfoCard>

          <InfoCard title="Eğitimin Katkıları" accent="emerald">
            <ul className="space-y-3">
              <BulletItem>
                Ekip içindeki bireylerin performans ve verimliliğini artırmak
                için liderliği geliştirme
              </BulletItem>
              <BulletItem>
                Ekip başarısını planlamaya yönelik bireysel yetenek gelişimini
                destekleme
              </BulletItem>
              <BulletItem>
                Organizasyonun genel performansını artırmaya yönelik çalışma
                kültürü
              </BulletItem>
              <BulletItem>
                Belirli problemleri çözmeye yönelik yetenek ve performansı
                artırma
              </BulletItem>
              <BulletItem>
                Müşteriyi ikna etme ve elde tutma oranını artırma
              </BulletItem>
              <BulletItem>
                Kurumsal iletişimde güveni yükselten hipnotik dil kalıplarını
                etik kullanım
              </BulletItem>
              <BulletItem>
                Geniş kitlelere ulaşmada koçluk yöntem ve tekniklerinden
                faydalanma
              </BulletItem>
              <BulletItem>
                Koçluk yöntem ve teknikleriyle gerçek potansiyeli açığa çıkarma
              </BulletItem>
            </ul>
          </InfoCard>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Kurumsal Koçluk ile Dönüşüm Başlatın
          </h3>
          <p className="text-blue-100 max-w-3xl mx-auto mb-6">
            Ekibiniz için en uygun modülleri birlikte planlayalım. İletişime
            geçin, kısa bir ihtiyaç analizi yapalım.
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
