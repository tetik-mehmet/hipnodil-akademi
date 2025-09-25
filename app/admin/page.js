"use client";
import React from "react";
import Link from "next/link";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Mobil Kullanıcı Kartı Bileşeni
function MobileUserCard({ user, onDetail, onCourses, onPassword, onDelete }) {
  const getEducationLabel = (education) => {
    const labels = {
      ilkokul: "İlkokul",
      ortaokul: "Ortaokul",
      lise: "Lise",
      onlisans: "Ön Lisans",
      lisans: "Lisans",
      yukseklisans: "Yüksek Lisans",
      doktora: "Doktora",
    };
    return labels[education] || education || "-";
  };

  const getCourseLabel = (course) => {
    const labels = {
      mentorluk_kursu: "Mentorluk",
      seviye6_kursu: "Seviye 6",
    };
    return labels[course] || course;
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {user.email}
          </p>
          {user.phone && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {user.phone}
            </p>
          )}
        </div>
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            user.role === "admin"
              ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
          }`}
        >
          {user.role || "user"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
        <div>
          <span className="text-gray-500 dark:text-gray-400">Eğitim:</span>
          <span className="ml-1 text-gray-900 dark:text-gray-100">
            {getEducationLabel(user.education)}
          </span>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Kurslar:</span>
          <span className="ml-1 text-gray-900 dark:text-gray-100">
            {(user.courses || []).length}
          </span>
        </div>
      </div>

      {(user.courses || []).length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {user.courses.map((course) => (
              <span
                key={course}
                className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 text-xs text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800"
              >
                {getCourseLabel(course)}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onDetail(user)}
          className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Detay
        </button>
        <button
          onClick={() => onCourses(user)}
          className="flex-1 bg-blue-100 dark:bg-blue-900/20 hover:bg-blue-200 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Kurslar
        </button>
        <button
          onClick={() => onPassword(user)}
          className="flex-1 bg-yellow-100 dark:bg-yellow-900/20 hover:bg-yellow-200 dark:hover:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Şifre
        </button>
        <button
          onClick={() => onDelete(user)}
          className="flex-1 bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

// Swipe Hook
function useSwipe(onSwipeLeft, onSwipeRight) {
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}

// Mobil Menü Bileşeni
function MobileMenu({ isOpen, onClose, children }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Menü */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Filtreler
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400"
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
        <div className="p-4 space-y-4 overflow-y-auto">{children}</div>
      </div>
    </>
  );
}

// Dark Mode Hook
function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    // LocalStorage'dan tema tercihini oku
    const savedTheme = localStorage.getItem("admin-dark-mode");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = React.useCallback(() => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("admin-dark-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("admin-dark-mode", "light");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
}

// Dark Mode Toggle Button
function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
      title={isDarkMode ? "Açık moda geç" : "Koyu moda geç"}
    >
      {isDarkMode ? (
        <>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden sm:inline">Açık Mod</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <span className="hidden sm:inline">Koyu Mod</span>
        </>
      )}
    </button>
  );
}

export default function AdminPage() {
  return (
    <main className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      <section className="mx-auto max-w-6xl px-4 py-8">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Yönetim Paneli
          </h1>
          <DarkModeToggle />
        </header>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TotalUsersCard />
          <NewUsersThisMonthCard />
          <CourseDistributionCard />
          <UsersSummaryCard />
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            Yeni Kullanıcı Oluştur
          </h2>
          <AdminCreateUserForm />
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            Kullanıcı Listesi
          </h2>
          <AdminUsersTable />
          <ToastViewport />
        </section>
      </section>
    </main>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 p-4 shadow-sm">
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {value}
      </div>
    </div>
  );
}

// Toplam kullanıcı sayısı kartı
function TotalUsersCard() {
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("/api/admin/users", { cache: "no-store" });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Veri alınamadı");
        const count = Array.isArray(data.users) ? data.users.length : 0;
        setTotalUsers(count);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTotalUsers();
  }, []);

  return (
    <div className="rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 p-4 shadow-sm">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Toplam Kullanıcı
      </div>
      <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {loading ? "—" : error ? "Hata" : totalUsers}
      </div>
      {error && (
        <div className="mt-1 text-xs text-red-500 dark:text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}

// Bu ay yeni kayıtlar kartı
function NewUsersThisMonthCard() {
  const [newUsers, setNewUsers] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchNewUsers = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("/api/admin/users", { cache: "no-store" });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Veri alınamadı");

        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        const count = Array.isArray(data.users)
          ? data.users.filter((user) => {
              const userDate = new Date(user.createdAt);
              return userDate >= startOfMonth;
            }).length
          : 0;
        setNewUsers(count);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNewUsers();
  }, []);

  return (
    <div className="rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 p-4 shadow-sm">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Bu Ay Yeni Kayıtlar
      </div>
      <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {loading ? "—" : error ? "Hata" : newUsers}
      </div>
      {error && (
        <div className="mt-1 text-xs text-red-500 dark:text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}

// Kurs bazında kullanıcı dağılımı kartı
function CourseDistributionCard() {
  const [courseStats, setCourseStats] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchCourseStats = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("/api/admin/users", { cache: "no-store" });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Veri alınamadı");

        const stats = {
          mentorluk_kursu: 0,
          seviye6_kursu: 0,
          kurs_yok: 0,
          toplam: Array.isArray(data.users) ? data.users.length : 0,
        };

        if (Array.isArray(data.users)) {
          data.users.forEach((user) => {
            if (user.courses && user.courses.length > 0) {
              user.courses.forEach((course) => {
                if (stats.hasOwnProperty(course)) {
                  stats[course]++;
                }
              });
            } else {
              stats.kurs_yok++;
            }
          });
        }

        setCourseStats(stats);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourseStats();
  }, []);

  const chartData = {
    labels: ["Mentorluk Kursu", "Seviye 6 Kursu", "Kurs Erişimi Yok"],
    datasets: [
      {
        data: [
          courseStats.mentorluk_kursu || 0,
          courseStats.seviye6_kursu || 0,
          courseStats.kurs_yok || 0,
        ],
        backgroundColor: [
          "#3B82F6", // Mavi - Mentorluk
          "#10B981", // Yeşil - Seviye 6
          "#EF4444", // Kırmızı - Kurs yok
        ],
        borderColor: ["#1E40AF", "#059669", "#DC2626"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 11,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage =
              total > 0 ? ((context.parsed / total) * 100).toFixed(1) : 0;
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 p-4 shadow-sm">
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        Kurs Dağılımı
      </div>
      {loading ? (
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Yükleniyor...
        </div>
      ) : error ? (
        <div className="mt-1 text-xs text-red-500 dark:text-red-400">
          {error}
        </div>
      ) : (
        <div>
          <div className="h-48 w-full">
            <Pie data={chartData} options={chartOptions} />
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Mentorluk:
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {courseStats.mentorluk_kursu || 0}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Seviye 6:
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {courseStats.seviye6_kursu || 0}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Kurs Yok:
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {courseStats.kurs_yok || 0}
              </span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-1 mt-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-gray-700 dark:text-gray-300">
                  Toplam Kullanıcı:
                </span>
                <span className="text-gray-900 dark:text-gray-100">
                  {courseStats.toplam || 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function UsersSummaryCard() {
  const [names, setNames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);

  const fetchNames = React.useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/admin/users", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Liste alınamadı");
      const list = Array.isArray(data.users)
        ? data.users
            .map((u) => `${u.firstName || ""} ${u.lastName || ""}`.trim())
            .filter(Boolean)
        : [];
      setNames(list);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchNames();
  }, [fetchNames]);

  const filtered = React.useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return names;
    return names.filter((n) => n.toLowerCase().includes(q));
  }, [names, debouncedQuery]);

  return (
    <div className="rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 p-4 shadow-sm">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Kullanıcılar
      </div>
      <div className="mt-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="İsim soyisim ara..."
          className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          aria-label="Kullanıcı arama"
        />
      </div>
      {loading ? (
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Yükleniyor...
        </div>
      ) : error ? (
        <div className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Kayıtlı kullanıcı yok
        </div>
      ) : (
        <ul className="mt-2 max-h-40 overflow-auto text-sm text-gray-900 dark:text-gray-100 list-disc list-inside">
          {filtered.map((n, i) => (
            <li key={`${n}-${i}`}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Debounce yardımcı kancası
function useDebounce(value, delay = 300) {
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    const id = setTimeout(() => setV(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return v;
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
      showToast({
        type: "success",
        title: "Başarılı",
        message: "Kullanıcı oluşturuldu",
      });
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
      showToast({ type: "error", title: "Hata", message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border bg-white dark:bg-gray-800 dark:border-gray-700 p-6 shadow-sm">
      {serverError && (
        <div className="mb-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-4 py-3 text-sm text-red-700 dark:text-red-400">
          {serverError}
        </div>
      )}
      {serverSuccess && (
        <div className="mb-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 px-4 py-3 text-sm text-green-700 dark:text-green-400">
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Eğitim Durumu
          </label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Seçilmeyen eğitimlere kullanıcı erişemez.
          </p>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-4 py-2 text-white text-sm font-medium disabled:opacity-60 transition-colors"
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
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
        className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}

function Checkbox({ label, name, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-indigo-600 focus:ring-indigo-500"
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
  const [educationFilter, setEducationFilter] = React.useState("");
  const [sortKey, setSortKey] = React.useState("createdAt");
  const [sortDir, setSortDir] = React.useState("desc");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileView, setIsMobileView] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const [selectedUser, setSelectedUser] = React.useState(null);
  const [isCoursesOpen, setIsCoursesOpen] = React.useState(false);

  // Mobil görünüm kontrolü
  React.useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);

    return () => window.removeEventListener("resize", checkMobileView);
  }, []);
  const [isPasswordOpen, setIsPasswordOpen] = React.useState(false);
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);

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
      if (!isRefresh)
        showToast({ type: "error", title: "Hata", message: e.message });
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
    if (educationFilter) {
      list = list.filter((u) => (u.education || "") === educationFilter);
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
  }, [
    users,
    query,
    roleFilter,
    courseFilter,
    educationFilter,
    sortKey,
    sortDir,
  ]);

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
  const openDetail = (u) => {
    setSelectedUser(u);
    setIsDetailOpen(true);
  };

  // Swipe handlers
  const swipeHandlers = useSwipe(
    () => setIsMobileMenuOpen(true), // Swipe left to open menu
    () => setIsMobileMenuOpen(false) // Swipe right to close menu
  );

  const deleteUser = async (u) => {
    if (
      !confirm(
        `${u.firstName} ${u.lastName} kullanıcısını silmek istiyor musunuz?`
      )
    )
      return;
    const res = await fetch(`/api/admin/users/${u._id}`, { method: "DELETE" });
    if (res.ok) {
      showToast({
        type: "success",
        title: "Silindi",
        message: `${u.firstName} ${u.lastName}`,
      });
      fetchUsers(true);
    } else {
      const data = await res.json();
      showToast({
        type: "error",
        title: "Hata",
        message: data?.message || "Silme başarısız",
      });
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
          {/* Mobil menü butonu */}
          {isMobileView && (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md border bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
                />
              </svg>
            </button>
          )}

          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Ara (ad, soyad, e-posta, telefon)"
            className="w-64 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {/* Desktop filtreler */}
          <div className="hidden lg:flex flex-wrap items-center gap-2">
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
              value={educationFilter}
              onChange={(e) => {
                setEducationFilter(e.target.value);
                setPage(1);
              }}
              className="rounded-md border px-2 py-2 text-sm"
            >
              <option value="">Eğitim (hepsi)</option>
              <option value="ilkokul">İlkokul</option>
              <option value="ortaokul">Ortaokul</option>
              <option value="lise">Lise</option>
              <option value="onlisans">Ön Lisans</option>
              <option value="lisans">Lisans</option>
              <option value="yukseklisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
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
      </div>

      {/* Mobil Menü */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rol Filtresi
            </label>
            <select
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Rol (hepsi)</option>
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Kurs Filtresi
            </label>
            <select
              value={courseFilter}
              onChange={(e) => {
                setCourseFilter(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Kurs (hepsi)</option>
              <option value="mentorluk_kursu">mentorluk_kursu</option>
              <option value="seviye6_kursu">seviye6_kursu</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Eğitim Filtresi
            </label>
            <select
              value={educationFilter}
              onChange={(e) => {
                setEducationFilter(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Eğitim (hepsi)</option>
              <option value="ilkokul">İlkokul</option>
              <option value="ortaokul">Ortaokul</option>
              <option value="lise">Lise</option>
              <option value="onlisans">Ön Lisans</option>
              <option value="lisans">Lisans</option>
              <option value="yukseklisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sayfa Boyutu
            </label>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={10}>10 kayıt</option>
              <option value={20}>20 kayıt</option>
              <option value={50}>50 kayıt</option>
            </select>
          </div>
        </div>
      </MobileMenu>

      {/* Desktop Tablo Görünümü */}
      {!isMobileView ? (
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
                    onClick={() => openDetail(u)}
                    className="mr-2 rounded border px-2 py-1 text-xs hover:bg-gray-50"
                  >
                    Detay
                  </button>
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
      ) : (
        /* Mobil Kart Görünümü */
        <div className="space-y-4 p-4" {...swipeHandlers}>
          {paged.map((user) => (
            <MobileUserCard
              key={user._id}
              user={user}
              onDetail={openDetail}
              onCourses={openCourses}
              onPassword={openPassword}
              onDelete={deleteUser}
            />
          ))}
        </div>
      )}

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
      {isDetailOpen && selectedUser && (
        <UserDetailModal
          user={selectedUser}
          onClose={() => setIsDetailOpen(false)}
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

// Basit toast sistemi
const ToastContext = React.createContext({ add: () => {} });
let toastId = 0;

export function ToastViewport() {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    window.__toast_add = (toast) => {
      const id = ++toastId;
      setToasts((list) => [...list, { id, ...toast }]);
      setTimeout(() => {
        setToasts((list) => list.filter((t) => t.id !== id));
      }, toast.timeout ?? 3000);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          aria-live="polite"
          className={`min-w-[240px] rounded-md border px-3 py-2 shadow-sm ${
            t.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          <div className="text-sm font-semibold">{t.title}</div>
          {t.message ? (
            <div className="text-xs opacity-90">{t.message}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function showToast({ type = "success", title, message, timeout = 3000 }) {
  if (typeof window !== "undefined" && window.__toast_add) {
    window.__toast_add({ type, title, message, timeout });
  }
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
    if (res.ok) {
      showToast({
        type: "success",
        title: "Güncellendi",
        message: "Kurslar kaydedildi",
      });
      onSaved();
    } else {
      const data = await res.json();
      showToast({
        type: "error",
        title: "Hata",
        message: data?.message || "Kurslar güncellenemedi",
      });
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
      showToast({
        type: "error",
        title: "Hata",
        message: "Şifre en az 6 karakter olmalı",
      });
      return;
    }
    setSaving(true);
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "resetPassword", newPassword: password }),
    });
    setSaving(false);
    if (res.ok) {
      showToast({
        type: "success",
        title: "Güncellendi",
        message: "Şifre güncellendi",
      });
      onSaved();
    } else {
      const data = await res.json();
      showToast({
        type: "error",
        title: "Hata",
        message: data?.message || "Şifre güncellenemedi",
      });
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

// Kullanıcı detay modalı
function UserDetailModal({ user, onClose }) {
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getEducationLabel = (education) => {
    const labels = {
      ilkokul: "İlkokul",
      ortaokul: "Ortaokul",
      lise: "Lise",
      onlisans: "Ön Lisans",
      lisans: "Lisans",
      yukseklisans: "Yüksek Lisans",
      doktora: "Doktora",
    };
    return labels[education] || education || "-";
  };

  const getCourseLabel = (course) => {
    const labels = {
      mentorluk_kursu: "Mentorluk Kursu",
      seviye6_kursu: "Seviye 6 Kursu",
    };
    return labels[course] || course;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Kullanıcı Detayları
          </h3>
          <button
            onClick={onClose}
            className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Kapat
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kişisel Bilgiler */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 border-b pb-2">
              Kişisel Bilgiler
            </h4>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Ad Soyad
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {user.firstName} {user.lastName}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                E-posta
              </label>
              <p className="mt-1 text-sm text-gray-900 break-all">
                {user.email}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Telefon
              </label>
              <p className="mt-1 text-sm text-gray-900">{user.phone || "-"}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                TC Kimlik No
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {user.tcNumber || "-"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Doğum Tarihi
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {user.birthDate
                  ? new Date(user.birthDate).toLocaleDateString("tr-TR")
                  : "-"}
              </p>
            </div>
          </div>

          {/* Eğitim ve Sistem Bilgileri */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 border-b pb-2">
              Eğitim ve Sistem Bilgileri
            </h4>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Eğitim Durumu
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {getEducationLabel(user.education)}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Rol
              </label>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.role === "admin"
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {user.role || "user"}
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Kurs Erişimleri
              </label>
              <div className="mt-1 space-y-1">
                {user.courses && user.courses.length > 0 ? (
                  user.courses.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-700 border border-indigo-100 mr-1 mb-1"
                    >
                      {getCourseLabel(course)}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Hiç kurs erişimi yok</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Kayıt Tarihi
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {formatDate(user.createdAt)}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Son Güncelleme
              </label>
              <p className="mt-1 text-sm text-gray-900">
                {formatDate(user.updatedAt)}
              </p>
            </div>
          </div>
        </div>

        {/* Alt Bilgiler */}
        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm text-gray-600">Kullanıcı ID</div>
              <div className="text-xs font-mono text-gray-900 break-all">
                {user._id}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm text-gray-600">Toplam Kurs</div>
              <div className="text-lg font-semibold text-gray-900">
                {user.courses ? user.courses.length : 0}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm text-gray-600">Durum</div>
              <div className="text-sm font-medium text-green-600">Aktif</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
