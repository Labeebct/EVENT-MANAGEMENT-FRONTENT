/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cusBlue:'#F8E8EE',
        cusOrange:'#D82C34'
      },
      boxShadow: {
        'box': '0px 0px 8px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        cagliostro: ['Cagliostro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        poiretOne: ['Poiret One', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'scope-one': ['Scope One', 'sans-serif'],
      },textShadow: {
        'sm': '0px 0px 5px rgba(0, 0, 0, 0.5)',
        'md': '1px 1px 10px rgba(0, 0, 0, 0.5)',
        'lg': '2px 2px 15px rgba(0, 0, 0, 0.5)',
        'xl': '4px 4px 20px rgba(0, 0, 0, 0.5)',
    },
      theme: {
        screens: {

          'sm': '640px',
    
          'md': '868px',
    
          'lg': '1004px',
    
          'xl': '1280px',
    
          '2xl': '1536px',
          
        }
      }
    },
  },
  plugins: [],  
}
