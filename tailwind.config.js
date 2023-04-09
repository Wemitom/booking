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
        landingPhone: 'url(/images/landingMainPhone.png)',
        about: 'url(/images/about.png)',
        decorator1: 'url(/images/decorator1.svg)',
        decorator2: 'url(/images/decorator2.svg)'
      },
      colors: {
        primary: '#445139',
        secondary: '#3C4831',
        accent: '#D5B36B'
      },
      screens: {
        '3xl': '1792px'
      }
    }
  },
  plugins: []
};
