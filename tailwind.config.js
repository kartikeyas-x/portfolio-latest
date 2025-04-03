module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        devanagari: ['Noto Sans Devanagari', 'Noto Sans', 'sans-serif'],
        gurmukhi: ['Noto Sans Gurmukhi', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        light: {
          bg: "#f5f2eb",
          primary: "#6b563c",
          secondary: "#4a3f35",
        },
        dark: {
          bg: "#1a1614",
          primary: "#c4b5a1",
          secondary: "#e8e3d9",
        },
      },
      animation: {
        'dark-spread': 'darkSpread 1s ease-out',
      },
      keyframes: {
        darkSpread: {
          '0%': { 
            opacity: '0',
            transform: 'translate(-50%, -50%) scale(0)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        }
      }
    },
  },
  plugins: [],
};