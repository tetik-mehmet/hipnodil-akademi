import Link from "next/link";
import Image from "next/image";

export default function IsSagligiPage() {
  return (
    <main className="w-full bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
                İş Sağlığı ve Güvenliği Eğitimi
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-emerald-700 font-medium">
                Çalışan Güvenliği, Kurumsal Sürdürülebilirlik
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700 max-w-2xl">
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
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-emerald-100 bg-white p-6 sm:p-8 shadow-sm">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-100 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-cyan-100 blur-2xl" />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Neden Bu Eğitimi Almalısınız?
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray-700 text-sm sm:text-base">
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span> Yasal Uyum:
                      6331 Sayılı İş Sağlığı ve Güvenliği Kanunu gereği zorunlu
                      eğitim yükümlülüklerini yerine getirin.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span> Riskleri
                      Azaltın: İş kazaları ve meslek hastalıklarının önüne
                      geçin.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span> Verimliliği
                      Artırın: Güvenli çalışma ortamı, çalışan motivasyonunu ve
                      performansını yükseltir.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span> Kurumsal
                      İmajınızı Güçlendirin: Güvenliğe önem veren şirket
                      kültürü, paydaşlarınızın gözünde güçlü bir itibar yaratır.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim İçeriği */}
      <section
        id="icerik"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Eğitim İçeriği
            </h2>
            <p className="mt-3 text-gray-700">
              Eğitimler, kurumun faaliyet alanına ve risk düzeyine göre özel
              olarak planlanır:
            </p>
            <figure className="mt-8 mx-auto w-full max-w-2xl rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
                  Güvenlik Kültürü
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-5 items-center">
                <div className="sm:col-span-2">
                  <div className="relative mx-auto w-full max-w-[220px]">
                    <Image
                      src="/guvenlik.png"
                      alt="İş güvenliği"
                      width={440}
                      height={300}
                      className="w-full h-auto rounded-lg ring-1 ring-gray-100 object-cover"
                      sizes="(max-width: 640px) 70vw, 220px"
                    />
                  </div>
                </div>
                <figcaption className="sm:col-span-3 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                  Kurumlarda kalıcı güvenlik alışkanlıklarının yerleşmesi;
                  farkındalık, eğitim ve düzenli uygulamalarla mümkündür.
                  Görsel, eğitim içeriğinin destekleyici bir unsuru olarak sade
                  biçimde konumlandırılmıştır.
                </figcaption>
              </div>
            </figure>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  className="flex items-start gap-3 rounded-md border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-gray-800 text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-emerald-50 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Eğitim Formatı
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-emerald-600">•</span> Yüz yüze veya
                  online eğitim seçenekleri
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">•</span> Uygulamalı
                  örnekler ve vaka analizleri
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">•</span> Katılım belgesi
                  ile çalışanların kayıt altına alınması
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">•</span> Kuruma özel
                  raporlama ve değerlendirme
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Neden Biz?
            </h2>
            <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              Deneyimli eğitmen kadromuz, sektör deneyimi ve güncel mevzuat
              bilgisiyle kurumunuzun ihtiyaçlarına özel çözümler sunar. Sadece
              eğitim vermekle kalmıyor; kurumunuza kalıcı güvenlik kültürü
              kazandırıyoruz.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-emerald-100 bg-white p-6 sm:p-8 shadow-sm">
              <div className="text-sm sm:text-base text-gray-800">
                <p>
                  💼 Siz de çalışanlarınızın güvenliğini ve kurumunuzun
                  sürdürülebilir başarısını garanti altına alın.
                </p>
                <p className="mt-2">
                  📞 Hemen bizimle iletişime geçin ve kurumunuza özel İSG eğitim
                  teklifinizi alın.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/iletisim"
                  className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white text-sm sm:text-base font-semibold shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
