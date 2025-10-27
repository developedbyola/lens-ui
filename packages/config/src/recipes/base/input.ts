import { defineRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const input = defineRecipe({
  className: "input",
  base: {
    ...baseStyles.input,

    "--px": "0.8rem",
    "--height": "3.2rem",
    "--radii": "0.6rem",
    "--font-size": "1.4rem",

    px: "var(--px)",
    height: "var(--height)",
    rounded: "var(--radii)",
    fontSize: "var(--font-size)",
  },
  variants: {
    shape: {
      round: {
        "--radii": "0.6rem",
      },
      flat: {
        "--radii": "0rem",
      },
      rounded: {
        "--radii": "1.2rem",
      },
      pill: {
        "--radii": "99.9rem",
      },
    },

    size: {
      xs: {
        "--px": "1.2rem",
        "--height": "2.8rem",
        "--font-size": "1.2rem",
      },
      sm: {
        "--px": "1.2rem",
        "--height": "3.2rem",
        "--font-size": "1.4rem",
      },
      base: {
        "--px": "1.2rem",
        "--height": "3.6rem",
        "--font-size": "1.4rem",
      },
      lg: {
        "--px": "1.4rem",
        "--height": "4rem",
        "--font-size": "1.4rem",
      },
      xl: {
        "--px": "1.6rem",
        "--height": "4.8rem",
        "--font-size": "1.6rem",
      },
    },

    visual: {
      ghost: {
        backgroundColor: "color-mix(in oklab, white 0%, transparent)",
      },
      filled: {
        backgroundColor: "{colors.bg.surface}",
      },
      outlined: {
        outlineColor: "{colors.border}",
        backgroundColor: "color-mix(in oklab, white 5%, transparent)",
        _focusWithin: {
          outline: "2px solid",
          outlineOffset: "-2px",
          outlineColor: "{colors.accent}",
        },
      },
      underlined: {
        "--px": "0rem",
        "--radii": "0rem",
        borderBottom: "2px solid",
        borderBottomColor: "{colors.border}",
      },
    },
  },

  defaultVariants: {
    size: "base",
    shape: "round",
    visual: "outlined",
  },
});
