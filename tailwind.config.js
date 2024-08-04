/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}

