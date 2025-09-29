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
        const title = name.replace(/_/g, " ").replace(/\.pdf$/i, "");
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
