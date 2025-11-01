import Link from "next/link";
import Image from "next/image";

export default function IsSagligiPage() {
  return (
    <main className="w-full bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Sol Taraf - İçerik */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
                İş Sağlığı ve Güvenliği Eğitimi
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-emerald-700 font-medium">
                Çalışan Güvenliği, Kurumsal Sürdürülebilirlik
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700">
                Her işin temelinde insan vardır. Çalışan sağlığı ve güvenliği,
                sadece yasal bir zorunluluk değil, aynı zamanda kurumların
                sürdürülebilir başarıya ulaşmasının en önemli adımıdır. Biz, İş
                Sağlığı ve Güvenliği Eğitimlerimiz ile kurumların güvenli
                çalışma kültürünü geliştirmesine, çalışanların farkındalığını
                artırmasına ve iş kazalarının önüne geçmesine yardımcı oluyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white text-sm sm:text-base font-semibold shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  Teklif Alın
                </Link>
                <a
                  href="#icerik"
                  className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-white px-5 py-3 text-emerald-700 text-sm sm:text-base font-semibold shadow-sm hover:bg-emerald-50"
                >
                  Eğitim İçeriği
                </a>
              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-emerald-100">
              <Image
                src="/guvenlik.png"
                alt="İş Sağlığı ve Güvenliği Eğitimi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Neden Bu Eğitimi Almalısınız */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-2xl border border-emerald-100 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Neden Bu Eğitimi Almalısınız?
          </h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
            <li className="flex gap-3">
              <span className="text-emerald-600 text-lg">✓</span>
              <div>
                <strong>Yasal Uyum:</strong> 6331 Sayılı İş Sağlığı ve Güvenliği
                Kanunu gereği zorunlu eğitim yükümlülüklerini yerine getirin.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 text-lg">✓</span>
              <div>
                <strong>Riskleri Azaltın:</strong> İş kazaları ve meslek
                hastalıklarının önüne geçin.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 text-lg">✓</span>
              <div>
                <strong>Verimliliği Artırın:</strong> Güvenli çalışma ortamı,
                çalışan motivasyonunu ve performansını yükseltir.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 text-lg">✓</span>
              <div>
                <strong>Kurumsal İmajınızı Güçlendirin:</strong> Güvenliğe önem
                veren şirket kültürü, paydaşlarınızın gözünde güçlü bir itibar
                yaratır.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Eğitim İçeriği */}
      <section
        id="icerik"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Eğitim İçeriği
          </h2>
          <p className="mt-3 text-gray-700">
            Eğitimler, kurumun faaliyet alanına ve risk düzeyine göre özel
            olarak planlanır:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Genel İş Sağlığı ve Güvenliği Bilgilendirmesi",
                "Acil Durum ve Yangın Güvenliği",
                "Kişisel Koruyucu Donanımların Kullanımı",
                "Ergonomi ve Ofis Güvenliği",
                "Elektrik, Kimyasal, Mekanik Riskler",
                "Psikososyal Riskler ve Stres Yönetimi",
                "İlk Yardım Bilgilendirmesi",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" />
                  <span className="text-gray-800 text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-emerald-50 p-6 sm:p-8 shadow-sm sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Eğitim Formatı
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-emerald-600 text-lg">✓</span> Yüz yüze
                  veya online eğitim seçenekleri
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 text-lg">✓</span> Uygulamalı
                  örnekler ve vaka analizleri
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 text-lg">✓</span> Katılım
                  belgesi ile çalışanların kayıt altına alınması
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 text-lg">✓</span> Kuruma
                  özel raporlama ve değerlendirme
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Neden Biz?
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
            Deneyimli eğitmen kadromuz, sektör deneyimi ve güncel mevzuat
            bilgisiyle kurumunuzun ihtiyaçlarına özel çözümler sunar. Sadece
            eğitim vermekle kalmıyor; kurumunuza kalıcı güvenlik kültürü
            kazandırıyoruz.
          </p>

          <div className="mt-8 rounded-xl border border-emerald-100 bg-white p-6 sm:p-8 shadow-sm">
            <div className="text-sm sm:text-base text-gray-800 space-y-3">
              <p className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <span>
                  Siz de çalışanlarınızın güvenliğini ve kurumunuzun
                  sürdürülebilir başarısını garanti altına alın.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <span>
                  Hemen bizimle iletişime geçin ve kurumunuza özel İSG eğitim
                  teklifinizi alın.
                </span>
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/iletisim"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white text-sm sm:text-base font-semibold shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
