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
      },
      keyframes: {
        crossTop: {
          to: {
            transform: 'translateY(6px) rotate(45deg)',
            width: '3rem'
          }
        },
        hamburgerTop: {
          from: {
            transform: 'translateY(6px) rotate(45deg)',
            width: '3rem'
          }
        },
        crossBottom: {
          to: {
            transform: 'translateY(-6px) rotate(-45deg)',
            width: '3rem'
          }
        },
        hamburgerBottom: {
          from: {
            transform: 'translateY(-6px) rotate(-45deg)',
            width: '3rem'
          }
        },
        fadeIn: {
          from: {
            opacity: 0
          }
        },
        fadeOut: {
          to: {
            opacity: 0
          }
        }
      },
      animation: {
        'cross-top': 'crossTop 0.3s ease-in-out forwards',
        'hamburger-top': 'hamburgerTop 0.3s ease-in-out forwards',
        'cross-bottom': 'crossBottom 0.3s ease-in-out forwards',
        'hamburger-bottom': 'hamburgerBottom 0.3s ease-in-out forwards',
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'fade-out': 'fadeOut 0.3s ease-in-out forwards'
      }
    }
  },
  plugins: []
};
