/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Martian Mono", "monospace"],
        accent: ["Arizonia", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        'brand-green': "#008753",
        'brand-blue': "#2F6DB5",
        'brand-yellow': "#FFE066",
        'brand-green-hover': "#07603D",
      },
      keyframes: {
      'fade-up': {
        '0%': { opacity: 0, transform: 'translateY(30px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(.4,0,.2,1) forwards',
      },
    },
  },
  plugins: [],
}