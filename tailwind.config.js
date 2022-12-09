/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e3c04c",
          secondary: "#8a5277",
          accent: "#FFF4FF",
          neutral: "#676D79",
          "base-100": "#32353c",
          info: "#ebd077",
          success: "#6a9050",
          warning: "#FBBD23",
          error: "#FF7277",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
