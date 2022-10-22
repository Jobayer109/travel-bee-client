/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#7edbe5",

        secondary: "#42ce5b",

        accent: "#ef9873",

        neutral: "#231523",

        "base-100": "#FFFFFF",

        info: "#50B2E7",

        success: "#6EE2A6",

        warning: "#EF9206",

        error: "#F93469",
      },
    },
  ],
  plugins: [require("daisyui")],
};
