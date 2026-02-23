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

const CATEGORIES = [
  {
    key: "Mentörlük",
    label: "Mentörlük",
    ring: "#9333ea",
    bar: "bg-purple-500",
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    card: "border-purple-200 dark:border-purple-800/40 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900",
    icon: "text-purple-500 dark:text-purple-400",
    accent: "#9333ea",
  },
  {
    key: "MYK Koç Seviye 6",
    label: "Koç Seviye 6",
    ring: "#d97706",
    bar: "bg-amber-500",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    card: "border-amber-200 dark:border-amber-800/40 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-gray-900",
    icon: "text-amber-500 dark:text-amber-400",
    accent: "#d97706",
  },
  {
    key: "Eğitim Uzmanlığı",
    label: "Eğitim Uzmanlığı",
    ring: "#2563eb",
    bar: "bg-blue-500",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    card: "border-blue-200 dark:border-blue-800/40 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900",
    icon: "text-blue-500 dark:text-blue-400",
    accent: "#2563eb",
  },
];

function CircularProgress({ pct, color, size = 88 }) {
  const r = size / 2 - 8;
  const C = 2 * Math.PI * r;
  const clamped = Math.min(100, Math.max(0, pct));
  const offset = C * (1 - clamped / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        strokeWidth="7"
        stroke="currentColor"
        className="text-gray-200 dark:text-gray-700"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        strokeWidth="7"
        stroke={color}
        strokeLinecap="round"
        strokeDasharray={C}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={size < 80 ? "13" : "15"}
        fontWeight="700"
        fill={color}
      >
        {Math.round(clamped)}%
      </text>
    </svg>
  );
}

function CategoryProgressModal({ user, categoryTotals, onClose }) {
  React.useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const totalWatched = user.totalWatchTime || 0;
  const totalCompleted = user.completedCount || 0;
  const totalVideos = user.videoCount || 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-white dark:bg-gray-900 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-5 py-4 flex items-start justify-between gap-3 rounded-t-3xl sm:rounded-t-2xl">
          <div>
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">
              Kullanıcı İlerleme Raporu
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {user.name || "İsimsiz Kullanıcı"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Özet şerit */}
        <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800 border-b border-gray-100 dark:border-gray-800">
          {[
            { label: "Toplam İzleme", value: formatDuration(totalWatched) },
            { label: "Tamamlanan", value: `${totalCompleted} video` },
            { label: "İzlenen", value: `${totalVideos} video` },
          ].map(({ label, value }) => (
            <div key={label} className="px-4 py-3 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-0.5">{value}</p>
            </div>
          ))}
        </div>

        {/* Kategori kartları */}
        <div className="p-4 sm:p-5 space-y-4">
          {CATEGORIES.map((cat) => {
            const totals = categoryTotals?.[cat.key] || { videoCount: 0, totalDuration: 0 };
            const watched = user.categoryWatchTime?.[cat.key] || 0;
            const completed = user.categoryCompletedCount?.[cat.key] || 0;
            const catVideos = user.categoryVideoCount?.[cat.key] || 0;
            const totalVideoCnt = totals.videoCount || 0;
            const totalDur = totals.totalDuration || 0;

            const completionPct = totalVideoCnt > 0 ? (completed / totalVideoCnt) * 100 : 0;
            const timePct = totalDur > 0 ? Math.min(100, (watched / totalDur) * 100) : 0;

            const hasData = catVideos > 0 || watched > 0;

            const mainPct = totalDur > 0 ? timePct : completionPct;

            return (
              <div
                key={cat.key}
                className={`rounded-xl border p-4 sm:p-5 transition-opacity ${cat.card} ${!hasData ? "opacity-50" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <CircularProgress pct={mainPct} color={cat.accent} />
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                      {totalDur > 0 ? "İzleme" : "Tamamlama"}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${cat.badge}`}>
                        {cat.label}
                      </span>
                      {!hasData && (
                        <span className="text-xs text-gray-400 dark:text-gray-500">Veri yok</span>
                      )}
                    </div>

                    {/* Tamamlanan video sayacı */}
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {completed}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        / {totalVideoCnt} video tamamlandı
                      </span>
                    </div>

                    {/* Video tamamlama progress bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>Video Tamamlama</span>
                        <span className="font-medium" style={{ color: cat.accent }}>
                          {Math.round(completionPct)}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all duration-700 ${cat.bar}`}
                          style={{ width: `${completionPct}%` }}
                        />
                      </div>
                    </div>

                    {/* İzleme süresi progress bar */}
                    <div>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>İzleme Süresi</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {formatDuration(watched)}
                          {totalDur > 0 && (
                            <span className="text-gray-400 font-normal"> / {formatDuration(totalDur)}</span>
                          )}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-700 opacity-60 ${cat.bar}`}
                          style={{ width: `${timePct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function VideoStatsPanel() {
  const [summary, setSummary] = React.useState(null);
  const [videoStats, setVideoStats] = React.useState([]);
  const [viewerStats, setViewerStats] = React.useState([]);
  const [categoryTotals, setCategoryTotals] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [viewerFilter, setViewerFilter] = React.useState("");
  const [videoPageSize, setVideoPageSize] = React.useState(20);
  const [videoPage, setVideoPage] = React.useState(1);
  const [detailUser, setDetailUser] = React.useState(null);

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
      setCategoryTotals(data.categoryTotals || {});
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

  const totalVideoRows = filteredVideoStats.length;
  const totalVideoPages = Math.max(1, Math.ceil(totalVideoRows / videoPageSize));
  const paginatedVideoStats = React.useMemo(() => {
    const start = (videoPage - 1) * videoPageSize;
    return filteredVideoStats.slice(start, start + videoPageSize);
  }, [filteredVideoStats, videoPage, videoPageSize]);

  React.useEffect(() => {
    setVideoPage(1);
  }, [viewerFilter, videoPageSize]);

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
                  <th className="px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-400">
                    Kategori Bazlı Süre
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 dark:text-gray-400">
                    Tamamlanan
                  </th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600 dark:text-gray-400">
                    İzlenen Video
                  </th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-800">
                {filteredViewerStats.map((v) => (
                  <tr
                    key={String(v._id)}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors"
                  >
                    <td
                      className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100 cursor-pointer"
                      onClick={() => setViewerFilter(v.name || "")}
                    >
                      {v.name || (
                        <span className="text-gray-400 italic">İsimsiz</span>
                      )}
                    </td>
                    <td
                      className="px-4 py-3 text-right text-purple-700 dark:text-purple-400 font-semibold cursor-pointer"
                      onClick={() => setViewerFilter(v.name || "")}
                    >
                      {formatDuration(v.totalWatchTime)}
                    </td>
                    <td className="px-4 py-3">
                      {v.categoryWatchTime &&
                      Object.keys(v.categoryWatchTime).length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {["Mentörlük", "MYK Koç Seviye 6", "Eğitim Uzmanlığı"].map(
                            (cat) => {
                              const sec = v.categoryWatchTime[cat] || 0;
                              if (sec <= 0) return null;
                              const label =
                                cat === "MYK Koç Seviye 6" ? "Koç Sev. 6" : cat;
                              return (
                                <span
                                  key={cat}
                                  className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700/60 px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300"
                                  title={`${cat}: ${formatDuration(sec)}`}
                                >
                                  {label}: {formatDuration(sec)}
                                </span>
                              );
                            }
                          )}
                          {(v.categoryWatchTime["Diğer"] || 0) > 0 && (
                            <span
                              className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700/60 px-2 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-400"
                              title={`Diğer: ${formatDuration(v.categoryWatchTime["Diğer"])}`}
                            >
                              Diğer: {formatDuration(v.categoryWatchTime["Diğer"])}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">
                        {v.completedCount}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600 dark:text-gray-400">
                      {v.videoCount}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => setDetailUser(v)}
                        className="inline-flex items-center gap-1 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/40 px-2.5 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                      >
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Detay
                      </button>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              Video Bazlı İstatistikler
              {viewerFilter && (
                <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                  — &ldquo;{viewerFilter}&rdquo; izleyenlerin videoları (
                  {filteredVideoStats.length})
                </span>
              )}
            </h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="whitespace-nowrap">Sayfa başına:</span>
                <select
                  value={videoPageSize}
                  onChange={(e) => setVideoPageSize(Number(e.target.value))}
                  className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </label>
              {totalVideoPages > 1 && (
                <div className="flex items-center gap-1 text-sm">
                  <button
                    onClick={() => setVideoPage((p) => Math.max(1, p - 1))}
                    disabled={videoPage <= 1}
                    className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Önceki
                  </button>
                  <span className="px-2 py-1.5 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    {((videoPage - 1) * videoPageSize) + 1} – {Math.min(videoPage * videoPageSize, totalVideoRows)} / {totalVideoRows}
                  </span>
                  <button
                    onClick={() => setVideoPage((p) => Math.min(totalVideoPages, p + 1))}
                    disabled={videoPage >= totalVideoPages}
                    className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Sonraki →
                  </button>
                </div>
              )}
            </div>
          </div>
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
                {paginatedVideoStats.map((v) => {
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

      {/* Kullanıcı ilerleme modalı */}
      {detailUser && (
        <CategoryProgressModal
          user={detailUser}
          categoryTotals={categoryTotals}
          onClose={() => setDetailUser(null)}
        />
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
