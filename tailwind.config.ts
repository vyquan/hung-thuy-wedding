import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        banner: "url('/images/hungthuy/ht-banner-crop_optimized.jpg')",
        countdown: "url('/images/effects/bg-countdown.jpg')",
      },
      fontFamily: {
        parfumerieScriptPro: ["var(--font-parfumerieScriptPro)"],
        questrial: ["var(--font-questrial)"],
        dancingScript: ["var(--font-dancingScript)"],
      },
      colors: {
        "red-love": "#df4759",
      },
    },
  },
  plugins: [],
};
export default config;
