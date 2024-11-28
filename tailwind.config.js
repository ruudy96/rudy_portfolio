/** @type {import('tailwindcss').Config} */

const { default: flattenColorPalette, } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2lg':'1114px',
      // => @media (min-width: 1114px)

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        ungu1: '#00111C',
        ungu2: '#001523',
        ungu3: '#001A2C',
        ungu4: '#002137',
        ungu5: '#00253E',
        ungu6: '#002945',
        ungu7: '#002E4E',
        ungu8: '#003356',
        ungu9: '#003A61',
        ungu10: '#00406C',
      },
    }
  },
  plugins: [
    require('daisyui'),
    addVariablesForColors,
  ],
  daisyui: {
    themes: ["sunset"], 
    // themes: false, 
    // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  }
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars
  })
}
