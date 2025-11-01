/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["var(--font-nunito-sans)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "float-y": "floatY 6s ease-in-out infinite",
        "float-x": "floatX 4s ease-in-out infinite",
        "slow-spin": "slowSpin 8s linear infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        slowSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animationDelay: {
        200: "200ms",
        400: "400ms",
        2000: "2s",
        4000: "4s",
      },
    },
  },
  plugins: [],
};
