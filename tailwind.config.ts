/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e8f4ff",
          100: "#d0e9ff",
          200: "#a8d4ff",
          300: "#6db8ff",
          400: "#3a9eff",
          500: "#0a84ff",
          600: "#0066e0",
          700: "#0052b8",
          800: "#003d8a",
          900: "#002a5e",
        },
        surface: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          800: "#1a1d23",
          850: "#141720",
          900: "#0f1117",
          950: "#090b0f",
        },
        electric: {
          blue: "#0a84ff",
          cyan: "#00d4ff",
          green: "#30d158",
          orange: "#ff9f0a",
          red: "#ff453a",
          purple: "#bf5af2",
          yellow: "#ffd60a",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "glass-light": "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
        "brand-gradient": "linear-gradient(135deg, #0a84ff 0%, #00d4ff 100%)",
        "dark-gradient": "linear-gradient(180deg, #0f1117 0%, #141720 100%)",
        "card-gradient": "linear-gradient(135deg, #1a1d23 0%, #141720 100%)",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "brand": "0 0 20px rgba(10,132,255,0.3), 0 4px 16px rgba(10,132,255,0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.3)",
        "glow-blue": "0 0 30px rgba(10,132,255,0.4)",
        "glow-green": "0 0 30px rgba(48,209,88,0.4)",
        "glow-orange": "0 0 30px rgba(255,159,10,0.4)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "slide-in-up": "slideInUp 0.3s ease-out",
        "fade-in": "fadeIn 0.2s ease-out",
        "spin-slow": "spin 3s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};