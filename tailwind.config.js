/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'index.html'],
  theme: {
    extend: {
      colors: {
        primary: "#FD3D57",
        secondary: {
          100: "#E2E2D5",
          200: "#888883"
        }
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto',sans-serif"
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}