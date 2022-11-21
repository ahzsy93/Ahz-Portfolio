/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: colors.indigo,
        amber: colors.amber,
        emerald: colors.emerald,
        rose: colors.rose,
      },
    },
  },
  plugins: [],
};
