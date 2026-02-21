"use client";

import { useEffect } from "react";

export function extractVimeoId(src) {
  if (!src) return null;
  const match = src.match(/player\.vimeo\.com\/video\/(\d+)/);
  return match ? match[1] : null;
}

/**
 * Tüm Vimeo videoları için izleme ilerlemesini takip eder ve API'ye kaydeder.
 * - data-video-title ile video adı alınır; yoksa Vimeo API getVideoTitle() kullanılır
 * - visibilitychange ile sekme değişiminde kayıt yapılır
 * - lastPosition >= 3 iken de kayıt yapılır (kısa izlemeler de kayda geçer)
 */
export default function VideoProgressTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SAVE_INTERVAL_MS = 5_000; // 5 saniyede bir kaydet (daha erken ilk kayıt için)
    const saveOnHideFns = new Set();
    const cleanupFns = [];
    const boundVideoIds = new Set();

    const setupTracking = (iframe) => {
      const src = iframe.src || iframe.getAttribute("src") || "";
      const videoId = extractVimeoId(src);
      let videoTitle = iframe.getAttribute("data-video-title") || "";
      if (!videoId || boundVideoIds.has(videoId)) return;
      if (!window.Vimeo?.Player) return;

      try {
        const player = new window.Vimeo.Player(iframe);
        boundVideoIds.add(videoId);

        let lastPosition = 0;
        let totalDuration = 0;
        let prevSeconds = null;
        let accumulatedWatched = 0;
        let lastSaveAt = Date.now();
        let titleFetched = false;

        const saveProgress = (completed = false) => {
          // En az 3 sn izlendiyse veya tamamlandıysa veya izlenen süre varsa kaydet
          const hasWatched = accumulatedWatched > 0 || lastPosition >= 3 || completed;
          if (!hasWatched) return;

          const payload = {
            videoId,
            videoTitle: (videoTitle || "").trim(),
            lastPosition,
            totalDuration,
            watchedSeconds: accumulatedWatched > 0 ? accumulatedWatched : (completed ? lastPosition : Math.min(lastPosition, 1)),
            completed,
          };
          accumulatedWatched = 0;
          lastSaveAt = Date.now();
          fetch("/api/video-progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
          }).catch(() => {});
        };

        // data-video-title boşsa Vimeo API'den al
        if (!videoTitle.trim() && player.getVideoTitle) {
          player.getVideoTitle().then((t) => {
            if (t && typeof t === "string" && !titleFetched) {
              titleFetched = true;
              videoTitle = t.trim();
            }
          }).catch(() => {});
        }

        // Son kaldığı yerden devam
        fetch(`/api/video-progress?videoId=${videoId}`, { credentials: "include" })
          .then((r) => r.json())
          .then((data) => {
            const pos = data.progress?.lastPosition;
            if (pos && pos > 5) player.setCurrentTime(pos).catch(() => {});
          })
          .catch(() => {});

        const onTimeUpdate = ({ seconds, duration }) => {
          lastPosition = seconds;
          if (duration) totalDuration = duration;

          if (prevSeconds !== null && seconds > prevSeconds) {
            const delta = seconds - prevSeconds;
            if (delta > 0 && delta < 2) accumulatedWatched += delta;
          }
          prevSeconds = seconds;

          if (Date.now() - lastSaveAt >= SAVE_INTERVAL_MS) saveProgress(false);
        };

        const onEnded = () => {
          lastPosition = totalDuration;
          saveProgress(true);
          prevSeconds = null;
        };

        const onPause = () => saveProgress(false);

        player.on("timeupdate", onTimeUpdate);
        player.on("ended", onEnded);
        player.on("pause", onPause);

        const saveOnHide = () => saveProgress(false);
        saveOnHideFns.add(saveOnHide);

        cleanupFns.push(() => {
          saveOnHideFns.delete(saveOnHide);
          try {
            player.off("timeupdate", onTimeUpdate);
            player.off("ended", onEnded);
            player.off("pause", onPause);
          } catch (_e) {}
        });
      } catch (_e) {}
    };

    const setupAll = () => {
      document.querySelectorAll('iframe[src*="player.vimeo.com"]').forEach(setupTracking);
    };

    const onVisibilityChange = () => {
      if (document.hidden) [...saveOnHideFns].forEach((fn) => { try { fn(); } catch (_e) {} });
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      setupAll();
      if (attempts >= 20) clearInterval(interval);
    }, 300);

    const stopTimer = setTimeout(() => clearInterval(interval), 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cleanupFns.forEach((fn) => fn());
      saveOnHideFns.clear();
      boundVideoIds.clear();
    };
  }, []);

  return null;
}
