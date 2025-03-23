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
        "fade-out": {
          "0%": { opacity: "1", filter: "blur(0)" },
          "100%": { opacity: "0", filter: "blur(10px)" },
        },
        "pulse-scale": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-out": "fade-out 0.3s ease-in-out 5s forwards",
        "pulse-scale": "pulse-scale 2s ease-in-out infinite",
      },
      colors: {
        red: {
          100: "var(--color-red-100)",
          10: "var(--color-red-10)",
        },
        blue: {
          100: "var(--color-blue-100)",
          10: "var(--color-blue-10)",
        },
        green: {
          100: "var(--color-green-100)",
          10: "var(--color-green-10)",
        },
        orange: {
          100: "var(--color-orange-100)",
          10: "var(--color-orange-10)",
        },
        tan: {
          100: "var(--color-tan-100)",
          90: "var(--color-tan-90)",
          60: "var(--color-tan-60)",
          50: "var(--color-tan-60)",
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
      dropShadow: {
        doodle: "0px 4px 4px #27272780",
      },
    },
  },
  plugins: [],
} satisfies Config;
