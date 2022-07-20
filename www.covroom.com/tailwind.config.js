/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Sharp Sans', 'sans'],
    },
    colors: {
      "primary": "#7D2ED3",
      "secondary": "#B171FF",
      "blue": "#245E94",
      "white": "#F4F4F4",
      "base-100": "#ffffff",
      "black": "#333333",
      "red": "#E52F2A",
      "grey": "#C2C6CC",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7D2ED3",
          "secondary": "#B171FF",
          "blue": "#245E94",
          "white": "#F4F4F4",
          "base-100": "#ffffff",
          "black": "#333333",
          "red": "#E52F2A",
          "grey": "#C2C6CC",
        },
      },
    ],
  },
}
