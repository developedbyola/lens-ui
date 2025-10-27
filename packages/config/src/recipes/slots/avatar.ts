import { baseStyles } from "../../styles";;
import { defineSlotRecipe } from "@pandacss/dev";

export const avatar = defineSlotRecipe({
  className: "avatar",
  slots: ["root", "context", "image", "fallback"],

  base: {
    root: {
      ...baseStyles.content,

      "--size": "2rem",
      width: "var(--size)",
      height: "var(--size)",

      "--radii": ".6rem",
      rounded: "var(--radii)",

      "--font-size": "1.2rem",

      display: "flex",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
    },
    image: baseStyles.image,
    context: baseStyles.content,
    fallback: {
      ...baseStyles.title,
      display: "flex",
      color: "inherit",
      width: "full",
      height: "full",
      border: ".5px solid",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "inherit",
      fontSize: "var(--font-size)",
    },
  },

  variants: {
    size: {
      xs: {
        root: {
          "--size": "2.4rem",
          "--font-size": "1.2rem",
        },
      },
      sm: {
        root: {
          "--size": "2.8rem",
          "--font-size": "1.4rem",
        },
      },
      base: {
        root: {
          "--size": "3.2rem",
          "--font-size": "1.4rem",
        },
      },
      lg: {
        root: {
          "--size": "3.6rem",
          "--font-size": "1.4rem",
        },
      },
      xl: {
        root: {
          "--size": "4rem",
          "--font-size": "1.6rem",
        },
      },
      "2xl": {
        root: {
          "--size": "4.8rem",
          "--font-size": "1.8rem",
        },
      },
      "3xl": {
        root: {
          "--size": "5.6rem",
          "--font-size": "2rem",
        },
      },
    },

    shape: {
      square: {
        root: {
          "--radii": "0rem",
        },
      },
      round: {
        root: {
          "--radii": ".6rem",
        },
      },
      rounded: {
        root: {
          "--radii": "1.2rem",
        },
      },
      circle: {
        root: {
          "--radii": "50%",
        },
      },
    },

    visual: {
      filled: {
        fallback: {
          color: "colorPalette.filled.fg",
          backgroundColor: "colorPalette.filled.bg",
          borderColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
        },
      },
      soft: {
        fallback: {
          color: "colorPalette.soft.fg",
          backgroundColor: "colorPalette.soft.bg",
          borderColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
        },
      },
      ghost: {
        fallback: {
          color: "colorPalette.ghost.fg",
          borderColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
          backgroundColor:
            "color-mix(in oklab, {colors.white} 0%, transparent)",
        },
      },
      outlined: {
        fallback: {
          color: "colorPalette.outlined.fg",
          borderColor: "colorPalette.outlined.border",
          backgroundColor:
            "color-mix(in oklab, {colors.white} 0%, transparent)",
        },
      },
    },

    tone: {
      red: {
        root: {
          colorPalette: "red",
        },
      },
      orange: {
        root: {
          colorPalette: "orange",
        },
      },
      amber: {
        root: {
          colorPalette: "amber",
        },
      },
      yellow: {
        root: {
          colorPalette: "yellow",
        },
      },
      lime: {
        root: {
          colorPalette: "lime",
        },
      },
      green: {
        root: {
          colorPalette: "green",
        },
      },
      emerald: {
        root: {
          colorPalette: "emerald",
        },
      },
      teal: {
        root: {
          colorPalette: "teal",
        },
      },
      cyan: {
        root: {
          colorPalette: "cyan",
        },
      },
      sky: {
        root: {
          colorPalette: "sky",
        },
      },
      blue: {
        root: {
          colorPalette: "blue",
        },
      },
      indigo: {
        root: {
          colorPalette: "indigo",
        },
      },
      violet: {
        root: {
          colorPalette: "violet",
        },
      },
      purple: {
        root: {
          colorPalette: "purple",
        },
      },
      fuchsia: {
        root: {
          colorPalette: "fuchsia",
        },
      },
      pink: {
        root: {
          colorPalette: "pink",
        },
      },
      rose: {
        root: {
          colorPalette: "rose",
        },
      },
      slate: {
        root: {
          colorPalette: "slate",
        },
      },
      gray: {
        root: {
          colorPalette: "gray",
        },
      },
      zinc: {
        root: {
          colorPalette: "zinc",
        },
      },
      neutral: {
        root: {
          colorPalette: "neutral",
        },
      },
      stone: {
        root: {
          colorPalette: "stone",
        },
      },
    },
  },

  defaultVariants: {
    size: "base",
    tone: "neutral",
    shape: "circle",
    visual: "soft",
  },
});
