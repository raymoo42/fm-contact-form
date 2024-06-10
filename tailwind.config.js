/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Karla']
      },
      colors: {
        'green': {
          200: 'hsl(148, 38%, 91%)',
          600: 'hsl(169, 82%, 27%)'
        },
        'red': 'hsl(0, 66%, 54%)',
        'grey': {
          500: '#87a3a6',
          900: '#2b4246'
        },
        'white': '#ffffff'
      }
    },
  },
  plugins: [],
}

