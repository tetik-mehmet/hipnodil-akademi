"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9D162] to-[#F28B82] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Image
            src="/hipnodilakademilogo.png"
            alt="Hipnodil Akademi"
            width={200}
            height={80}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Şifremi Unuttum
          </h2>
          <p className="text-gray-600 text-sm">
            E-posta adresinizi girin, size şifre yenileme bağlantısı gönderelim
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              E-posta Adresi
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9D162] focus:border-transparent outline-none transition-all"
              placeholder="ornek@email.com"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#F9D162] to-[#F28B82] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Gönderiliyor..." : "Şifre Yenileme Bağlantısı Gönder"}
          </button>

          {message && (
            <div
              className={`text-center text-sm p-3 rounded-lg ${
                message.includes("başarıyla")
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {message}
            </div>
          )}

          <div className="text-center">
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-[#F9D162] hover:text-[#F28B82] font-medium transition-colors"
            >
              ← Giriş sayfasına dön
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
