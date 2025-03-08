/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        myriad: "Myriad Pro", // Add your custom font
      },

      fontFamily: {
        sf: ["SF Pro Display", "sans-serif"],
        bicubik: ["Bicubik", "sans-serif"],
      },

      container: {
        center: true,
        padding: "120px",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
