"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    tcNumber: "",
    phone: "",
    email: "",
    education: "",
    password: "",
    // Eski backend uyumluluğu için agreement alanını koruyoruz (iki onay true ise true)
    agreement: false,
    kvkkConsent: false,
    contractConsent: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [showKvkk, setShowKvkk] = useState(false);
  const [showContract, setShowContract] = useState(false);

  // Sayfa yüklendiğinde giriş animasyonlarını tetikle
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // Telefon alanı: sadece rakam, max 10 hane
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        phone: digitsOnly,
      }));
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
      return;
    }

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0] || null,
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => {
        const next = { ...prev, [name]: checked };
        // İki onay kutusundan herhangi biri değiştiğinde combined agreement flag'ini güncelle
        const kvkk = name === "kvkkConsent" ? checked : next.kvkkConsent;
        const contract =
          name === "contractConsent" ? checked : next.contractConsent;
        next.agreement = Boolean(kvkk && contract);
        return next;
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Hata mesajını temizle
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "İsim gereklidir";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Soyisim gereklidir";
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "Doğum tarihi gereklidir";
    }

    if (!formData.tcNumber.trim()) {
      newErrors.tcNumber = "TC Kimlik numarası gereklidir";
    } else if (!/^\d{11}$/.test(formData.tcNumber)) {
      newErrors.tcNumber = "TC Kimlik numarası 11 haneli olmalıdır";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon numarası gereklidir";
    } else if (!/^5\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Telefon numarası 5xxxxxxxxx formatında olmalıdır";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-posta adresi gereklidir";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz";
    }

    if (!formData.education) {
      newErrors.education = "Eğitim durumu seçilmelidir";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Şifre gereklidir";
    } else if (formData.password.length < 6) {
      newErrors.password = "Şifre en az 6 karakter olmalıdır";
    }

    if (!formData.kvkkConsent) {
      newErrors.kvkkConsent = "KVKK metnini onaylamanız gereklidir";
    }

    if (!formData.contractConsent) {
      newErrors.contractConsent =
        "Kullanıcı sözleşmesini onaylamanız gereklidir";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setServerError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Kayıt başarısız");
      router.push("/login?message=Kayıt başarılı");
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Kayıt hatası:", error);
      }
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Dekoratif arkaplan blur daireler */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />

      <div
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <div className="relative rounded-3xl bg-white/70 p-6 sm:p-10 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl">
          <div className="absolute inset-x-0 -top-1 mx-auto h-1 w-40 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500" />
          <h1 className="mb-2 bg-gradient-to-r from-slate-900 via-indigo-700 to-sky-600 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-4xl">
            Üyelik Formu
          </h1>
          <p className="mb-8 text-center text-sm text-slate-600">
            Bilgilerinizi doldurun, topluluğumuza katılın.
          </p>

          {serverError && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-red-100 p-4 shadow-sm transition-all duration-500">
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
                    İşlem gerçekleştirilemedi
                  </h3>
                  <p className="text-sm text-red-700">{serverError}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setServerError("")}
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

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {/* İsim */}
              <div
                className={`sm:col-span-1 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "80ms" }}
              >
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  İsim
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="İsim"
                  className={`w-full rounded-xl border bg-white/60 px-4 py-3 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:bg-white/80 focus:shadow-lg focus:ring-4 focus:ring-indigo-200/60 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Soyisim */}
              <div
                className={`sm:col-span-1 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "120ms" }}
              >
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Soyisim
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Soyisim"
                  className={`w-full rounded-xl border bg-white/60 px-4 py-3 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:bg-white/80 focus:shadow-lg focus:ring-4 focus:ring-indigo-200/60 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>

              {/* Doğum Tarihi */}
              <div
                className={`sm:col-span-1 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "160ms" }}
              >
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Doğum Tarihi
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border bg-white/60 px-4 py-3 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:bg-white/80 focus:shadow-lg focus:ring-4 focus:ring-indigo-200/60 ${
                    errors.birthDate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.birthDate && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.birthDate}
                  </p>
                )}
              </div>

              {/* TC Kimlik Numarası */}
              <div
                className={`sm:col-span-1 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label
                  htmlFor="tcNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  TC Kimlik Numaranız
                </label>
                <input
                  type="text"
                  id="tcNumber"
                  name="tcNumber"
                  value={formData.tcNumber}
                  onChange={handleInputChange}
                  placeholder="TC Kimlik Numaranız"
                  maxLength="11"
                  className={`w-full rounded-xl border bg-white/60 px-4 py-3 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:bg-white/80 focus:shadow-lg focus:ring-4 focus:ring-indigo-200/60 ${
                    errors.tcNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.tcNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.tcNumber}</p>
                )}
              </div>

              {/* Telefon */}
              <div
                className={`sm:col-span-1 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "240ms" }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telefon <span className="text-gray-500">(5xxxxXXXXX)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefon"
                  maxLength="10"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`w-full rounded-xl border bg-white/60 px-4 py-3 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:bg-white/80 focus:shadow-lg focus:ring-4 focus:ring-indigo-200/60 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* E-posta */}
              <div
                className={`sm:col-span-1 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "280ms" }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-Posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-Posta Adresiniz"
                  className={`w-full rounded-xl border bg-white/60 px-4 py-3 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:bg-white/80 focus:shadow-lg focus:ring-4 focus:ring-indigo-200/60 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Eğitim Durumu */}
              <div
                className={`sm:col-span-2 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "320ms" }}
              >
                <label
                  htmlFor="education"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Eğitim Durumu
                </label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border bg-white/60 px-4 py-3 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 focus:-translate-y-0.5 focus:bg-white/80 focus:shadow-lg focus:ring-4 focus:ring-indigo-200/60 ${
                    errors.education ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Seçiniz</option>
                  <option value="ilkokul">İlkokul</option>
                  <option value="ortaokul">Ortaokul</option>
                  <option value="lise">Lise</option>
                  <option value="onlisans">Ön Lisans</option>
                  <option value="lisans">Lisans</option>
                  <option value="yukseklisans">Yüksek Lisans</option>
                  <option value="doktora">Doktora</option>
                </select>
                {errors.education && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.education}
                  </p>
                )}
              </div>

              {/* Şifre */}
              <div
                className={`sm:col-span-2 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "360ms" }}
              >
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kullanıcı Şifreniz
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Kullanıcı Şifreniz"
                  className={`w-full rounded-xl border bg-white/60 px-4 py-3 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:bg-white/80 focus:shadow-lg focus:ring-4 focus:ring-indigo-200/60 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* KVKK Onayı */}
              <div
                className={`sm:col-span-2 rounded-xl border border-slate-200/70 bg-white/50 p-4 backdrop-blur-sm transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="kvkkConsent"
                    name="kvkkConsent"
                    checked={formData.kvkkConsent}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="kvkkConsent"
                      className="text-sm text-gray-700"
                    >
                      KVKK Aydınlatma Metnini okudum, onaylıyorum
                    </label>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => setShowKvkk((s) => !s)}
                        className="text-xs font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
                      >
                        {showKvkk ? "Metni gizle" : "Metni gör"}
                      </button>
                    </div>
                  </div>
                </div>
                {errors.kvkkConsent && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.kvkkConsent}
                  </p>
                )}
                {/* KVKK metni modalda gösterilir */}
              </div>

              {/* Kullanıcı Sözleşmesi Onayı */}
              <div
                className={`sm:col-span-2 rounded-xl border border-slate-200/70 bg-white/50 p-4 backdrop-blur-sm transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "440ms" }}
              >
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="contractConsent"
                    name="contractConsent"
                    checked={formData.contractConsent}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="contractConsent"
                      className="text-sm text-gray-700"
                    >
                      Kullanıcı Sözleşmesini okudum, onaylıyorum
                    </label>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => setShowContract((s) => !s)}
                        className="text-xs font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
                      >
                        {showContract ? "Sözleşmeyi gizle" : "Sözleşmeyi gör"}
                      </button>
                    </div>
                  </div>
                </div>
                {errors.contractConsent && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.contractConsent}
                  </p>
                )}
                {/* Kullanıcı sözleşmesi metni modalda gösterilir */}
              </div>

              {/* Gönder Butonu */}
              <div
                className={`sm:col-span-2 transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "440ms" }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-500 hover:via-orange-400 hover:to-amber-400 focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
                  {isSubmitting ? "Gönderiliyor..." : "GÖNDER"}
                </button>
              </div>
            </form>

            {/* Sağ tarafta büyük GIF görseli */}
            <div
              className={`order-first sm:order-none md:order-none transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              <div className="relative mx-auto w-full overflow-hidden">
                <div className="relative aspect-[4/5] sm:aspect-[4/5] md:aspect-[4/5] lg:aspect-[4/5]">
                  <Image
                    src="/uyeol.gif"
                    alt="Üye ol görseli"
                    fill
                    unoptimized
                    priority
                    className="object-contain"
                    sizes="(min-width: 1024px) 520px, (min-width: 768px) 420px, 100vw"
                  />
                </div>
                {/* Logo + verified şeridi */}
                <div className="mt-4 flex w-full items-center justify-center gap-3">
                  <Image
                    src="/hipnodilakademilogo.png"
                    alt="Hipnodil Akademi Logo"
                    width={180}
                    height={44}
                    className="h-10 w-auto object-contain"
                    priority
                  />
                  <Image
                    src="/verified.gif"
                    alt="Onaylandı"
                    width={28}
                    height={28}
                    unoptimized
                    className="h-7 w-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODALS */}
      {(showKvkk || showContract) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => {
              setShowKvkk(false);
              setShowContract(false);
            }}
          />
          <div className="relative z-10 w-full max-w-3xl max-h-[80vh] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
              <h3 className="text-base font-semibold text-slate-800">
                {showKvkk ? "KVKK Aydınlatma Metni" : "Kullanıcı Sözleşmesi"}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setShowKvkk(false);
                  setShowContract(false);
                }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Kapat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto p-5 text-sm text-slate-700 max-h-[70vh]">
              {showKvkk && (
                <div>
                  <p className="font-semibold mb-2">1. Veri Sorumlusu</p>
                  <p className="mb-3">
                    6698 sayılı Kişisel Verilerin Korunması Kanunu
                    (&quot;KVKK&quot;) uyarınca, kişisel verileriniz Hipnodil
                    Akademi tarafından veri sorumlusu sıfatıyla işlenmektedir.
                  </p>
                  <p className="font-semibold mb-2">
                    2. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi
                  </p>
                  <p className="mb-2">Kişisel verileriniz,</p>
                  <ul className="list-disc pl-5 mb-2 space-y-1">
                    <li>Web sitemizdeki kayıt formu,</li>
                    <li>E-posta veya telefon aracılığıyla iletişim,</li>
                    <li>Eğitim satın alma veya ödeme işlemleri,</li>
                    <li>
                      Sistem kullanım verileri (giriş/çıkış kayıtları, IP
                      bilgisi, cihaz bilgisi)
                    </li>
                  </ul>
                  <p className="mb-2">
                    gibi yollarla otomatik veya manuel yöntemlerle toplanabilir.
                  </p>
                  <p className="mb-2">
                    Verileriniz şu hukuki sebeplerle işlenmektedir:
                  </p>
                  <ul className="list-disc pl-5 mb-2 space-y-1">
                    <li>Sözleşmenin kurulması veya ifası,</li>
                    <li>Hukuki yükümlülüklerin yerine getirilmesi,</li>
                    <li>Açık rızanızın alınması,</li>
                    <li>Meşru menfaatlerin korunması.</li>
                  </ul>
                  <p className="font-semibold mb-2">
                    3. İşlenen Kişisel Veriler
                  </p>
                  <ul className="list-disc pl-5 mb-2 space-y-1">
                    <li>Kimlik bilgisi (ad, soyad)</li>
                    <li>İletişim bilgileri (e-posta, telefon numarası)</li>
                    <li>Kullanıcı adı ve şifre</li>
                    <li>Eğitim ve kullanım geçmişi</li>
                    <li>
                      Ödeme bilgileri (sadece ödeme sağlayıcısı aracılığıyla,
                      sistemimizde saklanmaz)
                    </li>
                    <li>IP adresi ve oturum bilgileri</li>
                  </ul>
                  <p className="font-semibold mb-2">
                    4. Kişisel Verilerin İşlenme Amaçları
                  </p>
                  <ul className="list-disc pl-5 mb-2 space-y-1">
                    <li>Üyelik oluşturma ve giriş işlemlerinin sağlanması</li>
                    <li>Eğitim içeriklerine erişim ve ilerleme takibi</li>
                    <li>Faturalandırma ve ödeme süreçlerinin yürütülmesi</li>
                    <li>Kullanıcı desteği sağlanması</li>
                    <li>Platform güvenliği ve performansının izlenmesi</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>
                      Tarafınıza özel kampanya, duyuru ve bilgilendirmelerin
                      iletilmesi
                    </li>
                  </ul>
                  <p className="font-semibold mb-2">
                    5. Kişisel Verilerin Aktarımı
                  </p>
                  <p className="mb-2">
                    Kişisel verileriniz, KVKK ve ilgili mevzuata uygun şekilde:
                  </p>
                  <ul className="list-disc pl-5 mb-2 space-y-1">
                    <li>
                      Hizmet aldığımız bilişim altyapısı firmalarına (örneğin
                      hosting veya e-posta hizmeti),
                    </li>
                    <li>Yasal zorunluluk durumunda resmi kurumlara,</li>
                  </ul>
                  <p className="mb-2">
                    aktarılabilir. Hiçbir koşulda verileriniz izniniz olmadan
                    üçüncü şahıslara satılmaz veya pazarlama amacıyla
                    paylaşılmaz.
                  </p>
                  <p className="font-semibold mb-2">
                    6. Kişisel Verilerin Saklanma Süresi
                  </p>
                  <p className="mb-2">
                    Kişisel verileriniz, yasal yükümlülükler ve hizmet süresi
                    boyunca saklanır. Üyeliğinizi sonlandırmanız durumunda,
                    ilgili mevzuat gereği 3 yıl süreyle saklanıp ardından imha
                    edilir.
                  </p>
                  <p className="font-semibold mb-2">7. Haklarınız</p>
                  <p className="mb-2">
                    KVKK madde 11 uyarınca, aşağıdaki haklara sahipsiniz:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>
                      Kişisel verilerinizin işlenip işlenmediğini öğrenme,
                    </li>
                    <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                    <li>Verilerin işlenme amacını öğrenme,</li>
                    <li>
                      Eksik veya yanlış işlenmiş verilerin düzeltilmesini
                      isteme,
                    </li>
                    <li>
                      Silinmesini veya anonim hale getirilmesini talep etme,
                    </li>
                    <li>
                      İşlemenin kanuna aykırı olması hâlinde zararın
                      giderilmesini talep etme.
                    </li>
                  </ul>
                  <p className="mb-1">Bu haklarınızı,</p>
                  <p className="mb-1">
                    📩{" "}
                    <span className="font-medium">
                      hipnodilakademi@gmail.com
                    </span>
                  </p>
                  <p className="">
                    adresine e-posta göndererek kullanabilirsiniz.
                  </p>
                </div>
              )}
              {showContract && (
                <div>
                  <p className="font-semibold mb-2">1. Taraflar</p>
                  <p className="mb-3">
                    İşbu sözleşme, www.hipnodilakademi.net adresinde faaliyet
                    gösteren Hipnodil Akademi ile siteye üye olan kullanıcı
                    arasında düzenlenmiştir.
                  </p>
                  <p className="font-semibold mb-2">2. Sözleşmenin Konusu</p>
                  <p className="mb-3">
                    Bu sözleşme, kullanıcıların Hipnodil Akademi platformu
                    üzerinden sunulan çevrim içi eğitim hizmetlerinden
                    faydalanma koşullarını düzenler.
                  </p>
                  <p className="font-semibold mb-2">
                    3. Üyelik ve Kullanıcı Hesabı
                  </p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>
                      Kullanıcı, kayıt formunu doldurarak doğru ve güncel
                      bilgiler vermekle yükümlüdür.
                    </li>
                    <li>
                      Hesap bilgileri kullanıcıya özeldir, üçüncü kişilerle
                      paylaşılması yasaktır.
                    </li>
                    <li>
                      Hipnodil Akademi, sahte veya yanıltıcı bilgi tespit etmesi
                      halinde üyeliği askıya alma hakkına sahiptir.
                    </li>
                  </ul>
                  <p className="font-semibold mb-2">4. Hizmetin Kapsamı</p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>
                      Kullanıcı, platformda sunulan eğitim, video ve
                      materyallere erişim hakkı elde eder.
                    </li>
                    <li>
                      İçeriklerin kopyalanması, paylaşılması veya ticari amaçla
                      kullanılması yasaktır.
                    </li>
                    <li>
                      Platform içeriğinde değişiklik yapma hakkı Hipnodil
                      Akademi’ye aittir.
                    </li>
                  </ul>
                  <p className="font-semibold mb-2">
                    5. Fikri Mülkiyet Hakları
                  </p>
                  <p className="mb-3">
                    Tüm içerikler (metin, video, grafik, logo, eğitim materyali
                    vb.) Hipnodil Akademi’ye aittir. İzinsiz çoğaltılması,
                    dağıtılması veya yayınlanması Fikir ve Sanat Eserleri Kanunu
                    uyarınca yasaktır.
                  </p>
                  <p className="mb-2 text-slate-800 font-extrabold text-lg">
                    6. Ödeme Koşulları
                  </p>
                  <ul className="list-disc pl-5 mb-3 space-y-2 font-extrabold">
                    <li>
                      Ücretli eğitimlerde kullanıcı, belirtilen bedeli online
                      ödeme sistemleri üzerinden veya şirket banka hesabına
                      EFT/havale yoluyla öder. Kredi kartı (online ödeme) ile
                      yapılan ödemelerde 12 aya kadar taksit imkânı mevcuttur.
                      Banka hesabına yapılan ödemelerde ise, eğitim paketine
                      bağlı olarak en fazla 3 taksit imkânı sunulur. Banka
                      hesabına yapılan ödemelerde kullanıcı, ödeme gününü
                      Akademi ile görüşerek belirler. Kullanıcı EFT veya havale
                      yoluyla ödeme yapmayı taahhüt ediyorsa, belirlenen ödeme
                      gününde ödemesini gerçekleştirmekle yükümlüdür.
                    </li>
                    <li>
                      Kullanıcının ödeme gününde ödemeyi gerçekleştirmemesi
                      durumunda, Akademi kullanıcıya bir haftalık ek süre tanır.
                      Bu süre içerisinde de ödeme yapılmazsa, Akademi
                      kullanıcının hesabını askıya alma hakkına sahiptir.
                    </li>
                    <li>
                      Hipnodil Akademi, fiyat ve kampanya koşullarını değiştirme
                      hakkını saklı tutar.
                    </li>
                    <li>
                      Tüm ödeme işlemleri güvenli ödeme altyapısı üzerinden
                      gerçekleştirilir; kredi kartı bilgileri sistemde
                      kesinlikle saklanmaz.
                    </li>
                    <li>
                      Kredi kartı, EFT ve havale ile yapılan ödemelerde
                      kullanıcı iade hakkına sahiptir. Kullanıcı, verilen
                      hizmetten memnun kalmadığını belirterek, ödemeyi yaptığı
                      tarihten itibaren 2 hafta içinde ücret iadesi talebinde
                      bulunabilir. Ödemeden itibaren 2 haftalık süre geçtikten
                      sonra yapılan iade talepleri Akademi tarafından kabul
                      edilmek zorunda değildir.
                    </li>
                    <li>Eğitim paketi ücretlerine kdv dahildir.</li>
                  </ul>
                  <p className="font-semibold mb-2">
                    7. Kullanıcı Yükümlülükleri
                  </p>
                  <p className="mb-2">Kullanıcı,</p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>Platformu yalnızca yasal amaçlarla kullanacağını,</li>
                    <li>Diğer kullanıcıların haklarına zarar vermeyeceğini,</li>
                    <li>
                      Platform güvenliğini tehdit edecek girişimlerde
                      bulunmayacağını kabul eder.
                    </li>
                  </ul>
                  <p className="font-semibold mb-2">8. Sorumluluk Reddi</p>
                  <p className="mb-2">Hipnodil Akademi,</p>
                  <ul className="list-disc pl-5 mb-3 space-y-1">
                    <li>
                      Kullanıcının internet bağlantısından veya cihazından
                      kaynaklanan hatalardan,
                    </li>
                    <li>Üçüncü taraf hizmet sağlayıcıların kesintilerinden,</li>
                    <li>Kullanıcının verdiği yanlış bilgilerden</li>
                  </ul>
                  <p className="mb-3">sorumlu değildir.</p>
                  <p className="font-semibold mb-2">9. Sözleşmenin Feshi</p>
                  <p className="mb-3">
                    Kullanıcı, istediği zaman hesabını kapatarak sözleşmeyi
                    feshedebilir. Hipnodil Akademi, kullanım şartlarına aykırı
                    davranışlarda üyeliği askıya alma veya sonlandırma hakkına
                    sahiptir.
                  </p>
                  <p className="font-semibold mb-2">
                    10. Uyuşmazlıkların Çözümü
                  </p>
                  <p className="mb-1">
                    İşbu sözleşmeden doğabilecek uyuşmazlıklarda Ankara
                    Mahkemeleri ve İcra Daireleri yetkilidir.
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-end gap-3 border-t border-slate-200 px-5 py-3">
              <button
                type="button"
                onClick={() => {
                  setShowKvkk(false);
                  setShowContract(false);
                }}
                className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
