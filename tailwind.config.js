module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FBF221',
        },
        pink: {
          DEFAULT: '#E7A4BB',
        },
      },
      fontFamily: {
        sans: ['Inter var'],
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
