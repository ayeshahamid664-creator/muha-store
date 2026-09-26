/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#4A0E1C",
          dark: "#2E0712",
          light: "#6B1528",
        },
        cream: {
          DEFAULT: "#F5F0E6",
          dark: "#E8DFC9",
        },
        bossy: "#1A1A1A",
        casual: "#8B6F47",
        cool: "#1E3A5F",
        admin: {
          bg: "#0F0F12",
          card: "#1A1A1F",
          border: "#2A2A32",
          hover: "#22222A",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        script: ["Dancing Script", "cursive"],
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out",
        "fade-in": "fadeIn 1s ease-out",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};