/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      backgroundImage: {
        deskVector: 'url(/images/bgDesk.svg)',
        phoneVector: 'url(/images/bgPhone.svg)',
        landingDesk: 'url(/images/landingMainDesk.png)',
        landingPhone: 'url(/images/landingMainPhone.png)'
      },
      colors: {
        primary: '#445139',
        accent: '#D5B36B'
      },
      screens: {
        '3xl': '1792px'
      }
    }
  },
  plugins: []
};
