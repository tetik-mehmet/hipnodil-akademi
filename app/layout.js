import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Hipnodil Akademi",
  description: "Hipnodil Akademi",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/hipnodilakademilogo.svg", type: "image/svg+xml" },
      { url: "/hipnodilakademilogo.png", type: "image/png", sizes: "32x32" },
      { url: "/hipnodilakademilogo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/hipnodilakademilogo.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/hipnodilakademilogo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/hipnodilakademilogo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${nunitoSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
