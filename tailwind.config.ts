import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F0F7FF",
          100: "#E0EFFE",
          200: "#BAE0FD",
          300: "#7DC5FC",
          400: "#38A6F8",
          500: "#0E87E9",
          600: "#026AC7",
          700: "#0354A1",
          800: "#074784",
          900: "#0B3C6F",
          950: "#08274B",
        },
        navy: {
          800: "#0E2439",
          900: "#091E33",
          950: "#051322",
        },
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
          950: "#042F2E",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        surface: {
          warm: "#FDFBF7",
          subtle: "#F8FAFC",
          muted: "#F1F5F9",
          card: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)",
        card: "0 10px 30px -5px rgba(9, 30, 51, 0.06), 0 4px 6px -2px rgba(9, 30, 51, 0.02)",
        hover: "0 20px 35px -5px rgba(9, 30, 51, 0.1), 0 10px 10px -5px rgba(9, 30, 51, 0.04)",
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
