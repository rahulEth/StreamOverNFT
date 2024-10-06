module.exports = {
  content: ['./pages/**/*.{html,js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // custom backgrounds here...
      },

      fontSize: {
        big: ['70px'],
        small: ['12px'],
        web_normal: ['14px'],
        web_large: ['36px'],
        web_title: ['48px'],
        mobile_normal: ['10px'],
        mobile_large: ['24px'],
        mobile_title: ['36px']
      }
    }
  },
  plugins: []
}
