/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
        'dark-purple':'#081A51',
        'light-white':'rgba(255,255,255,0.18)',
        'dark-black' : '#1A202C',
        'dark-black-container' : '#1F2733',
        'text-white': 'white',
        'text-grey' : 'grey',
        'light-blue' : '#4FD1C5'
        

      }
    },
  },
  plugins: [],
}