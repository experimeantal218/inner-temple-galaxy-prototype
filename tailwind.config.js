/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        witch: {
          50: "#f8f5ff",
          100: "#efe8ff",
          200: "#dcccfb",
          300: "#c0a6f5",
          400: "#9b76ed",
          500: "#7b50e6",
          600: "#6438cb",
          700: "#522ea7",
          800: "#3f257f",
          900: "#2f1c60",
        },
        galaxy: { 700: "#0b0b2b", 800: "#080821", 900: "#050516" }
      },
      boxShadow: { soft: "0 4px 30px rgba(123, 80, 230, .15)" },
      animation: { twinkle: "twinkle 3s ease-in-out infinite", float: "float 8s ease-in-out infinite" },
      keyframes: {
        twinkle: { "0%,100%": { opacity: .4 }, "50%": { opacity: 1 } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
      },
    },
  },
  plugins: [],
}
