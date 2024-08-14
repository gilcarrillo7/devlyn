/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "3xl": "4rem",
        "2xl": "3rem",
        xl: "2rem",
        DEFAULT: "15px",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0C4C61",
        secondary: "#0098A7",
        tertiary: "#71C6B0",
        complementary: "#FFE882",
        complementary2: "#FA8334",
        blue: "#028C9C",
      },
    },
  },
  plugins: [],
};
