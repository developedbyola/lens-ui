import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  className: "btn",
  description:
    "A versatile button with tone and visual variants using CSS variables",
  base: {
    gap: "2",
    cursor: "pointer",
    alignItems: "center",
    fontFamily: "inherit",
    display: "inline-flex",
    justifyContent: "center",
    transition: "all 150ms ease-in-out",

    "--px": "1rem",
    px: "var(--px)",

    "--font-size": "1.4rem",
    fontSize: "var(--font-size)",
    fontWeight: "500",

    "--width": "auto",
    "--height": "3.2rem",
    width: "var(--width)",
    height: "var(--height)",

    "--radii": "0.6rem",
    rounded: "var(--radii)",

    border: ".5px solid",

    _focusWithin: {
      outline: "2px solid",
      outlineOffset: "-2px",
      outlineColor: "interaction.focus",
    },
    _disabled: {
      opacity: 0.5,
      _dark: {
        opacity: 0.75,
      },
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },

  variants: {
    size: {
      xs: {
        "--px": ".8rem",
        "--height": "2.4rem",
        "--font-size": "1.2rem",
      },
      sm: {
        "--px": "1rem",
        "--height": "2.8rem",
        "--font-size": "1.3rem",
      },
      base: {
        "--px": "1.2rem",
        "--height": "3.2rem",
        "--font-size": "1.4rem",
      },
      lg: {
        "--px": "1.2rem",
        "--height": "3.6rem",
        "--font-size": "1.4rem",
      },
      xl: {
        "--px": "1.2rem",
        "--height": "4rem",
        "--font-size": "1.6rem",
      },
    },

    shape: {
      flat: {
        "--radii": "0rem",
      },
      round: {
        "--radii": ".6rem",
      },
      pill: {
        "--radii": "99.9rem",
      },
      rounded: {
        "--radii": "1.2rem",
      },
    },

    span: {
      true: {
        "--width": "full",
      },
    },

    link: {
      true: {
        "--px": "0rem",
        "--radii": "0rem",
        "--height": "auto",
        color: "colorPalette.fgSubtle",
        borderColor: "color-mix(in oklab, white 0%, transparent)",
        backgroundColor: "color-mix(in oklab, white 0%, transparent)",
        _hover: {
          color: "colorPalette.fg",
        },
      },
    },

    visual: {
      filled: {
        color: "colorPalette.filled.fg",
        backgroundColor: "colorPalette.filled.bg",
        borderColor: "color-mix(in oklab, {colors.white} 5%, transparent)",
        _hover: {
          backgroundColor: "colorPalette.filled.hover.bg",
        },
      },
      outlined: {
        color: "colorPalette.outlined.fg",
        borderColor: "colorPalette.outlined.border",
        backgroundColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
        _hover: {
          borderColor: "colorPalette.outlined.hover.border",
          backgroundColor: "colorPalette.outlined.hover.bg",
        },
      },
      soft: {
        color: "colorPalette.soft.fg",
        backgroundColor: "colorPalette.soft.bg",
        borderColor: "color-mix(in oklab, {colors.white} 5%, transparent)",
        _hover: {
          backgroundColor: "colorPalette.soft.hover.bg",
        },
      },
      ghost: {
        color: "colorPalette.ghost.fg",
        borderColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
        backgroundColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
        _hover: {
          backgroundColor: "colorPalette.ghost.hover.bg",
        },
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
    link: false,
    span: false,
    tone: "blue",
    size: "base",
    shape: "round",
    visual: "filled",
  },
});
