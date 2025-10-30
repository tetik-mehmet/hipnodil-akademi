export default function KurumsalPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-sky-50 via-white to-indigo-50">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-100 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Kurumsal İletişim ve Etkileşim Becerileri Eğitimi
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Kurum içi iletişimin kalitesini artırarak güvene dayalı iş
              birliğini güçlendirmeyi ve ekipler arasında açık, saygılı, hedef
              odaklı bir iletişim kültürü oluşturmayı amaçlayan kapsamlı
              program.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#icerik"
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Eğitim İçeriği
              </a>
              <a
                href="#kazanımlar"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-base font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Kazanımlar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amaç */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Eğitimin Amacı
            </h2>
            <p className="mt-2 text-base text-gray-500">
              Programın genel çerçevesi ve hedeflenen kültürel dönüşüm.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed">
                Bu eğitim, kurum içi iletişimin kalitesini artırarak güvene
                dayalı iş birliğini güçlendirmeyi, ekipler arasında açık,
                saygılı ve hedef odaklı bir iletişim kültürü oluşturmayı
                amaçlamaktadır. Katılımcılar, çatışmaları yapıcı biçimde
                yönetme, etkili geri bildirim verme ve profesyonel iletişim dili
                geliştirme becerilerini kazanacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İçerik Başlıkları */}
      <section
        id="icerik"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16"
      >
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Eğitim İçeriği ve Başlıklar
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Modüler yapı, her bölümde uygulanabilir araçlar ve pratikler.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
          {/* 1 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold">
                1
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Kurumsal İletişimin Temelleri
                </h3>
                <p className="text-base text-gray-500">
                  Stratejik çerçeve ve kültür ile uyum.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Kurumsal iletişimin stratejik önemi</li>
              <li>Kurum kültürü ile iletişim dili arasındaki ilişki</li>
              <li>
                Resmî, gayri resmî ve yatay iletişim ağlarının etkin kullanımı
              </li>
              <li>Güven ve aidiyet duygusunun iletişim yoluyla inşası</li>
            </ul>
          </article>

          {/* 2 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold">
                2
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  İletişimde Kurumsal Farkındalık
                </h3>
                <p className="text-base text-gray-500">
                  Roller, algılar ve etik sınırlar.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Kişisel algılar, roller ve kurumsal kimlikler</li>
              <li>İletişim tarzlarının kurum dinamiklerine etkisi</li>
              <li>Profesyonellik ve etik iletişim sınırları</li>
              <li>“Ben dili” ile “Kurum dili” arasındaki dengeyi kurmak</li>
            </ul>
          </article>

          {/* 3 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold">
                3
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Etkili Dinleme, Anlama ve Anlatma
                </h3>
                <p className="text-base text-gray-500">
                  Aktif dinleme ve net ifade yöntemleri.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Kurumsal ortamda aktif dinleme teknikleri</li>
              <li>Soru sorma sanatı ve stratejik iletişim becerileri</li>
              <li>Sağlıklı etkileşimin temeli: anlamadan onaylamamak</li>
              <li>Toplantı ve yazılı iletişimde netlik oluşturma yöntemleri</li>
            </ul>
          </article>

          {/* 4 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold">
                4
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Geri Bildirim Kültürü
                </h3>
                <p className="text-base text-gray-500">
                  Sürdürülebilir ve 360° uygulamalar.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>
                Kurum genelinde sürdürülebilir geri bildirim kültürü oluşturmak
              </li>
              <li>Ast-üst iletişiminde etkili geri bildirim dili</li>
              <li>Takdir ve gelişim odaklı iletişim yaklaşımları</li>
              <li>360 derece geri bildirim uygulamaları</li>
            </ul>
          </article>

          {/* 5 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold">
                5
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Takım İletişimi ve İş Birliği
                </h3>
                <p className="text-base text-gray-500">
                  Güven, roller ve çatışma yönetimi.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>
                Takım içinde güven, saygı ve açık iletişim ortamı oluşturmak
              </li>
              <li>Roller, beklentiler ve olası çatışma alanlarını yönetmek</li>
              <li>“Biz bilinci”ni güçlendiren birlikte üretme kültürü</li>
              <li>Grup çalışması: İletişimde güven testi</li>
            </ul>
          </article>

          {/* 6 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold">
                6
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Zor İnsanlar ve Kriz İletişimi
                </h3>
                <p className="text-base text-gray-500">
                  Model ve stratejilerle çözüm odaklı yaklaşım.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>
                Zorlayıcı kişilerle yapıcı iletişim stratejileri geliştirmek
              </li>
              <li>Thomas-Kilmann çatışma yönetimi modeli</li>
              <li>Stres, öfke ve savunma altında etkili iletişim kurmak</li>
              <li>Kriz anlarında soğukkanlı, çözüm odaklı yaklaşım</li>
            </ul>
          </article>

          {/* 7 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold">
                7
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Liderlikte Etkileşim ve İletişim
                </h3>
                <p className="text-base text-gray-500">
                  Güven temelli ve ilham veren liderlik.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Liderin dili, tonu ve görünürlüğü</li>
              <li>Güven temelli liderlik iletişimi kurmak</li>
              <li>Etkileme, ilham verme ve yönlendirme becerileri</li>
              <li>Geri bildirim odaklı liderlik pratikleri</li>
            </ul>
          </article>

          {/* 8 */}
          <article className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
            <header className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-base font-semibold">
                8
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Dijital ve Hibrit Ortamlarda İletişim
                </h3>
                <p className="text-base text-gray-500">
                  Online toplantılar, yazışma protokolleri ve enerji yönetimi.
                </p>
              </div>
            </header>
            <ul className="mt-4 space-y-2 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Online toplantılarda etkileşimi artırma yöntemleri</li>
              <li>Dijital beden dili ve profesyonel yazışma protokolleri</li>
              <li>Mesaj tonunu doğru yönetme ve yanlış anlamaları önleme</li>
              <li>Dijital yorgunluk yönetimi ve iletişim molaları</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Kazanımlar */}
      <section
        id="kazanımlar"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16"
      >
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-600 p-[1px]">
          <div className="rounded-2xl bg-white p-6 sm:p-10">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Eğitim Kazanımları
              </h2>
              <p className="mt-2 text-base text-gray-500">
                Program sonunda katılımcıların geliştireceği beceriler.
              </p>
            </div>
            <ul className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {[
                "Kurum içinde açık, saygılı ve etkili iletişim kurma becerisi",
                "Geri bildirim kültürünü destekleyen bir yaklaşım geliştirme",
                "Çatışma durumlarını yapıcı biçimde yönetme",
                "Dijital ortamlarda profesyonel ve net iletişim kurma",
                "Takım içinde sinerji, bağlılık ve güven ortamı oluşturma",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-semibold">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Neden Bu Eğitim */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Neden Bu Eğitim?
            </h2>
            <p className="mt-2 text-base text-gray-500">
              Kuruma ve kültüre etkisi.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed">
                Kurumsal İletişim ve Etkileşim Becerileri Eğitimi, çalışanların
                yalnızca iletişim kurmalarını değil, anlamlı bağlar kurarak
                kurum hedeflerine birlikte ilerlemelerini sağlar. Bu sayede
                kurum içinde verimlilik artar, çalışan bağlılığı güçlenir ve
                kurumsal kültür sürdürülebilir hale gelir.
              </p>
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
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                İletişime Geç
              </a>
              <a
                href="#icerik"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-base font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
