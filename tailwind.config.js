/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        // Page backgrounds
        bg: {
          light: "#F4F6FB",  // cool neutral gray-blue
          dark: "#070A14",   // deep institutional navy-black
        },
        surface: {
          light: "#FFFFFF",
          dark: "#0E1326",   // layered card surface
        },
        border: {
          light: "#DCE3EF",
          dark: "#1C2340",
        },
        primary: {
          light: "#0B1F3B",  // flagship dark-blue (navbar/logo harmony)
          dark: "#4DA3FF",   // crisp fintech blue for CTAs
        },
        accent: {
          light: "#4F6BED",  // restrained indigo-blue
          dark: "#7C92FF",
        },
        text: {
          primary: {
            light: "#0F172A",
            dark: "#F1F5F9",
          },
          secondary: {
            light: "#5B677D",
            dark: "#B6C2D9",
          },
        },
        success: "#1FA971",   // crypto-green, softer than neon
        danger: "#E04444",    // controlled red
        warning: "#F2B84B",   // muted amber, not cartoonish
        info: "#2EA4FF",      // market-data blue
      },
    },
  },
  plugins: [],
};
