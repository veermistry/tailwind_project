module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#FF6363',
          200: '#FF6363'
        }
      },
      fontFamily: {
          main: ['Poppins']
      },

      plugins: [
        require('@tailwindcss/custom-forms'),
      ]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
