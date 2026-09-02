/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("@busgo/config/tailwind-preset")],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
