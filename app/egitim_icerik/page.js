"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EgitimIcerikPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [profileEmail, setProfileEmail] = useState("");
  const [profilePhone, setProfilePhone] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [saveError, setSaveError] = useState("");
  const [birthDate, setBirthDate] = useState("");

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
          setProfileEmail(data.user?.email || "");
          try {
            const meRes = await fetch("/api/user", { credentials: "include" });
            if (meRes.ok) {
              const meData = await meRes.json();
              setProfileEmail(meData?.user?.email || data.user?.email || "");
              setProfilePhone(meData?.user?.phone || "");
              setBirthDate(
                meData?.user?.birthDate
                  ? new Date(meData.user.birthDate).toISOString().slice(0, 10)
                  : ""
              );
            }
          } catch (e) {
            // sessiz geç
          }
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

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setSaveMessage("");
    setSaveError("");
    setIsSaving(true);
    try {
      const payload = {};
      if (profileEmail && profileEmail !== (user?.email || "")) {
        payload.email = profileEmail;
      }
      if (
        typeof profilePhone === "string" &&
        profilePhone.replace(/\D/g, "") !== (user?.phone || "")
      ) {
        payload.phone = profilePhone;
      }
      if (birthDate) {
        const prev = user?.birthDate
          ? new Date(user.birthDate).toISOString().slice(0, 10)
          : "";
        if (birthDate !== prev) {
          payload.birthDate = birthDate;
        }
      } else if (user?.birthDate) {
        // kullanıcı tarihi temizlerse null gönder
        payload.birthDate = null;
      }
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Güncelleme başarısız");
      }
      setSaveMessage("Profil başarıyla güncellendi");
      setUser((prev) => ({
        ...(prev || {}),
        email: data?.user?.email || profileEmail,
        phone: data?.user?.phone ?? profilePhone,
      }));
    } catch (err) {
      setSaveError(err?.message || "Bir hata oluştu");
    } finally {
      setIsSaving(false);
      setTimeout(() => {
        setSaveMessage("");
      }, 2500);
    }
  };

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
          <div className="inline-block w-fit bg-gradient-to-r from-[#F28B82] to-[#FFA07A] rounded-2xl p-6 sm:p-8 mb-6 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Hoşgeldiniz, {user?.firstName} {user?.lastName}! 👋
            </h1>
          </div>
        </header>
        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Profil Bilgileriniz
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  E-posta telefon numaranızı ve doğum tarihinizi
                  güncelleyebilirsiniz.
                </p>
              </div>
            </div>
            {saveMessage && (
              <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-green-700 text-sm">
                {saveMessage}
              </div>
            )}
            {saveError && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
                {saveError}
              </div>
            )}
            {/* Form içi dekoratif/ipuçları görseli */}
            <div className="sm:col-span-2 mb-4">
              <div className="w-full flex justify-end">
                <div className="relative">
                  <Image
                    src="/file-info.gif"
                    alt="Bilgi"
                    width={120}
                    height={120}
                    className="rounded-xl shadow-sm ring-1 ring-gray-200"
                    priority
                  />
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSaveProfile}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ad
                </label>
                <input
                  disabled
                  value={user?.firstName || ""}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-700 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Soyad
                </label>
                <input
                  disabled
                  value={user?.lastName || ""}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-700 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  value={profileEmail}
                  onChange={(e) => setProfileEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ornek@mail.com"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  value={profilePhone}
                  onChange={(e) => setProfilePhone(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="5xx xxx xx xx"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Doğum Tarihi
                </label>
                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className={`inline-flex items-center rounded-lg px-5 py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                    isSaving
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
                  }`}
                >
                  {isSaving ? "Kaydediliyor..." : "Kaydet"}
                </button>
              </div>
            </form>
          </div>

          {/* Eğitimler başlığı */}
          <div className="mb-4 sm:mb-6 mt-2">
            <h2 className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Eğitimlerim
            </h2>
            <div className="mt-2 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          </div>

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
