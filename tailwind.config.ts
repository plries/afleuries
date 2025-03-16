import { animate } from "motion";
import { animations } from "motion/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
            "0%": { opacity: "1", filter: "blur(0)" },
            "100%": { opacity: "0", filter: "blur(10px)" },
        },
      },
      animation: {
        fadeOut: "fadeOut 0.3s ease-in-out 5s forwards",
      },
      colors: {
        red: {
          100: "var(--color-red-100)",
        },
        blue: {
          100: "var(--color-blue-100)",
          10: "var(--color-blue-10)",
        },
        green: {
          100: "var(--color-green-100)",
          10: "var(--color-green-10)",
        },
        tan: {
          100: "var(--color-tan-100)",
          90: "var(--color-tan-90)",
          50: "var(--color-tan-50)",
          40: "var(--color-tan-40)",
          30: "var(--color-tan-30)",
          20: "var(--color-tan-20)",
          10: "var(--color-tan-10)",
        },
      },
      fontFamily: {
        geologica: "var(--font-geologica)",
        instrument: "var(--font-instrument-serif)",
      },
    },
  },
  plugins: [],
} satisfies Config;