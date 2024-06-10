/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  safelist: ["isToggled"],
  content: [

    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      loop: {
        to: {
          "offset-distance": "100%",
        },
      },
    },
  },
  plugins: [
    themer({
      palette: {
        extend: "nature"
      },
      radius: "smoothest",
      background: "light",
      border: "light",
      padding: "large",
      components: {
        button: {
          rounded: "2xl"
        }
      }
    })
  ],
};
