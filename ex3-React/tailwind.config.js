/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      fontFamily: {
        plus_jakarta: ["Plus Jakarta Sans", "serif"], 
      },
      extend: {
        colors: {
          dark: "#1A202C", 
          'dark-100': "#596780", 
          primary: "#3563E9", 
          secondary: "#90A3BF", 
          'primary-light': "#C3D4E9", 
        }, 
      },
    },
    plugins: [],
  };
  