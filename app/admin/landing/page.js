"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLandingPage() {
  const router = useRouter();

  const cards = [
    {
      title: "Panel",
      description: "Yönetim paneline git",
      action: () => router.push("/admin"),
      icon: "/window.svg",
      bg: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Eğitim İçeriği",
      description: "Eğitimleri görüntüle",
      action: () => router.push("/egitim_icerik"),
      icon: "/file.svg",
      bg: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-b from-white to-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Hoş geldiniz
        </h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Lütfen gitmek istediğiniz alanı seçin.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card) => (
            <button
              key={card.title}
              onClick={card.action}
              className="group relative overflow-hidden rounded-xl border bg-white p-5 text-left transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${card.bg} opacity-20 group-hover:opacity-30`}
              />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <Image src={card.icon} alt="" width={24} height={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {card.description}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs font-medium text-indigo-600 group-hover:underline">
                Git →
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
