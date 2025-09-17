"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Paketler() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    "MYK Sınav Ücreti",
    "20 saat Mentörlük (Sınava Yönelik Eğitim)",
    "Kurumsal Destek ve Organizasyon",
    "Başvuru ve Süreç Yönetimi",
    "Demo Sınav Uygulamaları",
    "Eğitmenler ile birebir iletişim",
    "Sınava Hazırlık Dökümanları",
    "MEGAVERSE.COACH 1 yıllık Uzman Abonelik Hediyesi",
  ];

  const diamondFeatures = [
    "MYK Sınav Ücreti",
    "60 saat Yaşam Koçluğu Eğitimi",
    "20 saat Mentörlük (Sınava Yönelik Eğitim)",
    "Kurumsal Destek ve Organizasyon",
    "Başvuru ve Süreç Yönetimi",
    "Demo Sınav Uygulamaları",
    "Eğitmenler ile birebir iletişim",
    "Sınava Hazırlık Dökümanları",
    "MEGAVERSE.COACH 1 yıllık Uzman Abonelik Hediyesi",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hayallerinize Uygun{" "}
            <span className="text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Paketlerimiz
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Profesyonel gelişiminiz için ihtiyaçlarınıza özel olarak tasarlanmış
            paketlerimizle hedeflerinize daha hızlı ulaşın.
          </motion.p>

          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Koç Seviye 6 Paketlerimiz
          </motion.h2>
        </motion.div>

        {/* Packages Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {/* Platinum Package */}
          <motion.div
            className="relative"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-green-400 to-green-600 h-2"></div>

              <div className="p-8">
                <motion.h3
                  className="text-3xl font-bold text-gray-800 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  PLATINUM
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Mentörlük destekli sınav paketi
                </motion.p>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-green-600">
                      25.950
                    </span>
                    <span className="text-gray-600 ml-2">/ Tek Seferlik</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">KDV Dahil</p>
                </motion.div>

                <motion.div
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Şimdi Başvur
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Diamond Package */}
          <motion.div
            className="relative"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Most Popular Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              EN POPÜLER
            </motion.div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl border-2 border-orange-200">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-blue-500 to-orange-500 h-2"></div>

              <div className="p-8">
                <motion.h3
                  className="text-3xl font-bold text-gray-800 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  DIAMOND
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Tam kapsamlı eğitim ve sınav paketi
                </motion.p>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-800">
                      33.950
                    </span>
                    <span className="text-gray-600 ml-2">/ Tek Seferlik</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">KDV Dahil</p>
                </motion.div>

                <motion.div
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  {diamondFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hemen Başvur
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Neden Hipnodil Akademi?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
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
                <h4 className="font-semibold text-gray-800 mb-2">
                  Uzman Eğitmenler
                </h4>
                <p className="text-gray-600 text-sm">
                  Alanında uzman eğitmenlerimizle kaliteli eğitim
                </p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Sertifikalı Program
                </h4>
                <p className="text-gray-600 text-sm">
                  Resmi sertifikalı eğitim programları
                </p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Hızlı Sonuç
                </h4>
                <p className="text-gray-600 text-sm">
                  Kısa sürede hedeflerinize ulaşın
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
