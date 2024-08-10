/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["DM Sans", "sans-serif"] },
      colors: {
        black: "#111315",
        "gray-dark": "#1B1D1F",
        "gray-medium": "#6F757C",
        "green-light": "#BEE3CC",
        white: "#FEF7EE",
        yellow: "#F6C768",
        orange: "#ED735D",
      },
    },
  },
  plugins: [],
};
