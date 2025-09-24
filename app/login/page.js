"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Hata mesajını temizle
    setSuccess(false); // Başarı mesajını temizle
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Giriş başarısız");

      console.log("Giriş başarılı", data);
      setSuccess(true); // Başarı mesajını göster
      setIsLoading(false);

      // 2 saniye sonra role göre yönlendir
      const target = data?.redirectTo || "/egitim_icerik";
      setTimeout(() => {
        router.push(target);
      }, 2000);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8">
        {/* Logo ve Başlık */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 flex items-center justify-center mb-6">
            <Image
              src="/anahtar.gif"
              alt="Anahtar Logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Giriş Yap</h2>
          <p className="text-gray-700">
            Hesabınıza giriş yapmak için bilgilerinizi girin
          </p>
        </div>

        {/* Dikkat Çeken Uyarı */}
        <div className="rounded-2xl border border-[#F28B82]/30 bg-gradient-to-r from-[#F28B82]/10 via-[#F9D162]/10 to-[#F28B82]/10 p-4 sm:p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#F28B82] to-[#F9D162] text-white shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.75 6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0V8.25ZM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#F28B82]">
              Eğitim içeriğine erişebilmek için üye olup paket satın
              almalısınız.
            </p>
          </div>
        </div>

        {/* Başarı Mesajı */}
        {success && (
          <div className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-green-100 p-4 shadow-sm animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-green-800 mb-1">
                  Giriş Başarılı!
                </h3>
                <p className="text-sm text-green-700">
                  Hoş geldiniz! Eğitim içeriğinize yönlendiriliyorsunuz...
                </p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-3 w-full bg-green-200 rounded-full h-1.5">
              <div
                className="bg-green-500 h-1.5 rounded-full animate-pulse"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        )}

        {/* Hata Mesajı */}
        {error && (
          <div className="rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-red-100 p-4 shadow-sm animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                  <svg
                    className="h-5 w-5"
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
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-red-800 mb-1">
                  Giriş Başarısız
                </h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
              <button
                onClick={() => setError("")}
                className="flex-shrink-0 ml-2 text-red-400 hover:text-red-600 transition-colors"
              >
                <svg
                  className="h-5 w-5"
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
            </div>
          </div>
        )}

        {/* Form */}
        <div className="rounded-2xl bg-white/40 supports-[backdrop-filter]:bg-white/40 backdrop-blur-lg backdrop-saturate-150 ring-1 ring-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* E-posta Alanı */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                E-posta Adresi
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#F28B82] focus:border-[#F28B82] transition-colors duration-200"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            {/* Şifre Alanı */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Şifre
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#F28B82] focus:border-[#F28B82] transition-colors duration-200"
                  placeholder="Şifrenizi girin"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-500 hover:text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-500 hover:text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Hatırlama ve Şifremi Unuttum */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#F28B82] focus:ring-[#F28B82] border-gray-300 bg-white/50 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Beni hatırla
                </label>
              </div>
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-[#F9D162] hover:text-[#F28B82] transition-colors duration-200"
                >
                  Şifremi unuttum
                </Link>
              </div>
            </div>

            {/* Giriş Butonu */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[#F28B82] to-[#F9D162] hover:from-[#F28B82] hover:to-[#F9D162] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F28B82] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Giriş yapılıyor...
                  </div>
                ) : (
                  <>
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-white/90 group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Giriş Yap
                  </>
                )}
              </button>
            </div>

            {/* Kayıt Ol Linki */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Hesabınız yok mu?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                >
                  Kayıt olun
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Alt Bilgi */}
        <div className="text-center text-xs text-gray-500">
          <p>
            Giriş yaparak{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Kullanım Koşulları
            </a>{" "}
            ve{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Gizlilik Politikası
            </a>
            &apos;nı kabul etmiş olursunuz.
          </p>
        </div>
      </div>
    </div>
  );
}
