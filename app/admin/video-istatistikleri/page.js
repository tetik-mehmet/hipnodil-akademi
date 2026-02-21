"use client";

import React from "react";
import { useRouter } from "next/navigation";

function formatDuration(seconds) {
  if (!seconds) return "0 dk";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h} sa ${m} dk`;
  return `${m} dk`;
}

function CourseBadge({ name }) {
  if (!name) return <span className="text-xs text-gray-400">—</span>;
  const cls =
    name === "Mentörlük"
      ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      : name === "Eğitim Uzmanlığı"
      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${cls}`}
    >
      {name}
    </span>
  );
}

function VideoStatsPanel() {
  const [summary, setSummary] = React.useState(null);
  const [videoStats, setVideoStats] = React.useState([]);
  const [viewerStats, setViewerStats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [viewerFilter, setViewerFilter] = React.useState("");

  const fetchStats = React.useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/admin/video-stats", { cache: "no-store" });
      if (!res.ok) throw new Error("İstatistikler alınamadı");
      const data = await res.json();
      setSummary(data.summary || null);
      setVideoStats(Array.isArray(data.videoStats) ? data.videoStats : []);
      setViewerStats(Array.isArray(data.viewerStats) ? data.viewerStats : []);
    } catch (e) {
      setError(e?.message || "Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const filteredVideoStats = React.useMemo(() => {
    const q = viewerFilter.trim().toLowerCase();
    if (!q) return videoStats;
    return videoStats.filter(
      (v) =>
        Array.isArray(v.viewerNames) &&
        v.viewerNames.some((n) => n && n.toLowerCase().includes(q))
    );
  }, [videoStats, viewerFilter]);

  const filteredViewerStats = React.useMemo(() => {
    const q = viewerFilter.trim().toLowerCase();
    if (!q) return viewerStats;
    return viewerStats.filter(
      (v) => v.name && v.name.toLowerCase().includes(q)
    );
  }, [viewerStats, viewerFilter]);

  if (loading) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-purple-600 border-b-transparent" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          İstatistikler yükleniyor…
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 p-4 text-sm text-red-800 dark:text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* İzleyici filtresi */}
      <div className="relative max-w-xs">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="İzleyici adına göre filtrele…"
          value={viewerFilter}
          onChange={(e) => setViewerFilter(e.target.value)}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 pl-9 pr-8 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {viewerFilter && (
          <button
            onClick={() => setViewerFilter("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Özet Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <svg
                className="h-5 w-5 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Toplam İzlenme Süresi
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {formatDuration(summary?.totalWatchTime)}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
              <svg
                className="h-5 w-5 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Tamamlanan Video
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {summary?.completedCount ?? 0}
          </p>
        </div>
      </div>

      {/* İzleyici Bazlı İzleme Süreleri */}
      {filteredViewerStats.length > 0 && (
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
            İzleyici Bazlı İzleme Süreleri
            {viewerFilter && (
              <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                — &ldquo;{viewerFilter}&rdquo; için
              </span>
            )}
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-400">
                    İzleyici
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 dark:text-gray-400">
                    Toplam İzleme
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 dark:text-gray-400">
                    Tamamlanan
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 dark:text-gray-400">
                    İzlenen Video
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-800">
                {filteredViewerStats.map((v) => (
                  <tr
                    key={String(v._id)}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors cursor-pointer"
                    onClick={() => setViewerFilter(v.name || "")}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                      {v.name || (
                        <span className="text-gray-400 italic">İsimsiz</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right text-purple-700 dark:text-purple-400 font-semibold">
                      {formatDuration(v.totalWatchTime)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">
                        {v.completedCount}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600 dark:text-gray-400">
                      {v.videoCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Video Bazlı İstatistikler */}
      {filteredVideoStats.length > 0 && (
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Video Bazlı İstatistikler
            {viewerFilter && (
              <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                — &ldquo;{viewerFilter}&rdquo; izleyenlerin videoları (
                {filteredVideoStats.length})
              </span>
            )}
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-400">
                    Kurs
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-400">
                    Video
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-400">
                    İzleyici
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 dark:text-gray-400">
                    Toplam Süre
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 dark:text-gray-400">
                    Tamamlayan
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-400">
                    İzleme Günü
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-800">
                {filteredVideoStats.map((v) => {
                  const sortedDates = Array.isArray(v.watchDates)
                    ? [...v.watchDates].sort((a, b) => b.localeCompare(a))
                    : [];
                  return (
                    <tr
                      key={v._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors"
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        <CourseBadge name={v.courseName} />
                      </td>
                      <td
                        className="px-4 py-3 text-gray-700 dark:text-gray-300 max-w-xs truncate"
                        title={v.videoTitle?.trim() || v._id || ""}
                      >
                        {v.videoTitle?.trim() || `Video (${v._id})`}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300 max-w-[200px]">
                        {Array.isArray(v.viewerNames) &&
                        v.viewerNames.filter(Boolean).length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {v.viewerNames.filter(Boolean).map((name) => {
                              const isActive =
                                viewerFilter &&
                                name
                                  .toLowerCase()
                                  .includes(viewerFilter.toLowerCase());
                              return (
                                <button
                                  key={name}
                                  onClick={() => setViewerFilter(name)}
                                  className={`rounded px-1.5 py-0.5 text-xs transition-colors ${
                                    isActive
                                      ? "bg-purple-200 text-purple-900 dark:bg-purple-800 dark:text-purple-100"
                                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                                  }`}
                                >
                                  {name}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                        {formatDuration(v.totalWatchTime)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">
                          {v.completedCount}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {sortedDates.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {sortedDates.map((d) => (
                              <span
                                key={d}
                                className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-700"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {videoStats.length === 0 && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Henüz video izleme kaydı bulunmuyor.
          </p>
        </div>
      )}

      {videoStats.length > 0 &&
        filteredVideoStats.length === 0 &&
        viewerFilter && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &ldquo;
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {viewerFilter}
              </span>
              &rdquo; adına ait izleme kaydı bulunamadı.
            </p>
          </div>
        )}
    </div>
  );
}

export default function VideoIstatistikleriPage() {
  const router = useRouter();

  return (
    <main className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <section className="mx-auto max-w-6xl px-4 py-10">
        {/* Başlık ve geri butonu */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => router.push("/admin/landing")}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Geri
          </button>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Video İstatistikleri
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-5 sm:p-8">
          <VideoStatsPanel />
        </div>
      </section>
    </main>
  );
}
