/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // started from daisy 'lemonade'
        light: {
          primary: "#519903",
          secondary: "#facc15",
          "secondary-focus": "#fcd34d",
          accent: "#ffffff",
          "accent-focus": "#d9f99d",
          neutral: "#064e3b",
          "base-100": "#fef3c7",
          info: "#C8E1E7",
          success: "#DEF29F",
          warning: "#F7E589",
          error: "#F2B6B5",
        },
      },
      {
        // started from daisy 'night', now to be named, lemonade evening...
        dark: {
          primary: "#fde047",
          secondary: "#065f46",
          accent: "#ffffff",
          "accent-focus": "#faebd7",
          neutral: "#fef9c3",
          "base-100": "#061e11",
          "base-content": "#fde047",
          info: "#0284c7",
          success: "#059669",
          warning: "#ea580c",
          error: "#be123c",
        },
      },
    ],
  },
};
