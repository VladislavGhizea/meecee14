import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nero: "#000200",
        nero30: "rgba(0, 2, 0, 0.3)",
        verde: "#334B35",
        giallo: "#FDAE16",
      },
    },
  },
  plugins: [],
};
export default config;
