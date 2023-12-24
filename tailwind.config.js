/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",

  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {

    
    colors: {
      primary: "#375B58",
      secondary:"#eb2907",
      secondaryOrange: "#F9D5DA",
      "main-bg": "#fff",
      "main-dark": "#071A1C",
      "card-dark": "#1D2E28",
      "dark-light": "#2A4038",
      "hover-color-dark": "#172621",
      dark: "#0d0d0d",
    },
    },
  },
  plugins: [],
}

