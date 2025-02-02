/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Clash-Display", "sans-serif"],
        second: ["Satoshi", "sans-serif"],
      },
      animation: {
        "up-down": "upDown 4s infinite ease-in-out",
        "down-up": "downUp 4s infinite ease-in-out",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        downUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
    }, // ✅ Properly closed extend object
  },
  plugins: [],
};
