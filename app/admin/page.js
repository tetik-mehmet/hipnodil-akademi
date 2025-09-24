"use client";
import React from "react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-8">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Yönetim Paneli
          </h1>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-md border text-sm hover:bg-gray-100"
            >
              Siteye Dön
            </Link>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Kullanıcılar" value="—" />
          <Card title="Aktif Kurslar" value="—" />
          <Card title="Son Giriş" value="—" />
          <Card title="Sistem Durumu" value="—" />
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-gray-900 mb-3">
            Yeni Kullanıcı Oluştur
          </h2>
          <AdminCreateUserForm />
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-gray-900 mb-3">
            Kullanıcı Listesi
          </h2>
          <AdminUsersTable />
        </section>
      </section>
    </main>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-1 text-2xl font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function ActionButton({ label }) {
  return (
    <button className="w-full rounded-lg border bg-white p-4 text-left hover:shadow-sm transition">
      <div className="text-gray-900 font-medium">{label}</div>
      <div className="text-sm text-gray-500 mt-1">Detayları görüntüle</div>
    </button>
  );
}

// Admin kullanıcı oluşturma formu
function AdminCreateUserForm() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    tcNumber: "",
    phone: "",
    email: "",
    education: "",
    password: "",
    courses: [],
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [serverError, setServerError] = React.useState("");
  const [serverSuccess, setServerSuccess] = React.useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name.startsWith("course:")) {
      const course = name.split(":")[1];
      setFormData((p) => {
        const has = p.courses.includes(course);
        const next = checked
          ? has
            ? p.courses
            : [...p.courses, course]
          : p.courses.filter((c) => c !== course);
        return { ...p, courses: next };
      });
      return;
    }
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFormData((p) => ({ ...p, phone: digits }));
      return;
    }
    if (name === "tcNumber") {
      const digits = value.replace(/\D/g, "").slice(0, 11);
      setFormData((p) => ({ ...p, tcNumber: digits }));
      return;
    }
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setServerError("");
    setServerSuccess("");
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Kayıt başarısız");
      setServerSuccess("Kullanıcı başarıyla oluşturuldu.");
      setFormData({
        firstName: "",
        lastName: "",
        birthDate: "",
        tcNumber: "",
        phone: "",
        email: "",
        education: "",
        password: "",
        courses: [],
      });
    } catch (err) {
      setServerError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      {serverError && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}
      {serverSuccess && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {serverSuccess}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <Input
          label="İsim"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          label="Soyisim"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input
          label="Doğum Tarihi"
          name="birthDate"
          type="date"
          value={formData.birthDate}
          onChange={handleChange}
        />
        <Input
          label="TC Kimlik"
          name="tcNumber"
          value={formData.tcNumber}
          onChange={handleChange}
          maxLength={11}
        />
        <Input
          label="Telefon"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength={10}
        />
        <Input
          label="E-posta"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Eğitim Durumu
          </label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        </div>
        <div className="sm:col-span-2">
          <Input
            label="Şifre"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* Kurs Seçimleri */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Erişim Verilecek Eğitimler
          </label>
          <div className="flex flex-wrap gap-3">
            <Checkbox
              label="Mentorluk Kursu"
              name="course:mentorluk_kursu"
              checked={formData.courses.includes("mentorluk_kursu")}
              onChange={handleChange}
            />
            <Checkbox
              label="Seviye 6 Kursu"
              name="course:seviye6_kursu"
              checked={formData.courses.includes("seviye6_kursu")}
              onChange={handleChange}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Seçilmeyen eğitimlere kullanıcı erişemez.
          </p>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-60"
          >
            {isSubmitting ? "Oluşturuluyor..." : "Kullanıcı Oluştur"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Input({ label, name, value, onChange, type = "text", maxLength }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

function Checkbox({ label, name, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <span>{label}</span>
    </label>
  );
}

function AdminUsersTable() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // sadece ilk yüklemede
  const [refreshing, setRefreshing] = React.useState(false); // arka plan yenilemelerinde
  const [error, setError] = React.useState("");

  const fetchUsers = React.useCallback(async (isRefresh = false) => {
    try {
      if (!isRefresh) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }
      setError("");
      const res = await fetch("/api/admin/users", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Liste alınamadı");
      setUsers(Array.isArray(data.users) ? data.users : []);
    } catch (e) {
      setError(e.message);
    } finally {
      if (!isRefresh) {
        setLoading(false);
      } else {
        setRefreshing(false);
      }
    }
  }, []);

  React.useEffect(() => {
    fetchUsers(false);
    const id = setInterval(() => fetchUsers(true), 10000); // 10 sn’de bir sessiz yenile
    return () => clearInterval(id);
  }, [fetchUsers]);

  if (loading) {
    return <div className="text-sm text-gray-600">Yükleniyor...</div>;
  }
  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
      {refreshing && (
        <div className="px-4 py-2 text-xs text-gray-500">Güncelleniyor…</div>
      )}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <Th>Ad</Th>
            <Th>Soyad</Th>
            <Th>E-posta</Th>
            <Th>Telefon</Th>
            <Th>Eğitim</Th>
            <Th>Kurslar</Th>
            <Th>Rol</Th>
            <Th>Oluşturulma</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {users.map((u) => (
            <tr key={String(u._id)} className="hover:bg-gray-50">
              <Td>{u.firstName}</Td>
              <Td>{u.lastName}</Td>
              <Td className="whitespace-nowrap">{u.email}</Td>
              <Td>{u.phone || "-"}</Td>
              <Td>{u.education || "-"}</Td>
              <Td>
                {(u.courses || []).length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {u.courses.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 border border-indigo-100"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-gray-500">—</span>
                )}
              </Td>
              <Td>{u.role || "user"}</Td>
              <Td>
                {u.createdAt ? new Date(u.createdAt).toLocaleString() : "-"}
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }) {
  return (
    <th
      scope="col"
      className="px-4 py-3 text-left text-xs font-semibold text-gray-700"
    >
      {children}
    </th>
  );
}

function Td({ children, className = "" }) {
  return (
    <td className={`px-4 py-3 text-sm text-gray-900 ${className}`}>
      {children}
    </td>
  );
}
