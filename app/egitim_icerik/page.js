"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EgitimIcerikPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Session cookie'sini kontrol et
        const response = await fetch("/api/auth/verify", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          // Auth başarısız, login sayfasına yönlendir
          router.replace("/login");
          // Browser history'yi temizle
          window.history.replaceState(null, "", "/login");
          // Sayfayı yenile
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Auth kontrolü başarısız:", error);
        router.replace("/login");
        window.history.replaceState(null, "", "/login");
        // Sayfayı yenile
        window.location.href = "/login";
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Loading durumu
  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Auth başarısız ise hiçbir şey gösterme
  if (!isAuthenticated) {
    return null;
  }
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Eğitim İçerikleri
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Videolar yakında eklenecek. Şimdilik örnek bir yerleşim
            görüyorsunuz.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="relative aspect-video bg-gray-100 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center ring-1 ring-gray-300">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
                <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-full bg-gray-900/80 text-white">
                  Yakında
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Örnek Video {index + 1}
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  Bu bir yer tutucu açıklamadır. Gerçek video yüklendiğinde bu
                  alan güncellenecek.
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Süre: -</span>
                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    disabled
                  >
                    İzle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
