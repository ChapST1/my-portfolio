/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#bde6fb",
        secondary: "#1e2529",
        accent: "#2a3439",
        paragraph: "#bfbbbb",
      },
    },
  },
  plugins: [],
};
