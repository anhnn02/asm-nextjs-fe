/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "bgr": "var(--bgr)",
        "title": "var(--title)",
        "gray": "var(--gray)",
        "disable": "var(--disable)",
        "star": "var(--star)",
      },
    },
  },
  prefix: "tw-",
  plugins: [require("daisyui")],
}
