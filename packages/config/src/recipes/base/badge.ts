import { defineRecipe } from "@pandacss/dev";

export const badge = defineRecipe({
  className: "badge",
  base: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",

    "--px": "1rem",
    px: "var(--px)",

    "--radii": "0.6rem",
    rounded: "var(--radii)",

    "--font-size": "1.2rem",
    fontSize: "var(--font-size)",
    fontWeight: "500",

    "--width": "auto",
    "--height": "auto",
    width: "var(--width)",
    height: "var(--height)",

    border: ".5px solid",
  },
  variants: {
    size: {
      xs: {
        "--px": ".8rem",
        "--height": "2rem",
        "--font-size": "1.2rem",
      },
      sm: {
        "--px": ".8rem",
        "--height": "2.4rem",
        "--font-size": "1.3rem",
      },
      lg: {
        "--px": "1rem",
        "--height": "3.2rem",
        "--font-size": "1.4rem",
      },
      xl: {
        "--px": "1.2rem",
        "--height": "3.6rem",
        "--font-size": "1.4rem",
      },
      base: {
        "--px": "1rem",
        "--height": "2.8rem",
        "--font-size": "1.4rem",
      },
    },

    shape: {
      flat: {
        "--radii": "0rem",
      },
      round: {
        "--radii": ".6rem",
      },
      rounded: {
        "--radii": "1.2rem",
      },
      pill: {
        "--radii": "99.9rem",
      },
    },

    visual: {
      filled: {
        color: "colorPalette.filled.fg",
        backgroundColor: "colorPalette.filled.bg",
        borderColor: "color-mix(in oklab, {colors.white} 5%, transparent)",
      },
      soft: {
        color: "colorPalette.soft.fg",
        backgroundColor: "colorPalette.soft.bg",
        borderColor: "color-mix(in oklab, {colors.white} 5%, transparent)",
      },
      outlined: {
        color: "colorPalette.outlined.fg",
        borderColor: "colorPalette.outlined.border",
        backgroundColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
      },
      ghost: {
        color: "colorPalette.ghost.fg",
        borderColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
        backgroundColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
      },
    },

    tone: {
      red: { colorPalette: "red" },
      orange: { colorPalette: "orange" },
      amber: { colorPalette: "amber" },
      yellow: { colorPalette: "yellow" },
      lime: { colorPalette: "lime" },
      green: { colorPalette: "green" },
      emerald: { colorPalette: "emerald" },
      teal: { colorPalette: "teal" },
      cyan: { colorPalette: "cyan" },
      sky: { colorPalette: "sky" },
      blue: { colorPalette: "blue" },
      indigo: { colorPalette: "indigo" },
      violet: { colorPalette: "violet" },
      purple: { colorPalette: "purple" },
      fuchsia: { colorPalette: "fuchsia" },
      pink: { colorPalette: "pink" },
      rose: { colorPalette: "rose" },
      slate: { colorPalette: "slate" },
      gray: { colorPalette: "gray" },
      zinc: { colorPalette: "zinc" },
      neutral: { colorPalette: "neutral" },
      stone: { colorPalette: "stone" },
    },
  },

  defaultVariants: {
    size: "base",
    tone: "blue",
    shape: "round",
    visual: "filled",
  },
});
