import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F4F1",
        surface: "#FFFFFF",
        ink: "#15171C",
        graphite: "#5B606B",
        line: "#D9DCD6",
        teal: {
          DEFAULT: "#1F6F5C",
          deep: "#164F42",
          wash: "#E3EEEA",
        },
        amber: "#F2A93B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
