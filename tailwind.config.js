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
      fieldColor: "#F5F5F5",
      submitBtn: "#58C08E",
      firstCard: "rgba(157, 210, 184, 0.46)",
      secondCard: "rgba(255, 225, 122, 0.23)",
    },
    extend: {
      height: {
        firstImage: "919px",
        secondImage: "752px",
        thirdImage: "635px",
        popupMenuHeight: "226px",
      },
      width: {
        popupMenuWidth: "512px",
      },
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
