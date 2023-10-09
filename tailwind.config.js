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
    extend: {
      backgroundImage: {
        "first-image": "url(assets/Images/first-image.png)",
        "second-image": "url(assets/Images/second-image.png)",
        "third-image": "url(assets/Images/third-image.png)",
        "logo-image": "url(assets/Images/logo-image.png)",
        "logo-label": "url(assets/Images/logo-label.png)",
      },
    },
  },
  plugins: [],
};
