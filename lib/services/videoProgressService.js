import dbConnect from "@/lib/dbConnect";
import VideoProgress from "@/models/VideoProgress";
import VIDEO_TITLE_MAP, { VIDEO_COURSE_MAP } from "@/lib/videoTitleMap";
import { VIDEO_DURATION_MAP } from "@/lib/videoDurations";

/**
 * Kullanıcının video ilerlemesini upsert eder.
 */
export async function upsertProgress(userId, data) {
  await dbConnect();

  const {
    videoId,
    videoTitle,
    lastPosition,
    totalDuration,
    watchedSeconds,
    completed,
  } = data;

  const percentWatched =
    totalDuration > 0
      ? Math.min(100, Math.round((lastPosition / totalDuration) * 100))
      : 0;

  // Başlık önceliği: gelen başlık > lookup map > mevcut DB değerini koru
  const trimmedTitle = videoTitle != null ? String(videoTitle).trim() : "";
  const resolvedTitle = trimmedTitle || VIDEO_TITLE_MAP[videoId] || "";

  const todayStr = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

  const result = await VideoProgress.findOneAndUpdate(
    { userId, videoId },
    {
      $set: {
        // Dolu başlık varsa güncelle; yoksa mevcut değeri koru
        ...(resolvedTitle && { videoTitle: resolvedTitle }),
        lastPosition,
        totalDuration,
        percentWatched,
        completed: completed || false,
        updatedAt: new Date(),
      },
      $inc: {
        totalWatchTime: watchedSeconds || 0,
      },
      $addToSet: {
        watchDates: todayStr,
      },
    },
    {
      upsert: true,
      new: true,
      strict: false, // watchDates gibi yeni alanların $addToSet'ten çıkarılmasını engeller
    }
  ).lean();

  return result;
}

/**
 * Kullanıcının belirli bir video için ilerlemesini getirir.
 */
export async function getProgress(userId, videoId) {
  await dbConnect();
  const progress = await VideoProgress.findOne({ userId, videoId }).lean();
  return progress;
}

/**
 * Admin için genel video istatistiklerini döner.
 */
export async function getAdminStats() {
  await dbConnect();

  const [totals, topVideo] = await Promise.all([
    VideoProgress.aggregate([
      {
        $group: {
          _id: null,
          totalWatchTime: { $sum: "$totalWatchTime" },
          completedCount: {
            $sum: { $cond: [{ $eq: ["$completed", true] }, 1, 0] },
          },
          avgPercent: { $avg: "$percentWatched" },
          totalRecords: { $sum: 1 },
        },
      },
    ]),
    VideoProgress.aggregate([
      {
        $group: {
          _id: "$videoId",
          totalWatchTime: { $sum: "$totalWatchTime" },
          viewerCount: { $sum: 1 },
        },
      },
      { $sort: { totalWatchTime: -1 } },
      { $limit: 1 },
    ]),
  ]);

  const stats = totals[0] || {
    totalWatchTime: 0,
    completedCount: 0,
    avgPercent: 0,
    totalRecords: 0,
  };

  return {
    totalWatchTime: Math.round(stats.totalWatchTime),
    completedCount: stats.completedCount,
    avgPercent: Math.round(stats.avgPercent || 0),
    totalRecords: stats.totalRecords,
    topVideo: topVideo[0] || null,
  };
}

/**
 * Admin için video bazlı detaylı istatistikleri döner.
 * Her video için izleyici isim/soyisim listesi dahil.
 * Eksik videoTitle alanları lookup map ile doldurulur.
 */
export async function getVideoStats() {
  await dbConnect();

  const stats = await VideoProgress.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
    // videoTitle dolu olanları öne al
    { $sort: { videoId: 1, videoTitle: -1 } },
    {
      $group: {
        _id: "$videoId",
        totalWatchTime: { $sum: "$totalWatchTime" },
        viewerCount: { $sum: 1 },
        completedCount: {
          $sum: { $cond: [{ $eq: ["$completed", true] }, 1, 0] },
        },
        avgPercent: { $avg: "$percentWatched" },
        viewerNames: {
          $push: {
            $trim: {
              input: {
                $concat: [
                  { $ifNull: ["$user.firstName", ""] },
                  " ",
                  { $ifNull: ["$user.lastName", ""] },
                ],
              },
              chars: " ",
            },
          },
        },
        videoTitle: { $first: { $ifNull: ["$videoTitle", ""] } },
        watchDatesArr: { $push: { $ifNull: ["$watchDates", []] } },
      },
    },
    {
      $addFields: {
        watchDates: {
          $reduce: {
            input: "$watchDatesArr",
            initialValue: [],
            in: { $setUnion: ["$$value", "$$this"] },
          },
        },
      },
    },
    { $unset: "watchDatesArr" },
    { $sort: { totalWatchTime: -1 } },
  ]);

  // Eksik başlık ve kurs bilgisini lookup map ile doldur
  return stats.map((v) => ({
    ...v,
    videoTitle: v.videoTitle?.trim() || VIDEO_TITLE_MAP[v._id] || "",
    courseName: VIDEO_COURSE_MAP[v._id] || "",
  }));
}

/**
 * Admin için izleyici bazlı toplam izleme sürelerini döner.
 * Her izleyici için kategori bazlı (Mentörlük, MYK Koç Seviye 6, Eğitim Uzmanlığı) süreler dahil.
 */
export async function getViewerStats() {
  await dbConnect();

  const rawStats = await VideoProgress.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
    {
      $group: {
        _id: "$userId",
        name: {
          $first: {
            $trim: {
              input: {
                $concat: [
                  { $ifNull: ["$user.firstName", ""] },
                  " ",
                  { $ifNull: ["$user.lastName", ""] },
                ],
              },
              chars: " ",
            },
          },
        },
        totalWatchTime: { $sum: "$totalWatchTime" },
        completedCount: {
          $sum: { $cond: [{ $eq: ["$completed", true] }, 1, 0] },
        },
        videoCount: { $sum: 1 },
        watchDatesArr: { $push: { $ifNull: ["$watchDates", []] } },
        videos: { $push: { videoId: "$videoId", totalWatchTime: "$totalWatchTime", completed: "$completed" } },
      },
    },
    {
      $addFields: {
        watchDates: {
          $reduce: {
            input: "$watchDatesArr",
            initialValue: [],
            in: { $setUnion: ["$$value", "$$this"] },
          },
        },
      },
    },
    { $unset: "watchDatesArr" },
    { $sort: { totalWatchTime: -1 } },
  ]);

  // Kategori bazlı metrikleri hesapla (VIDEO_COURSE_MAP kullanarak)
  return rawStats.map((v) => {
    const categoryWatchTime = {};
    const categoryCompletedCount = {};
    const categoryVideoCount = {};
    (v.videos || []).forEach(({ videoId, totalWatchTime, completed }) => {
      const course = VIDEO_COURSE_MAP[String(videoId)] || "Diğer";
      categoryWatchTime[course] = (categoryWatchTime[course] || 0) + (totalWatchTime || 0);
      categoryVideoCount[course] = (categoryVideoCount[course] || 0) + 1;
      if (completed) categoryCompletedCount[course] = (categoryCompletedCount[course] || 0) + 1;
    });
    const { videos, ...rest } = v;
    return { ...rest, categoryWatchTime, categoryCompletedCount, categoryVideoCount };
  });
}

/**
 * Mentörlük, MYK Koç Seviye 6, Eğitim Uzmanlığı sayfalarındaki videoların
 * toplam sürelerini döner. VIDEO_DURATION_MAP (Vimeo oEmbed) kullanılır;
 * süresi 0 olanlar için VideoProgress fallback yapılır.
 */
export async function getCategoryTotals() {
  await dbConnect();

  // VIDEO_COURSE_MAP'ten her kategorinin video sayısı ve video ID listesi
  const videoIdsByCategory = {};
  Object.entries(VIDEO_COURSE_MAP).forEach(([videoId, course]) => {
    if (!videoIdsByCategory[course]) videoIdsByCategory[course] = [];
    videoIdsByCategory[course].push(videoId);
  });

  // VideoProgress'ten max totalDuration (fallback için - Vimeo'da 0 dönen özel videolar)
  const progressDurations = await VideoProgress.aggregate([
    { $match: { totalDuration: { $gt: 0 } } },
    { $group: { _id: "$videoId", maxDuration: { $max: "$totalDuration" } } },
  ]);
  const progressMap = {};
  progressDurations.forEach(({ _id: videoId, maxDuration }) => {
    progressMap[String(videoId)] = maxDuration;
  });

  const categories = ["Mentörlük", "MYK Koç Seviye 6", "Eğitim Uzmanlığı"];
  const result = {};
  categories.forEach((cat) => {
    const videoIds = videoIdsByCategory[cat] || [];
    let totalDuration = 0;
    videoIds.forEach((videoId) => {
      const fromMap = VIDEO_DURATION_MAP?.[String(videoId)] ?? 0;
      const fromProgress = progressMap[String(videoId)] ?? 0;
      totalDuration += fromMap > 0 ? fromMap : fromProgress;
    });
    result[cat] = {
      videoCount: videoIds.length,
      totalDuration: Math.round(totalDuration),
    };
  });
  return result;
}

/**
 * Veritabanındaki tüm boş videoTitle kayıtlarını lookup map ile günceller.
 * Admin backfill işlemi için kullanılır.
 */
export async function backfillVideoTitles() {
  await dbConnect();

  const records = await VideoProgress.find({
    $or: [
      { videoTitle: "" },
      { videoTitle: null },
      { videoTitle: { $exists: false } },
    ],
  })
    .select("_id videoId")
    .lean();

  let updated = 0;
  const BATCH = 100;

  for (let i = 0; i < records.length; i += BATCH) {
    const batch = records.slice(i, i + BATCH);
    const ops = batch
      .filter((rec) => VIDEO_TITLE_MAP[String(rec.videoId)])
      .map((rec) => ({
        updateOne: {
          filter: { _id: rec._id },
          update: { $set: { videoTitle: VIDEO_TITLE_MAP[String(rec.videoId)] } },
        },
      }));

    if (ops.length > 0) {
      const result = await VideoProgress.bulkWrite(ops, { ordered: false });
      updated += result.modifiedCount ?? 0;
    }
  }

  return { checked: records.length, updated };
}
