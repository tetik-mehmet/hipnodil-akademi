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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 mb-6 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  Özlem İsa Hocayla MYK Temel Koçluk
                </h2>
                <p className="text-blue-700 text-sm sm:text-base font-medium">
                  MYK (Mesleki Yeterlilik Kurumu) Temel Koçluk eğitimleri
                </p>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/50">
              <p className="text-gray-700 text-sm">
                📚 Bu kategoride MYK standartlarına uygun temel koçluk
                eğitimleri bulunmaktadır. Canlı yayınlar ve konu videoları olmak
                üzere iki alt kategoride düzenlenmiştir.
              </p>
            </div>
          </div>

          {/* Canlı Yayınlar Alt Kategorisi */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-4 sm:p-6 mb-6 border border-purple-100">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    Canlı Yayınlar
                  </h3>
                  <p className="text-purple-700 text-sm font-medium">
                    Grup canlı yayın kayıtları
                  </p>
                </div>
              </div>
            </div>

            {/* Canlı Yayın Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

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
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
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
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 2. Grup 2. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1038546068?h=5f8306430d&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 2. GRUP 2. CANLI YAYIN"
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
                    2. Grup 2. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 3. Grup 1. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1050778313?h=44912a6d98&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 3. GRUP 1. CANLI YAYIN"
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
                    3. Grup 1. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 3. Grup 2. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1051543476?h=d3844b7a01&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 3. GRUP 2. CANLI YAYIN"
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
                    3. Grup 2. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 3. Grup 3. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1055860559?h=d6eb41fc64&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 3. GRUP 3. CANLI YAYIN"
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
                    3. Grup 3. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 3. Grup 4. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1055968867?h=cbc1875238&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 3. GRUP 4. CANLI YAYIN"
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
                    3. Grup 4. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 2. Grup 7. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1047096305?h=8861ae5309&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 2. GRUP 7. CANLI YAYIN"
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
                    2. Grup 7. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 2. Grup 3. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1039635682?h=88361be825&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 2. GRUP 3. CANLI YAYIN"
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
                    2. Grup 3. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 2. Grup 4. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1039640482?h=aa4310482e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 2. GRUP 4. CANLI YAYIN"
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
                    2. Grup 4. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 2. Grup 5. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1042126637?h=857d53ffda&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 2. GRUP 5. CANLI YAYIN"
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
                    2. Grup 5. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* 2. Grup 6. Canlı Yayın */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1044269233?h=c273ba92e0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 2. GRUP 6. CANLI YAYIN"
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
                    2. Grup 6. Canlı Yayın
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Konu Videoları Alt Kategorisi */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 sm:p-6 mb-6 border border-orange-100">
              <div className="flex items-center mb-3">
                <div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    Konu Videoları
                  </h3>
                  <p className="text-orange-700 text-sm font-medium">
                    Spesifik koçluk konuları ve teknikleri
                  </p>
                </div>
              </div>
            </div>

            {/* Konu Videoları Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* İlk Görüşme ve Görüşme İpuçları */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045320297?h=5fecf25e5e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 55 - İLK GÖRÜŞME VE GÖRÜŞME İPUÇLARI"
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
                    İlk Görüşme ve Görüşme İpuçları
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Koçluk Modelleri */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045320529?h=709285bc46&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 54 - KOÇLUK MODELLERİ"
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
                    Koçluk Modelleri
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Koçluk Süreci ve Koçluk Modelleri */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045316586?h=43e4c94c40&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 53 - KOÇLUK SÜRECİ VE KOÇLUK MODELLERİ"
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
                    Koçluk Süreci ve Koçluk Modelleri
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Etkin Geri Bildirim ve Güçlü Ricalar */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045316936?h=ef0acb4811&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 52 - ETKİN GERİ BİLDİRİM VE GÜÇLÜ RİCALAR"
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
                    Etkin Geri Bildirim ve Güçlü Ricalar
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* GROW Model */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045317302?h=32d14aa8f7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 51 - GROW MODEL"
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
                    GROW Model
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Güçlü Sorular SMART Model ve GROW Model */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045317647?h=042685201d&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 50 - GÜÇLÜ SORULAR SMART MODEL VE GROW MODEL"
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
                    Güçlü Sorular SMART Model ve GROW Model
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Yargılarımız ve Güçlü Sorular */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045318381?h=78717c16ff&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 49 - YARGILARIMIZ VE GÜÇLÜ SORULAR"
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
                    Yargılarımız ve Güçlü Sorular
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Hareket Geçirme ve Koçluk Görüşmelerinde Dikkat Etmemiz Gerekenler */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045318800?h=8b1de31891&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 48 - HAREKETE GEÇİRME VE KOÇLUK GÖRUSMELERİNDE DİKKAT ETMEMİZ GEREKENLER"
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
                    Hareket Geçirme ve Koçluk Görüşmelerinde Dikkat Etmemiz
                    Gerekenler
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Koçluk Teknikleri */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045319203?h=4837e6e582&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 47 - KOÇLUK TEKNİKLERİ"
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
                    Koçluk Teknikleri
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Meta Programlar 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045319667?h=ba290ad75e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 46 - META PROGRAMLAR 2"
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
                    Meta Programlar 2
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>

              {/* Meta Programlar 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1045320001?h=a520c57395&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="ÖZLEM İSA HOCAYLA MYK TEMEL KOÇLUK - 45 - META PROGRAMLAR 1"
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
                    Meta Programlar 1
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bu video Vimeo platformundan gömülü olarak yüklenmektedir.
                    Video kontrollerini kullanarak oynatabilir, duraklatabilir
                    ve ses seviyesini ayarlayabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Koçluk Pratikleri Kategorisi */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-6 border border-green-100">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                Koçluk Pratikleri
              </h2>
              <p className="text-green-700 text-sm sm:text-base font-medium">
                Özlem İsa Hocayla Koçluk Pratikleri Canlı Yayınları
              </p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/50">
            <p className="text-gray-700 text-sm">
              🎯 Bu kategoride koçluk pratikleri ve uygulamalı eğitimler
              bulunmaktadır. Tüm videolar canlı yayın kayıtlarından
              oluşmaktadır.
            </p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Koçluk Pratikleri 1. Canlı */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://player.vimeo.com/video/1062803309?h=3d37e6ab1d&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ÖZLEM İSA HOCAYLA KOÇLUK PRATİKLERİ 1. CANLI"
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
                Koçluk Pratikleri 1. Canlı
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Bu video Vimeo platformundan gömülü olarak yüklenmektedir. Video
                kontrollerini kullanarak oynatabilir, duraklatabilir ve ses
                seviyesini ayarlayabilirsiniz.
              </p>
            </div>
          </div>

          {/* Koçluk Pratikleri 2. Canlı */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://player.vimeo.com/video/1064993177?h=81e0634be8&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ÖZLEM İSA HOCAYLA KOÇLUK PRATİKLERİ 2. CANLI"
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
                Koçluk Pratikleri 2. Canlı
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Bu video Vimeo platformundan gömülü olarak yüklenmektedir. Video
                kontrollerini kullanarak oynatabilir, duraklatabilir ve ses
                seviyesini ayarlayabilirsiniz.
              </p>
            </div>
          </div>

          {/* Koçluk Pratikleri 3. Canlı */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://player.vimeo.com/video/1068075157?h=31396b4bf7&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ÖZLEM İSA HOCAYLA KOÇLUK PRATİKLERİ 3. CANLI"
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
                Koçluk Pratikleri 3. Canlı
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Bu video Vimeo platformundan gömülü olarak yüklenmektedir. Video
                kontrollerini kullanarak oynatabilir, duraklatabilir ve ses
                seviyesini ayarlayabilirsiniz.
              </p>
            </div>
          </div>

          {/* Koçluk Pratikleri 4. Canlı */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative aspect-video w-full">
              <iframe
                src="https://player.vimeo.com/video/1069585842?h=0f1c96eefe&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ÖZLEM İSA HOCAYLA KOÇLUK PRATİKLERİ 4. CANLI"
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
                Koçluk Pratikleri 4. Canlı
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Bu video Vimeo platformundan gömülü olarak yüklenmektedir. Video
                kontrollerini kullanarak oynatabilir, duraklatabilir ve ses
                seviyesini ayarlayabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
