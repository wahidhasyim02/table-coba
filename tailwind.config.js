/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      backgroundImage: {
        "hero-light":
          "url('https://wahidhasyim02.github.io/public/img/bg_light.jpg')",
        "hero-dark":
          "url('https://wahidhasyim02.github.io/public/img/bg_dark.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
