"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EgitimIcerikPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Session cookie'sini kontrol et
        const response = await fetch("/api/auth/verify", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUser(data.user);
          setCourses(data.user?.courses || []);
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

  const canAccess = (slug) => courses.includes(slug);

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
  return (
    <div className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-10">
          <div className="bg-gradient-to-r from-[#F28B82] to-[#FFA07A] rounded-2xl p-6 sm:p-8 mb-6 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Hoşgeldiniz, {user?.firstName} {user?.lastName}! 👋
            </h1>
          </div>
        </header>
        <section className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              MYK Koç Mentörlük
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              MYK Koç Seviye 6 sınavına hazırlık için mentörlük desteği.
              Yapılandırılmış oturumlar, uygulamalı çalışmalar ve sınav odaklı
              geri bildirimlerle sürecinizi hızlandırın.
            </p>
            <button
              type="button"
              onClick={() => router.push("/egitim_icerik/mentorluk_kursu")}
              disabled={!canAccess("mentorluk_kursu")}
              className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors w-full sm:w-auto ${
                canAccess("mentorluk_kursu")
                  ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              {canAccess("mentorluk_kursu") ? "Eğitime Git" : "Erişiminiz Yok"}
            </button>
          </div>
          {/* Yeni Kart: MYK Koç Seviye 6 Hazırlık Eğitimi */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 mt-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              MYK Koç Seviye 6 Hazırlık Eğitimi
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              MYK Koç (Seviye 6) belgelendirme sınavına kapsamlı hazırlık:
              teori, uygulama örnekleri, deneme sınavları ve performans geri
              bildirimleri.
            </p>
            <button
              type="button"
              onClick={() => router.push("/egitim_icerik/seviye6_kursu")}
              disabled={!canAccess("seviye6_kursu")}
              className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors w-full sm:w-auto ${
                canAccess("seviye6_kursu")
                  ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              {canAccess("seviye6_kursu") ? "Eğitime Git" : "Erişiminiz Yok"}
            </button>
          </div>
        </section>
      </div>
      {/* İçerik kaldırıldı */}
    </div>
  );
}
