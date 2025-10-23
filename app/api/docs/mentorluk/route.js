import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    // Proje kökü genellikle Next.js'te public klasörünün yanıdır
    // Dolayısıyla ekstra "hipnodil" segmenti eklemeyelim
    const publicDir = path.join(process.cwd(), "public", "mentorluk_pdf");
    const hrefBase = "/mentorluk_pdf";

    const entries = await fs.readdir(publicDir, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".pdf"))
      .map((e) => e.name);

    const stats = await Promise.all(
      files.map(async (name) => {
        const filePath = path.join(publicDir, name);
        const stat = await fs.stat(filePath);
        return { name, size: stat.size };
      })
    );

    const formatSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const units = ["B", "KB", "MB", "GB"]; // yeterli
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      const value = bytes / Math.pow(1024, i);
      const formatted =
        value >= 100 ? Math.round(value) : Math.round(value * 10) / 10;
      return `${formatted} ${units[i]}`;
    };

    const docs = stats
      .map(({ name, size }) => {
        // Dosya adından anlamlı başlık oluştur
        let title = name.replace(/\.pdf$/i, "");

        // Dosya adına göre özel başlıklar
        if (title.includes("sinav-hazirlik-egitimi-modul1")) {
          title = "Modül 1: Sınav Hazırlık Eğitimi";
        } else if (title.includes("modul-22")) {
          title = "Modül 2: Ulusal Meslek Standardı ve Ulusal Yeterliliği";
        } else if (title.includes("modul-33")) {
          title = "Modül 3: Ulusal Meslek Standardı ve Ulusal Yeterliliği";
        } else if (title.includes("modul-44")) {
          title = "Modül 4: Ulusal Meslek Standardı ve Ulusal Yeterliliği";
        } else if (title.includes("degerlere-kocluk-sorular")) {
          title = "Değerlere Koçluk Soruları";
        } else if (title.includes("ek-1-tyc-terimler-sozlugu")) {
          title = "Ek 1: TYÇ Terimler Sözlüğü";
        } else if (
          title.includes("ek-2-seviye-6-ulusal-yeterlilik-meslek-standarti")
        ) {
          title = "Ek 2: Seviye 6 Ulusal Yeterlilik Meslek Standardı";
        } else if (
          title.includes("ek-3-seviye-6-ulusal-yeterlilik-koc-dokumani")
        ) {
          title = "Ek 3: Seviye 6 Ulusal Yeterlilik Koç Dokümanı";
        } else if (title.includes("iliskilere-kocluk-detay")) {
          title = "İlişkilere Koçluk Detayı";
        } else if (title.includes("kocluk-ornek-sorular")) {
          title = "Koçluk Örnek Sorular";
        } else if (title.includes("yasam-cemberi-sorular")) {
          title = "Yaşam Çemberi Soruları";
        } else if (title.includes("yasam-cemberi9")) {
          title = "Yaşam Çemberi";
        } else if (title.includes("zihinsel-prova-detay")) {
          title = "Zihinsel Prova Detayı";
        } else if (
          title.includes("revizyon-214") ||
          title.includes("2024-2025")
        ) {
          title = "MYK Koç Seviye 6 - 2024-2025 Revizyonu";
        } else {
          // Varsayılan: dosya adını temizle
          title = title.replace(/_/g, " ").replace(/-/g, " ");
        }

        return {
          title,
          href: `${hrefBase}/${name}`,
          sizeText: formatSize(size),
          bytes: size,
          filename: name,
        };
      })
      .sort((a, b) =>
        a.title.localeCompare(b.title, "tr", {
          numeric: true,
          sensitivity: "base",
        })
      );

    return NextResponse.json({ docs });
  } catch (error) {
    // Klasör yoksa boş liste ile dön (ilk kurulumlarda kullanıcı henüz dosya koymamış olabilir)
    if (
      error &&
      (error.code === "ENOENT" || String(error).includes("ENOENT"))
    ) {
      return NextResponse.json({ docs: [] });
    }
    return NextResponse.json(
      {
        error: "PDF listesi okunamadı",
        details: String(error?.message || error),
      },
      { status: 500 }
    );
  }
}
