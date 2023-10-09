/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      mainText: "#FFFFFF",
      menuText: "#000000",
      mainArrow: "#ED8380",
      alternateArrow: "#FFE17A",
      footerText: "#F5F5F5",
      copyrightText: "#A7A7A7",
      button: "#58C08E",
    },
    extend: {},
  },
  plugins: [],
};
