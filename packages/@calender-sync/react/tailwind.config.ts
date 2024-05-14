import { type Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--calender-sync-border))",
        input: "hsl(var(--calender-sync-input))",
        ring: "hsl(var(--calender-sync-ring))",
        background: "hsl(var(--calender-sync-background))",
        foreground: "hsl(var(--calender-sync-foreground))",
        primary: {
          DEFAULT: "hsl(var(--calender-sync-primary))",
          foreground: "hsl(var(--calender-sync-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--calender-sync-secondary))",
          foreground: "hsl(var(--calender-sync-secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--calender-sync-accent))",
          foreground: "hsl(var(--calender-sync-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--calender-sync-popover))",
          foreground: "hsl(var(--calender-sync-popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--calender-sync-radius)",
        md: "calc(var(--calender-sync-radius) - 2px)",
        sm: "calc(var(--calender-sync-radius) - 4px)",
      },
    },
  },
} satisfies Config

export default config
