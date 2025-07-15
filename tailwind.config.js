/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6a00", // البرتقالي العصري
        secondary: "#ffffff", // الأبيض
        text: "#333333" // الرمادي الغامق
      }
    },
  },
  plugins: [],
}
