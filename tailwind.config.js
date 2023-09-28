/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        color1: "#8F2D56",
        color2: "#D81159",
        color3: "#F3ECEF",
        color4: "#c43b71",
       
        
        
        lm: {
          text: "#0d0808",
          bg: "#f3ecef",
          primary: "#D81159",
          secondary: "#d9f2e9",
          accent: "#f82707",
        },
        dark: {
          text: "#f4f6f5",
          bg: "#171c1a",
          primary: "#D81159",
          secondary: "#0d261d",
          accent: "#fb7d6a",
        },
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
