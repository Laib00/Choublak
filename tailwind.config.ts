import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PureLeaf exact palette from screenshot
        olive:   { DEFAULT: "#8a8a5c", light: "#b5b585", dark: "#5c5c35" },
        khaki:   { DEFAULT: "#c8b98a", light: "#e8dcc0", lighter: "#f5f0e2" },
        tea:     { DEFAULT: "#7a4f2e", light: "#a0693e", dark: "#4a2e18" },
        ink:     "#1a1a1a",
        forest:  { DEFAULT: "#3a6b35", light: "#5a9452", dark: "#244d20" },
        warm:    { bg: "#f7f2e8", card: "#ede8dc", border: "#d8d0bc" },
      },
      fontFamily: {
        sans:    ["'Montserrat'", "system-ui", "sans-serif"],
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        script:  ["'Great Vibes'", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
