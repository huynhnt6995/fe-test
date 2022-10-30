/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
        },
        secondary: {
          300: "#8FE9D0",
        },
        light: {
          DEFAULT: "#0000005C"
        },
        dark: {
          600: "#2E2E2E",
          500: "#414141",
          100: "#777777",
          200: "#707070",
        },
        gray: {
          400: "#777777"
        }
      },
      container: {
        screens: {
          "lg": '960px',
          "xl": "960px",
          "2xl": "960px"
        }
      },
      spacing: {
        '10px': '0.625rem',
        '312px': "19.5rem",
        "264px": "16.5rem"
      },
      fontSize: {
        'xxs': '0.6875rem',
        "15px": "0.9375rem",
        '22px': '1.375rem',
        '25px': '1.5625rem',
      },
      lineHeight: {
        '22px': '1.375rem',
      },
      fontFamily: {
        'inter': ['"Inter"'],
      }

    },
  },
  plugins: [],
}
