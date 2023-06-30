/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fbbd23",
        
"secondary": "#D9D9D9",
        
"accent": "#F5F5F5",
        
"neutral": "#ADA7A7",
        
"base-100": "#1d232a",
        
"info": "#AFADAD",
        
"success": "#36d399",
        
"warning": "#fbbd23",
        
"error": "#f87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

