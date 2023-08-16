/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["PoppinsRegular", "sans-serif"],
        poppinsLight: ["PoppinsLight", "sans-serif"],
        poppinsSemibold: ["PoppinsSemibold", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
      },
      fontSize: {
        large: "3.25rem",
        h1: "2.25rem",
        h2: "1.5rem",
        h3: "1.25rem",
        default: "1rem",
        small: "0.825rem",
        smaller: "0.813rem",
        tiny: "0.625rem",
      },
      colors: {
        bodyColor: "#fafafa",
        ctaColor: "#00aeff",
        titleColor: "#333333",
        textColor: "#777777",
        thirtyColor: "#1e73be",
        miniCtaColor: "#f3e1d9",
        lightThemeColor: "#383f51",
        darkThemeColor: "#2a3445",
        colorText: "#8f98a3",
        tryGray: "#eaebec",
        iconShader: "#474e5e",
        lightGrayCTA: "#f3f5f7",
        darkLightGrayCTA: "#b8c2cc",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: { min: "350px", max: "576px" },
          md: { min: "577px", max: "768px" },
          lg: { min: "769px", max: "1024px" },
          xl: { min: "1025px" },
        },
      },
      fontWeight: {
        normalWeight: "400",
        mediumWeight: "500",
        semibolded: "600",
      },
    },
  },
  plugins: [],
};
