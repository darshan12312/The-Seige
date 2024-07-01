/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(324deg, rgba(1,1,1,1) 10%, rgba(84,81,81,1) 27%, rgba(0,0,0,1) 44%)',
      },
    },
  },
  plugins: [],
}

