import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '12': '12px',
        '30': '30px'
      },
      opacity: {
        '005': '0.05',
        '1': '0.1',
        '15': '0.15',
        '85': '0.85',
        '97': '0.97'
      },
      borderWidth: {
        '001': '0.001px',
        '5': '5px',
      },
      fontSize: {
        'xxs': '0.55rem', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainColor: "#080c44",
        mainColorDeg: "#171c5c",
        mainColor2: "#ffffff",
        purpleButton: "#9C3FE4",
        orangeButton: "#C65647",
      },
    },
  },
  plugins: [],
} satisfies Config;
