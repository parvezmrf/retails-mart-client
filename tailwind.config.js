/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        retailsmart: {

          "primary": "#ff7701",

          "secondary": "#ff7600",

          "accent": "#C149AD",

          "neutral": "#021431",

          "base-100": "#FFFFFF",

          "info": "#93E6FB",

          "success": "#80CED1",

          "warning": "#EFD8BD",

          "error": "#E58B8B",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
