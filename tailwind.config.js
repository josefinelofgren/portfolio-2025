/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      typography: {
        fontFamily: {
          heading: ['DomaineText', 'sans-serif'],
          regular: ['FoundersGrotesk', 'sans-serif'],
        },
        fontWeight: {
          thin: "200",
          regular: "400",
          bold: "700",
        },
      },
      colors: {
        black: "#0F0F0F",
        dark: "#2f2f30",
        white: "#FFFFFF",
        beige: "#B89F8A",
        lightGrey: "#F2F2F2",
        grey: "#A0A0A0",
        darkGrey: "",
        menu: "#627a95",
        theme: "#627a95",
      },
    },
    keyframes: {
      'arrow-bounce': {
        '0%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(24px)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
    animation: {
      'arrow-bounce': 'arrow-bounce 0.5s ease-in-out',
    },
  },
  plugins: [],
  important: false,
}

