/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent:"#0989ff",
        topHeadingPrimary:"#010f1c",
        topHeadingSecondary:'#021d350',
        pink:'#FD4B68',
      },
      container:{
        center:true,
        padding:"15px"
      },
    },
  },
  plugins: [],
}

