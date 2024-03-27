/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        yellowColor: "#ffb400",
        darkColor: "#111111",
        darkBrown: "#252525",
        lightBrown: "#333333",
        midBrown: '#2b2a2a'
      },
      fontFamily:{
      sans: ['poppins', 'sans-serif']
      }
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
  },
  plugins: [],
};
