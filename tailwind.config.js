/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      "space-grotesk": ["Space Grotesk", "sans-serif"],
      "dancing-script": ["Dancing Script", "cursive"],
    },
    extend: {
      colors: {
        primary: "#F97316",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
