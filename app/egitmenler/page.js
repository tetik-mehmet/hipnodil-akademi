"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function SectionBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 px-3 py-1 text-sm font-medium text-slate-600 ring-1 ring-sky-500/20">
      {children}
    </span>
  );
}

function Pill({ children, color = "sky" }) {
  const colorMap = {
    sky: "bg-sky-50 text-sky-700 ring-sky-200",
    violet: "bg-violet-50 text-violet-700 ring-violet-200",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    amber: "bg-amber-50 text-amber-700 ring-amber-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-200",
    indigo: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    slate: "bg-slate-50 text-slate-700 ring-slate-200",
    fuchsia: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
    lime: "bg-lime-50 text-lime-700 ring-lime-200",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ring-1 ${
        colorMap[color] || colorMap.slate
      }`}
    >
      {children}
    </span>
  );
}

function TrainerCard({ imageSrc, name, title, sections, footerHighlight }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 will-change-transform hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative w-full overflow-hidden aspect-square">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="text-3xl font-semibold text-slate-900">{name}</h3>
          <p className="mt-1 text-base text-slate-600">{title}</p>
        </div>
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-2.5">
            <div className="flex items-center gap-2">
              <SectionBadge>{section.heading}</SectionBadge>
              {section.badge && (
                <Pill color={section.badgeColor}>{section.badge}</Pill>
              )}
            </div>

            {section.type === "list" && (
              <ul className="list-disc space-y-1 pl-5 text-base text-slate-700 marker:text-sky-500">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.type === "pills" && (
              <div className="flex flex-wrap gap-2">
                {section.items.map((item, i) => (
                  <Pill key={i} color={item.color || "slate"}>
                    {item.label}
                  </Pill>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {footerHighlight && (
        <div className="m-6 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-1">
          <div className="rounded-[10px] bg-white/10 px-4 py-3 text-center text-base font-medium text-white backdrop-blur">
            {footerHighlight}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            Eğitmenlerimiz
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Hipnodil Akademi çatısı altında eğitim veren uzman ekibimizle
            tanışın.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <TrainerCard
          imageSrc="/merve.png"
          name="Merve Öcüt Çelik"
          title="PDR Uzmanı | ICF/MYK Profesyonel Koç"
          sections={[
            {
              heading: "Eğitim & Uzmanlık",
              type: "list",
              items: [
                "Psikolojik Danışmanlık ve Rehberlik Bölümü mezunu",
                "Psikoloji alanında yüksek lisans eğitimi",
                "Drama alanında uzmanlık",
                "Quantum ve NLP teknikleri eğitimi",
              ],
            },
            {
              heading: "Deneyim",
              type: "list",
              items: [
                "Özel kurumsal kolejde uzun yıllar rehberlik ve psikolojik danışmanlık",
                "TEGV'de drama alanında faaliyetler",
                "Çocuklara ve yetişkinlere yönelik psikolojik atölye çalışmaları",
              ],
            },
            {
              heading: "Hizmet Alanları",
              type: "pills",
              items: [
                { label: "Bireysel Danışmanlık", color: "sky" },
                { label: "Yaşam Koçluğu", color: "sky" },
                { label: "Öğrenci Koçluğu", color: "violet" },
                { label: "Etkili İletişim", color: "emerald" },
                { label: "Beden Dili", color: "cyan" },
                { label: "Aile Danışmanlığı", color: "rose" },
                { label: "Ergen Danışmanlığı", color: "amber" },
              ],
            },
          ]}
          footerHighlight="Hipnodil Akademi'de MYK Seviye 6 Temel Koçluk Eğitimi vermektedir."
        />

        <TrainerCard
          imageSrc="/bulent.png"
          name="Bülent Gardiyanoğlu"
          title="Yazar | Kişisel Gelişim Uzmanı"
          sections={[
            {
              heading: "Eğitim & Kariyer",
              type: "list",
              items: [
                "Kıbrıs'ta eğitimini tamamladı",
                "İstanbul Marmara Üniversitesi Güzel Sanatlar Fakültesi'nden onur derecesi ile mezun",
                "Üst düzey yönetici olarak çalıştı, kendi teknoloji şirketini kurdu",
                "Yurtiçinde çeşitli kişisel gelişim eğitimleri aldı",
              ],
            },
            {
              heading: "Deneyim & Başarılar",
              type: "list",
              items: [
                "200'den fazla canlı yayına katıldı",
                "Binlerce kişiyle birebir seanslar gerçekleştirdi",
                "Birçok uluslararası ülkede yüzbinlerce kişiye seminer verdi",
                "Dünyanın birçok yerinde seminer ve atölye çalışmalarına devam ediyor",
              ],
            },
            {
              heading: "Yayınlanan Kitapları",
              type: "pills",
              items: [
                { label: "Evrenin İlahi Dili-Uyanış", color: "emerald" },
                { label: "İki Tam Bir Tek", color: "violet" },
                { label: "Kadın Olmayı Hatırlamak", color: "rose" },
                { label: "Her Şey Hakikati Görmekle Başlar", color: "amber" },
                { label: "Mucize Şifa", color: "sky" },
                { label: "Her Güne Mesajınız Var", color: "indigo" },
                { label: "Gönül Gözü", color: "fuchsia" },
                { label: "Kendini Ertelemekten Vazgeç", color: "cyan" },
                { label: "Yüreği ile Konuşanlar", color: "lime" },
                { label: "İtikâf, Karma ve Hak Ediş", color: "emerald" },
                { label: "Dört Sınav", color: "rose" },
              ],
            },
          ]}
          footerHighlight="Hipnodil Akademi'de Kurumsal Koçluk Eğitimi vermektedir."
        />

        <TrainerCard
          imageSrc="/ozlem.png"
          name="Özlem İSA"
          title="Profesyonel Koç | Yaşam Koçluğu Eğitmeni"
          sections={[
            {
              heading: "Özgeçmiş",
              type: "list",
              items: [
                "2012'de kişisel gelişim alanına başladı ve çeşitli eğitimler aldı",
                "2016'da ilk koçluk sertifikasını, 2020'de profesyonel koçluk sertifikasını aldı",
                "2020'den itibaren 100'den fazla danışana, 1000'e yakın danışmanlık verdi",
                "Kişisel gelişim alanında eğitimler vermektedir",
                "2020'den beri Nefes21 Akademi ve Megaverse'de hizmet vermekte; rehber koç olarak çalışmaktadır",
                "Mentörlük yapmaya devam etmektedir",
              ],
            },
            {
              heading: "Alınan Eğitimler",
              type: "list",
              items: [
                "Numeroloji Uzmanı",
                "Bioenerji Uzmanı",
                "Reiki Master",
                "Aile Dizimi Uygulayıcısı",
                "Olumlu Yaşam Teknikleri Uygulayıcısı",
                "Astroloji Uzmanı",
                "Pandül / Sarkaç",
              ],
            },
            {
              heading: "Uzmanlık Alanları",
              type: "pills",
              items: [
                { label: "Profesyonel Koçluk", color: "sky" },
                { label: "OYT – Bilinçaltı Uygulama", color: "violet" },
              ],
            },
          ]}
          footerHighlight="Hipnodil Akademi bünyesinde Temel Koçluk, Numeroloji, Holistik Koçluk ve Bioenerji eğitimleri vermektedir."
        />

        <TrainerCard
          imageSrc="/ceyda.png"
          name="Ceyda YENAL"
          title="MYK Belgeli Profesyonel Koç / Mentör"
          sections={[
            {
              heading: "Özgeçmiş",
              type: "list",
              items: [
                "Sakarya Üniversitesi Kamu Yönetimi ve Çevre Koruma mezunudur",
                "Koçlukla bireylerin farkındalıklarını artırmalarına ve potansiyellerini açığa çıkarmalarına rehberlik eder",
                "ICF ve MYK sertifikasyonları ile koçluk alanında güçlü bir uzmanlık geliştirmiştir",
                "Profesyonel bir zeminde derinleşerek bireylerin içsel gücünü keşfetmesine ve dönüştürücü adımlar atmasına destek olur",
              ],
            },
            {
              heading: "Alınan Eğitimler",
              type: "list",
              items: [
                "PCC Profesyonel Koçluk",
                "Holistik Koçluk / Nefes Koçluğu / İlişki Koçluğu",
                "Eğiticinin Eğitimi",
              ],
            },
            {
              heading: "Uzmanlık Alanları",
              type: "pills",
              items: [
                { label: "MYK Koç Seviye 6 Profesyonel Koç", color: "sky" },
                {
                  label: "ICF Profesyonel Koç Eğitimi / Öğrenci Koçluğu",
                  color: "violet",
                },
                {
                  label: "CCE / NLP / Olumlu Yaşam Teknikleri / Reiki Master",
                  color: "emerald",
                },
              ],
            },
          ]}
          footerHighlight="Hipnodil Akademi bünyesinde MYK (Koç Seviye 6) Mentörlük Hizmeti vermektedir."
        />
      </div>
    </main>
  );
}
