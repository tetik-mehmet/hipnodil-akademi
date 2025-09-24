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
  const [query, setQuery] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("");
  const [courseFilter, setCourseFilter] = React.useState("");
  const [sortKey, setSortKey] = React.useState("createdAt");
  const [sortDir, setSortDir] = React.useState("desc");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const [selectedUser, setSelectedUser] = React.useState(null);
  const [isCoursesOpen, setIsCoursesOpen] = React.useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = React.useState(false);

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

  // Türev liste: arama + filtre + sıralama (early return'lardan ÖNCE tanımlı olmalı)
  const processed = React.useMemo(() => {
    let list = [...users];
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((u) =>
        [u.firstName, u.lastName, u.email, u.phone]
          .filter(Boolean)
          .some((v) => String(v).toLowerCase().includes(q))
      );
    }
    if (roleFilter) {
      list = list.filter((u) => (u.role || "user") === roleFilter);
    }
    if (courseFilter) {
      list = list.filter((u) => (u.courses || []).includes(courseFilter));
    }
    list.sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      const ka = a[sortKey];
      const kb = b[sortKey];
      if (sortKey === "createdAt") {
        return (new Date(ka) - new Date(kb)) * dir;
      }
      return String(ka || "").localeCompare(String(kb || "")) * dir;
    });
    return list;
  }, [users, query, roleFilter, courseFilter, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(processed.length / pageSize));
  const pageSafe = Math.min(page, totalPages);
  const paged = React.useMemo(() => {
    const start = (pageSafe - 1) * pageSize;
    return processed.slice(start, start + pageSize);
  }, [processed, pageSafe, pageSize]);

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  // Satır aksiyonları
  const openCourses = (u) => {
    setSelectedUser(u);
    setIsCoursesOpen(true);
  };
  const openPassword = (u) => {
    setSelectedUser(u);
    setIsPasswordOpen(true);
  };
  const deleteUser = async (u) => {
    if (
      !confirm(
        `${u.firstName} ${u.lastName} kullanıcısını silmek istiyor musunuz?`
      )
    )
      return;
    const res = await fetch(`/api/admin/users/${u._id}`, { method: "DELETE" });
    if (res.ok) {
      fetchUsers(true);
    } else {
      const data = await res.json();
      alert(data?.message || "Silme başarısız");
    }
  };

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
      {/* Filtre / Arama / Kontroller */}
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Ara (ad, soyad, e-posta, telefon)"
            className="w-64 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value);
              setPage(1);
            }}
            className="rounded-md border px-2 py-2 text-sm"
          >
            <option value="">Rol (hepsi)</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
          <select
            value={courseFilter}
            onChange={(e) => {
              setCourseFilter(e.target.value);
              setPage(1);
            }}
            className="rounded-md border px-2 py-2 text-sm"
          >
            <option value="">Kurs (hepsi)</option>
            <option value="mentorluk_kursu">mentorluk_kursu</option>
            <option value="seviye6_kursu">seviye6_kursu</option>
          </select>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="rounded-md border px-2 py-2 text-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs text-gray-600">
            {processed.length} kayıt • {pageSafe}/{totalPages} sayfa
          </div>
          <button
            onClick={() => exportCsv(processed)}
            className="rounded border px-3 py-2 text-sm hover:bg-gray-50"
          >
            CSV indir
          </button>
          <button
            onClick={() => exportPdf(processed)}
            className="rounded px-3 py-2 text-sm font-bold bg-red-600 text-black hover:bg-red-700 border border-red-700"
          >
            PDF indir
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <Th
              clickable
              onClick={() => toggleSort("firstName")}
              active={sortKey === "firstName"}
              dir={sortDir}
            >
              Ad
            </Th>
            <Th
              clickable
              onClick={() => toggleSort("lastName")}
              active={sortKey === "lastName"}
              dir={sortDir}
            >
              Soyad
            </Th>
            <Th
              clickable
              onClick={() => toggleSort("email")}
              active={sortKey === "email"}
              dir={sortDir}
            >
              E-posta
            </Th>
            <Th>Telefon</Th>
            <Th>Eğitim</Th>
            <Th>Kurslar</Th>
            <Th
              clickable
              onClick={() => toggleSort("role")}
              active={sortKey === "role"}
              dir={sortDir}
            >
              Rol
            </Th>
            <Th
              clickable
              onClick={() => toggleSort("createdAt")}
              active={sortKey === "createdAt"}
              dir={sortDir}
            >
              Oluşturulma
            </Th>
            <Th>Aksiyon</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {paged.map((u) => (
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
              <Td className="whitespace-nowrap">
                <button
                  onClick={() => openCourses(u)}
                  className="mr-2 rounded border px-2 py-1 text-xs hover:bg-gray-50"
                >
                  Kursları Düzenle
                </button>
                <button
                  onClick={() => openPassword(u)}
                  className="mr-2 rounded border px-2 py-1 text-xs hover:bg-gray-50"
                >
                  Şifre Sıfırla
                </button>
                <button
                  onClick={() => deleteUser(u)}
                  className="rounded border px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                >
                  Sil
                </button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Sayfalama */}
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={pageSafe <= 1}
          className="rounded border px-3 py-1 text-sm disabled:opacity-50"
        >
          Önceki
        </button>
        <div className="text-xs text-gray-600">
          Sayfa {pageSafe} / {totalPages}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={pageSafe >= totalPages}
          className="rounded border px-3 py-1 text-sm disabled:opacity-50"
        >
          Sonraki
        </button>
      </div>

      {/* Modallar */}
      {isCoursesOpen && selectedUser && (
        <CoursesModal
          user={selectedUser}
          onClose={() => setIsCoursesOpen(false)}
          onSaved={() => {
            setIsCoursesOpen(false);
            fetchUsers(true);
          }}
        />
      )}
      {isPasswordOpen && selectedUser && (
        <PasswordModal
          userId={selectedUser._id}
          onClose={() => setIsPasswordOpen(false)}
          onSaved={() => {
            setIsPasswordOpen(false);
          }}
        />
      )}
    </div>
  );
}

function Th({ children, clickable = false, onClick, active, dir }) {
  return (
    <th
      scope="col"
      onClick={onClick}
      className={`px-4 py-3 text-left text-xs font-semibold text-gray-700 ${
        clickable ? "cursor-pointer select-none" : ""
      }`}
    >
      <span className="inline-flex items-center gap-1">
        {children}
        {active ? (
          <span className="text-gray-400">{dir === "asc" ? "▲" : "▼"}</span>
        ) : null}
      </span>
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

// CSV export: ekranda görünen kayıtları indirir
function exportCsv(rows) {
  // Türkiye/Excel yerelde daha iyi açılması için noktalı virgül ayırıcı kullan
  const SEP = ";";
  const headers = [
    "Ad",
    "Soyad",
    "E-posta",
    "Telefon",
    "Eğitim",
    "Kurslar",
    "Rol",
    "Oluşturulma",
  ];
  const escape = (v) => {
    const s = (v ?? "").toString();
    // Alan içinde ayırıcı veya yeni satır varsa Excel uyumlu kaçış uygula
    if (new RegExp(`["${SEP}\\n]`).test(s))
      return '"' + s.replace(/"/g, '""') + '"';
    return s;
  };
  const lines = [headers.join(SEP)].concat(
    rows.map((u) =>
      [
        u.firstName || "",
        u.lastName || "",
        u.email || "",
        u.phone || "",
        u.education || "",
        (u.courses || []).join(" | "),
        u.role || "user",
        u.createdAt ? new Date(u.createdAt).toLocaleString() : "",
      ]
        .map(escape)
        .join(SEP)
    )
  );
  const csv = lines.join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "kullanicilar.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// PDF export (istemci tarafı): ekranda görünen (filtrelenmiş/sıralanmış) listeyi indirir
function exportPdf(rows) {
  // Dinamik import, yalnızca buton tıklanınca yüklenir
  import("jspdf").then(async ({ default: jsPDF }) => {
    const { default: autoTable } = await import("jspdf-autotable");
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    const head = [
      [
        "Ad",
        "Soyad",
        "E-posta",
        "Telefon",
        "Eğitim",
        "Kurslar",
        "Rol",
        "Oluşturulma",
      ],
    ];
    const body = rows.map((u) => [
      u.firstName || "",
      u.lastName || "",
      u.email || "",
      u.phone || "",
      u.education || "",
      (u.courses || []).join(", "),
      u.role || "user",
      u.createdAt ? new Date(u.createdAt).toLocaleString() : "",
    ]);
    autoTable(doc, {
      head,
      body,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [67, 56, 202] },
    });
    doc.save("kullanicilar.pdf");
  });
}

// Kurs düzenleme modalı
function CoursesModal({ user, onClose, onSaved }) {
  const [selected, setSelected] = React.useState(user.courses || []);
  const toggle = (course) => {
    setSelected((list) =>
      list.includes(course)
        ? list.filter((c) => c !== course)
        : [...list, course]
    );
  };
  const save = async () => {
    const res = await fetch(`/api/admin/users/${user._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "updateCourses", courses: selected }),
    });
    if (res.ok) onSaved();
    else {
      const data = await res.json();
      alert(data?.message || "Kurslar güncellenemedi");
    }
  };
  return (
    <Modal
      onClose={onClose}
      title={`${user.firstName} ${user.lastName} - Kurslar`}
    >
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={selected.includes("mentorluk_kursu")}
            onChange={() => toggle("mentorluk_kursu")}
            className="h-4 w-4"
          />
          <span>mentorluk_kursu</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={selected.includes("seviye6_kursu")}
            onChange={() => toggle("seviye6_kursu")}
            className="h-4 w-4"
          />
          <span>seviye6_kursu</span>
        </label>
        <div className="pt-2 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded border px-3 py-1 text-sm"
          >
            İptal
          </button>
          <button
            onClick={save}
            className="rounded bg-indigo-600 px-3 py-1 text-white text-sm"
          >
            Kaydet
          </button>
        </div>
      </div>
    </Modal>
  );
}

// Şifre sıfırlama modalı
function PasswordModal({ userId, onClose, onSaved }) {
  const [password, setPassword] = React.useState("");
  const [saving, setSaving] = React.useState(false);
  const save = async () => {
    if (password.length < 6) {
      alert("Şifre en az 6 karakter olmalı");
      return;
    }
    setSaving(true);
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "resetPassword", newPassword: password }),
    });
    setSaving(false);
    if (res.ok) onSaved();
    else {
      const data = await res.json();
      alert(data?.message || "Şifre güncellenemedi");
    }
  };
  return (
    <Modal onClose={onClose} title="Şifre Sıfırla">
      <div className="space-y-3">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Yeni şifre"
          className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="pt-2 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded border px-3 py-1 text-sm"
          >
            İptal
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="rounded bg-indigo-600 px-3 py-1 text-white text-sm disabled:opacity-60"
          >
            {saving ? "Kaydediliyor..." : "Kaydet"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded border px-2 py-1 text-xs"
          >
            Kapat
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
