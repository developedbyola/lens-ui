import { defineRecipe } from "@pandacss/dev";

export const iconButton = defineRecipe({
  className: "icon-btn",
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

    "--font-size": "1.4rem",
    fontSize: "var(--font-size)",
    fontWeight: "500",

    "--width": "2.0rem",
    "--height": "2.0rem",
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
      "12": {
        "--height": "2rem",
        "--width": "2rem",
      },
      "13": {
        "--height": "2rem",
        "--width": "2rem",
      },
      "14": {
        "--height": "2rem",
        "--width": "2rem",
      },
      "16": {
        "--height": "2rem",
        "--width": "2rem",
      },
      "18": {
        "--height": "2rem",
        "--width": "2rem",
      },
      "20": {
        "--height": "2rem",
        "--width": "2rem",
      },
      "24": {
        "--height": "2.4rem",
        "--width": "2.4rem",
      },
      "28": {
        "--height": "2.8rem",
        "--width": "2.8rem",
      },
      "32": {
        "--height": "3.2rem",
        "--width": "3.2rem",
      },
      "36": {
        "--height": "3.6rem",
        "--width": "3.6rem",
      },
      "40": {
        "--height": "4rem",
        "--width": "4rem",
      },
      "48": {
        "--height": "4.8rem",
        "--width": "4.8rem",
      },
      "56": {
        "--height": "5.6rem",
        "--width": "5.6rem",
      },
      "64": {
        "--height": "5.6rem",
        "--width": "5.6rem",
      },
    },

    shape: {
      square: {
        "--radii": "0rem",
      },
      round: {
        "--radii": ".6rem",
      },
      rounded: {
        "--radii": "1.2rem",
      },
      circle: {
        "--radii": "50%",
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
    size: "20",
    tone: "blue",
    shape: "round",
    visual: "filled",
  },
});
