/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--calsync-border))",
        input: "hsl(var(--calsync-input))",
        ring: "hsl(var(--calsync-ring))",
        background: "hsl(var(--calsync-background))",
        foreground: "hsl(var(--calsync-foreground))",
        primary: {
          DEFAULT: "hsl(var(--calsync-primary))",
          foreground: "hsl(var(--calsync-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--calsync-secondary))",
          foreground: "hsl(var(--calsync-secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--calsync-accent))",
          foreground: "hsl(var(--calsync-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--calsync-popover))",
          foreground: "hsl(var(--calsync-popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--calsync-radius)",
        md: "calc(var(--calsync-radius) - 2px)",
        sm: "calc(var(--calsync-radius) - 4px)",
      },
    },
  },
}
