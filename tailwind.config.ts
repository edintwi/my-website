import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xsm": "375px",
      "sm": "475px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "bg-dark": "#191919",
        "soft-gray": "#666666",
        "light-text": "#A7A7A7",
        "heading": "#42446E",
        "heading-dark": "#CCCCCC",
        "p-dark": "#A7A7A7",
    },
      keyframes: {
        "slide-down": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        transform: "translate3d(0, 100%, 0)",
                    },
                },
         "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 30px))" },
        },
         "infinite-scroll-reverse": {
      "0%": { transform: "translateX(calc(-50% - 30px))" },
      "100%": { transform: "translateX(0)" },
    },
      },
      animation: {
        "slide-down": "slide-down",
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "infinite-scroll-reverse": "infinite-scroll-reverse 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
