/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        deskVector: 'url(/images/bgDesk.svg)',
        phoneVector: 'url(/images/bgPhone.svg)'
      },
      colors: {
        primary: '#445139',
        accent: '#D5B36B'
      }
    }
  },
  plugins: []
};
