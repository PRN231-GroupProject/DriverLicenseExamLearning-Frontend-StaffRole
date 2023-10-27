/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :
      {
        'landscape':
            "url('https://firebasestorage.googleapis.com/v0/b/prn221-save-image.appspot.com/o/adrien-vajas-Apa13LFPClU-unsplash.jpg?alt=media&token=4e80a186-3341-47bb-994a-2e25591681a3')",
      },
    },
  },
  plugins: [],
}