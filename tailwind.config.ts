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
        primary: "#26F0F1",
        "border-color": "#c3c3c3c3",
        "text-color": "#3e3e3e",
      },
    },
    screens: {
      desktop: { min: "1200px" },
      laptop: { max: "1199px" },
      mobile: { max: "639px" },
    },
  },
  plugins: [],
};
export default config;
