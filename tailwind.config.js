/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "8px 0px 8px 0px rgb(0 0 0 / 0.1)",
        // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      },

      animation: {
        "slide-down": "slide-down 0.5s forwards",
      },
      keyframes: {
        "slide-down": {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
