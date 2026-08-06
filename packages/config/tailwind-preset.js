/** @type {import('tailwindcss').Config} */
// Shared Tailwind preset — token warna & tipografi resmi BusGo (Identity & Design System).
// Dipakai oleh semua workspace app via `presets: [require('@busgo/config/tailwind-preset')]`.
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0A2342", // Deep Blue - kepercayaan, header, teks utama
          DEFAULT: "#4A90E2", // Sky Blue - aksi primer, brand utama
          sky: "#4A90E2",
          soft: "#D4E6F1", // Soft Blue - background section, badge
          light: "#F5F7FA", // Light Gray - background halaman
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
        },
        accent: {
          DEFAULT: "#F5A623", // Oranye - call to action sekunder
          soft: "#FDEBD3",
        },
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(10, 35, 66, 0.10)",
        "card-hover": "0 12px 32px -8px rgba(10, 35, 66, 0.18)",
        glass: "0 8px 32px 0 rgba(10, 35, 66, 0.12)",
        "whatsapp-btn": "0 8px 20px -4px rgba(37, 211, 102, 0.45)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 100% 0%, rgba(74,144,226,0.35) 0%, rgba(10,35,66,0) 45%), linear-gradient(135deg, #0A2342 0%, #123A63 55%, #1D5FA8 100%)",
        "glass-card":
          "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        blob: "blob 12s infinite ease-in-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
        },
      },
    },
  },
  plugins: [],
};
