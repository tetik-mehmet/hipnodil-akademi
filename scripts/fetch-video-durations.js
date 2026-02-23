/**
 * VIDEO_COURSE_MAP'teki tüm videoların sürelerini Vimeo oEmbed API'den çeker
 * ve lib/videoDurations.js dosyasını oluşturur.
 *
 * Kullanım: node scripts/fetch-video-durations.js
 */

const VIDEO_COURSE_MAP = {
  "1014780792": "MYK Koç Seviye 6",
  "1015148357": "MYK Koç Seviye 6",
  "1015153841": "MYK Koç Seviye 6",
  "1015157127": "MYK Koç Seviye 6",
  "1015157595": "MYK Koç Seviye 6",
  "1015157883": "MYK Koç Seviye 6",
  "1015160408": "MYK Koç Seviye 6",
  "1015161158": "MYK Koç Seviye 6",
  "1015162916": "MYK Koç Seviye 6",
  "1015163317": "MYK Koç Seviye 6",
  "1015165011": "MYK Koç Seviye 6",
  "1015165684": "MYK Koç Seviye 6",
  "1015179539": "MYK Koç Seviye 6",
  "1015194733": "MYK Koç Seviye 6",
  "1015197730": "MYK Koç Seviye 6",
  "1015200790": "MYK Koç Seviye 6",
  "1015225094": "MYK Koç Seviye 6",
  "1015226101": "MYK Koç Seviye 6",
  "1015233575": "MYK Koç Seviye 6",
  "1015251231": "MYK Koç Seviye 6",
  "1015252543": "MYK Koç Seviye 6",
  "1015258614": "MYK Koç Seviye 6",
  "1015262022": "MYK Koç Seviye 6",
  "1015269655": "MYK Koç Seviye 6",
  "1015295843": "MYK Koç Seviye 6",
  "1015297143": "MYK Koç Seviye 6",
  "1015628175": "MYK Koç Seviye 6",
  "1015637515": "MYK Koç Seviye 6",
  "1015690889": "MYK Koç Seviye 6",
  "1015693155": "MYK Koç Seviye 6",
  "1016155160": "MYK Koç Seviye 6",
  "1016251965": "MYK Koç Seviye 6",
  "1016443320": "MYK Koç Seviye 6",
  "1016817484": "MYK Koç Seviye 6",
  "1016479212": "MYK Koç Seviye 6",
  "1016479572": "MYK Koç Seviye 6",
  "1016479724": "MYK Koç Seviye 6",
  "1016479871": "MYK Koç Seviye 6",
  "1016480107": "MYK Koç Seviye 6",
  "1016480329": "MYK Koç Seviye 6",
  "1016480688": "MYK Koç Seviye 6",
  "1016480899": "MYK Koç Seviye 6",
  "1016482253": "MYK Koç Seviye 6",
  "1016482775": "MYK Koç Seviye 6",
  "1016483327": "MYK Koç Seviye 6",
  "1017490926": "MYK Koç Seviye 6",
  "1017491273": "MYK Koç Seviye 6",
  "1017491617": "MYK Koç Seviye 6",
  "1017491947": "MYK Koç Seviye 6",
  "1017492252": "MYK Koç Seviye 6",
  "1017492515": "MYK Koç Seviye 6",
  "1017492839": "MYK Koç Seviye 6",
  "1017493140": "MYK Koç Seviye 6",
  "1025017034": "MYK Koç Seviye 6",
  "1025020971": "MYK Koç Seviye 6",
  "1025021298": "MYK Koç Seviye 6",
  "1026135626": "MYK Koç Seviye 6",
  "1026135937": "MYK Koç Seviye 6",
  "1026136367": "MYK Koç Seviye 6",
  "1027271457": "MYK Koç Seviye 6",
  "1027271722": "MYK Koç Seviye 6",
  "1027271979": "MYK Koç Seviye 6",
  "1027272246": "MYK Koç Seviye 6",
  "1027272513": "MYK Koç Seviye 6",
  "1027272809": "MYK Koç Seviye 6",
  "1027273204": "MYK Koç Seviye 6",
  "1033440605": "MYK Koç Seviye 6",
  "1033441001": "MYK Koç Seviye 6",
  "1033441176": "MYK Koç Seviye 6",
  "1033441781": "MYK Koç Seviye 6",
  "1033442217": "MYK Koç Seviye 6",
  "1039098107": "MYK Koç Seviye 6",
  "1039099942": "MYK Koç Seviye 6",
  "1039100340": "MYK Koç Seviye 6",
  "1039100808": "MYK Koç Seviye 6",
  "1039101105": "MYK Koç Seviye 6",
  "1039101607": "MYK Koç Seviye 6",
  "1039102142": "MYK Koç Seviye 6",
  "1045316586": "MYK Koç Seviye 6",
  "1045316936": "MYK Koç Seviye 6",
  "1045317302": "MYK Koç Seviye 6",
  "1045317647": "MYK Koç Seviye 6",
  "1045318381": "MYK Koç Seviye 6",
  "1045318800": "MYK Koç Seviye 6",
  "1045319203": "MYK Koç Seviye 6",
  "1045319667": "MYK Koç Seviye 6",
  "1045320001": "MYK Koç Seviye 6",
  "1045320297": "MYK Koç Seviye 6",
  "1045320529": "MYK Koç Seviye 6",
  "1016114795": "MYK Koç Seviye 6",
  "1016115138": "MYK Koç Seviye 6",
  "1016115350": "MYK Koç Seviye 6",
  "1016115880": "MYK Koç Seviye 6",
  "1016116104": "MYK Koç Seviye 6",
  "1016116526": "MYK Koç Seviye 6",
  "1016116770": "MYK Koç Seviye 6",
  "1016117036": "MYK Koç Seviye 6",
  "1016117189": "MYK Koç Seviye 6",
  "1016990709": "MYK Koç Seviye 6",
  "1016992464": "MYK Koç Seviye 6",
  "1017004129": "MYK Koç Seviye 6",
  "1017012349": "MYK Koç Seviye 6",
  "1017024764": "MYK Koç Seviye 6",
  "1048934916": "Mentörlük",
  "1050053220": "Mentörlük",
  "1051894685": "Mentörlük",
  "1052575306": "Mentörlük",
  "1074962620": "Mentörlük",
  "1077226974": "Mentörlük",
  "1078073738": "Mentörlük",
  "1078294669": "Mentörlük",
  "1079774040": "Mentörlük",
  "1129875511": "Mentörlük",
  "1130159831": "Mentörlük",
  "1132010457": "Mentörlük",
  "1132042547": "Mentörlük",
  "1166377545": "Mentörlük",
  "1166379348": "Mentörlük",
  "1166381749": "Mentörlük",
  "1016065587": "Eğitim Uzmanlığı",
  "1016061307": "Eğitim Uzmanlığı",
  "1016062819": "Eğitim Uzmanlığı",
  "1129833510": "Eğitim Uzmanlığı",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchDuration(videoId) {
  const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data?.duration ?? 0;
  } catch (e) {
    console.warn(`Video ${videoId}: ${e.message}`);
    return 0;
  }
}

async function main() {
  const videoIds = Object.keys(VIDEO_COURSE_MAP);
  const map = {};
  for (let i = 0; i < videoIds.length; i++) {
    const id = videoIds[i];
    const dur = await fetchDuration(id);
    map[id] = dur;
    process.stdout.write(`\r${i + 1}/${videoIds.length} - ${id}: ${dur}s`);
    await sleep(200);
  }
  console.log("\n");

  const lines = Object.entries(map)
    .map(([k, v]) => `  "${k}": ${v}`)
    .join(",\n");

  const content = `/**
 * Video ID → süre (saniye).
 * Vimeo oEmbed API'den scripts/fetch-video-durations.js ile üretilir.
 * Güncellemek için: node scripts/fetch-video-durations.js
 */

export const VIDEO_DURATION_MAP = {
${lines}
};
`;

  const fs = await import("fs");
  const path = await import("path");
  const outPath = path.join(process.cwd(), "lib", "videoDurations.js");
  fs.writeFileSync(outPath, content, "utf8");
  console.log("Yazıldı:", outPath);

  const byCat = {};
  Object.entries(VIDEO_COURSE_MAP).forEach(([id, cat]) => {
    byCat[cat] = (byCat[cat] || 0) + (map[id] || 0);
  });
  console.log("\nKategori toplamları:");
  Object.entries(byCat).forEach(([cat, sec]) => {
    const m = Math.floor(sec / 60);
    const h = Math.floor(m / 60);
    console.log(`  ${cat}: ${h} sa ${m % 60} dk (${sec} sn)`);
  });
}

main().catch(console.error);
