/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#8F2D56',
        color2: '#D81159',
        color3: '#218380',
        color4: '#73D2DE',
        color5: '#FFBC42',
        
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
