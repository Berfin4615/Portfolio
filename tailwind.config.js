
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '900px',     // ekstra küçük ekranlar (mobil)
      sm: '1000px',     // küçük ekranlar (tablet)
      md: '1200px',     // orta boy ekranlar (tablet landscape)
      lg: '1500px',    // büyük ekranlar (laptop)
      xl: '1700px',    // çok büyük ekranlar
      '2xl': '1536px'  // ultra geniş ekranlar
    },
  },
  plugins: [],
}