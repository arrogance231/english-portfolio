import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      animation: {
        gradient: "gradient 6s linear infinite",
        marquee: "marquee 5s linear infinite",
        circular: "circular 5s linear infinite",
        rotate: "rotate 2s linear",
        swap: "swap 4s ease-in-out",
        arcUp: "arcUp 2s ease-in-out infinite",
        arcDown: "arcDown 2s ease-in-out infinite",
        moveUpRight: "moveUpRight 2s ease-in-out infinite",
        moveDownLeft: "moveDownLeft 2s ease-in-out infinite",
        appearFromCenter: "appearFromCenter 1.5s ease-in-out forwards",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "100% 0%",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "0% 100%",
          },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        circular: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        swap: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0)" },
        },
        arcUp: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(50px, -50px) rotate(180deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        arcDown: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-50px, 50px) rotate(-180deg)" },
          "100%": { transform: "translate(0, 0) rotate(-360deg)" },
        },
        moveUpRight: {
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "100%": {
            transform: "translateX(150px) translateY(-100px) rotate(180deg)",
          },
        },
        moveDownLeft: {
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "100%": {
            transform: "translateX(-150px) translateY(100px) rotate(-180deg)",
          },
        },
        appearFromCenter: {
          "0%": {
            opacity: 0,
            transform: "scale(0.5)",
            "transform-origin": "center",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
            "transform-origin": "center",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-motion")],
};

export default config as unknown as Config;
