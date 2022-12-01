/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins':'Poppins, sans-serif',
      },
      width: {
        'img-home':'60vh',
        'text-home':'500px',
      },
      colors: {
        'purple-meet':'#7679DC',
        'white-meet':'#F4F4F4',
        'gray-meet':'#E1E1E1',
        'lavender-meet':'#DEDFFF',
        'dark-grey':'#838383',
      },
      backgroundImage: {
        'fy-img': "url('./assets/img2.jpg')",
        'cadastro':"url('./assets/cadastro.png')",
        'footer':"url('./assets/img-footer.png')"
      },
    },
  },
  plugins: [],
}
