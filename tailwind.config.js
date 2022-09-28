/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins']
      },
      colors: {
        primary: '#F63C3C'
      },
      keyframes: {
        show: {
          '0%': { transform: 'translate3d(0,-3rem,0)', opacity: '0' }
        }
      },
      animation: {
        show: 'show 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }
    }
  },
  plugins: []
}
