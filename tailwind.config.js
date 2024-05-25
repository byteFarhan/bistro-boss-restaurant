/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D99904",
        secondary: "#EEFF25",
        "dark-orange": "#BB8506",
        natural: "#737373",
        title: "#151515",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        cinzel: "'Cinzel', serif",
      },
    },
  },
  plugins: [],
};
