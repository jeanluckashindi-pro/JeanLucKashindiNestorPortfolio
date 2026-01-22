import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        'roboto': ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'bangers': ['Bangers', 'cursive'],
        'bebas': ['Bebas Neue', 'cursive'],
        'cookie': ['Cookie', 'cursive'],
        'josefin': ['Josefin Sans', 'sans-serif'],
        'kaushan': ['Kaushan Script', 'cursive'],
        'marck': ['Marck Script', 'cursive'],
        'oleo': ['Oleo Script', 'cursive'],
        'righteous': ['Righteous', 'cursive'],
        'story': ['Story Script', 'cursive'],
        'tangerine': ['Tangerine', 'cursive'],
        'yellowtail': ['Yellowtail', 'cursive'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;