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
        bg: {
          light: "#F8FAFC",
          dark: "#020617",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#020617",
        },
        border: {
          light: "#E2E8F0",
          dark: "#020617",
        },
        primary: {
          light: "#0A2540",
          dark: "#38BDF8",
        },
        accent: {
          light: "#6366F1",
          dark: "#818CF8",
        },
        text: {
          primary: {
            light: "#0F172A",
            dark: "#F8FAFC",
          },
          secondary: {
            light: "#475569",
            dark: "#CBD5E1",
          },
        },
        success: "#16A34A",
        danger: "#DC2626",
      },
    },
  },
  plugins: [],
};
