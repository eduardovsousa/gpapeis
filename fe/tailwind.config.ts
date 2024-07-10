import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#F2F5F3',
        'medium-gray': '#828282',
        'dark-gray': '#444648',
        'purple': '#7557E8',
        'light-dark': '#232323',
        'dark': '#1D1D1D',
        'red': '#DC3545',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
