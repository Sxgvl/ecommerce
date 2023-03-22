/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, css}", "./src/*.css", "./public/img/*.{jpg, png}", "./public/*.js"],
  theme: {
    screens: {
      sm: '480px', 
      md: '768px',
      lg: '976px',
      xl: '1440px' 
    },
    container : {
      center : true,
      padding : '1rem',
      
    },
    extend: {
      fontFamily : {
        Poppins : 'Poppins, sans-serif'
      }, 
      colors : {
        'primary' : '#eb4d4b'
      }  
    },
  },
  variants: {
    extend: {
      display : ['group-hover'],
      visibility : ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
