import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        serif: ["DM Serif Display", "serif"],
      },
      colors: {
        c1: "#0a0a0f",
        c2: "#12121a",
        c3: "#1a1a26",
        acc: "#4ade80",
        acc2: "#22d3ee",
        acc3: "#a78bfa",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
