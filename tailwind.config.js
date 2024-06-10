/** @type {import('tailwindcss').Config} */
const themer = require('tailwindcss-themer');

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0"
          },
          to: {
            backgroundPosition: "-200% 0"
          }
        },
        loop: {
          to: {
            offsetDistance: "100%",
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'xs': '475px',
      'sm': { 'max': '639px' },
      'md': { 'max': '767px' },
      'lg': { 'max': '1023px' },
      'xl': { 'max': '1279px' },
      '2xl': { 'max': '1535px' },
    },
  },
  plugins: [
    themer({
      palette: {
        extend: "nature"
      },
      radius: "smoothest",
      background: "dark",
      border: "dark",
      padding: "large",
      components: {
        button: {
          rounded: "2xl"
        }
      }
    })
  ],
};
