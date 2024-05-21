import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        black:{
          DEFAULT: "#000000",
          foreground: "#000000",
        },
        darkgreen:{
          DEFAULT: "#08433F",
          foreground: "#08433F",
        },
        lightgreen:{
          DEFAULT: "#d9ed92",
          foreground: "#d9ed92",
        },
        gold: {
          DEFAULT: "#F3D592",
          foreground: "#F3D592",
        },
      },
    },
  },
  plugins: [],
};
export default config;
