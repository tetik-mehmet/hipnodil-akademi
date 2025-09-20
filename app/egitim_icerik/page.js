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
  return (
    <div className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Eğitim İçerikleri
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Vimeo üzerinden eğitim videolarınızı izleyebilirsiniz.
          </p>
        </header>

        {/* Özlem İsa Hocayla MYK Temel Koçluk Kategorisi */}
        <div className="mb-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Özlem İsa Hocayla MYK Temel Koçluk
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              MYK (Mesleki Yeterlilik Kurumu) Temel Koçluk eğitimleri
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 4. Grup 2. Canlı Yayın */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://player.vimeo.com/video/1108439414?h=4c5782ec09&badge=0&autopause=0&player_id=0&app_id=58479"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 4. GRUP 2. CANLI YAYIN"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  4. Grup 2. Canlı Yayın
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                  Video kontrollerini kullanarak oynatabilir, duraklatabilir ve
                  ses seviyesini ayarlayabilirsiniz.
                </p>
              </div>
            </div>

            {/* 4. Grup 1. Canlı Yayın */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://player.vimeo.com/video/1107088158?h=12dadfe3be&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 4. GRUP 1. CANLI YAYIN"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  4. Grup 1. Canlı Yayın
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                  Video kontrollerini kullanarak oynatabilir, duraklatabilir ve
                  ses seviyesini ayarlayabilirsiniz.
                </p>
              </div>
            </div>

            {/* 4. Grup 3. Canlı Yayın */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://player.vimeo.com/video/1109959757?h=ee385d21e5&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 4. GRUP 3. CANLI YAYIN"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  4. Grup 3. Canlı Yayın
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                  Video kontrollerini kullanarak oynatabilir, duraklatabilir ve
                  ses seviyesini ayarlayabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
