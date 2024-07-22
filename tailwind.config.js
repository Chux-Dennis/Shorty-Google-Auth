/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Grayfel: ["Grayfel"],
        Outfit: ["Outfit"],
        Nova: ["Nova"],
        Radio: ["Radio"],
      },
      colors: {
        hero: "#fcbf49",
        buttonColor: "#1b7593",
        neutral: "#eae2b7",
        reasons: "#003049",
      },
    },
    screens: {
      xs: "360px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
