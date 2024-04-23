import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xxs': '360px',
        'xs': '360px',
        'sm': '768px',
  
        'md': '968px',
  
        'lg': '1200px',
  
        'xl': '1400px',
  
        '2xl': '1600px',
      }
    },
  },
  plugins: [],
};
export default config;
