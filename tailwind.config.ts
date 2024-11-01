import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDF1F1",
        secondary: "#A20100",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          secondary: {
            DEFAULT: "#A20100",
            foreground: "#000000",
          },
          primary: {
            DEFAULT: "#FDF1F1",
            foreground: "#000000",
          },
          // ... other colors
        },
      },
      dark: {
        colors: {
          secondary: {
            DEFAULT: "#A20100",
            foreground: "#000000",
          },
          primary: {
            DEFAULT: "#FDF1F1",
            foreground: "#000000",
          },
          // ... other colors
        },
      },
    },
  }),]
};
export default config;
