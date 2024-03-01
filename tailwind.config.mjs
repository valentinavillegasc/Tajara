/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#BC5527",
        primaryLight: "#EC6637",
        secondaryDark: "#414142",
        secondaryLight: "#EDDBBE",
      },
    },
  },
  plugins: [],
};
