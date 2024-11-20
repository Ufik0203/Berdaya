/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        crimson: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [require("rippleui")],
  rippleui: {
    removeThemes: ["light", "dark", "whateverTheme"],
  },
};
