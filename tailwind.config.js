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
        textColor: "#777777",
        lightThemeColor: "#383f51",
        darkThemeColor: "#2a3445",
        lightGrayCTA: "#f3f5f7",
        darkLightGrayCTA: "#b8c2cc",
        wishlistHeartColor: "#DC143C",
      },
      screens: {
        xs320: { max: "320px" },
        xs360: { max: "360px" },
        sm361: "361px",
        md480: "480px",
        md800: "800px",
        lg1023: "1023px",
        lg1120: "1120px",
        xl1300: "1300px",
        xl2048: "2048px",
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
