import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
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
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      primary: {
        100: "#33B3EF",
        200: "#3373EF",
      },
      neutral: {
        100: "#667085",
        200: "#101828",
        300: "#232323",
        400: "#060A33",
        500: "#00112D",
      },
      subtle: {
        100: "#F1F1F1",
        200: "#CBCBCB",
        300: "#878787",
        400: "#868686",
      },
    },
  },
  plugins: [],
};
export default config;
