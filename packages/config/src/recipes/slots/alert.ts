import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const alert = defineSlotRecipe({
  className: "alert",
  slots: [
    "root",
    "context",
    "content",
    "title",
    "description",
    "trigger",
    "indicator",
  ],

  base: {
    root: {
      ...baseStyles.content,

      "--alert-px": "1rem",
      "--alert-radii": ".6rem",
      "--alert-height": "3.2rem",
      "--alert-font-size": "1.4rem",
      "--alert-width": "fit-content",
    },
    indicator: {
      color: "inherit",
    },
    title: {
      fontWeight: "600",
      color: "inherit",
      fontSize: "var(--font-size)",
    },
    context: {
      ...baseStyles.content,
    },
    trigger: baseStyles.trigger,
    description: {
      color: "inherit",
      fontSize: "var(--font-size)",
    },
    content: {
      ...baseStyles.content,
      display: "flex",
      px: "var(--alert-px)",
      border: ".5px solid",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      width: "var(--alert-width)",
      rounded: "var(--alert-radii)",
      height: "var(--alert-height)",
    },
  },

  variants: {
    shape: {
      flat: {
        root: {
          "--alert-radii": "0rem",
        },
      },
      round: {
        root: {
          "--alert-radii": ".6rem",
        },
      },
      rounded: {
        root: {
          "--alert-radii": "1.2rem",
        },
      },
      pill: {
        root: {
          "--alert-radii": "99.9rem",
        },
      },
    },

    size: {
      xs: {
        root: {
          "--alert-px": "1.2rem",
          "--alert-height": "2.8rem",
          "--alert-font-size": "1.2rem",
        },
      },
      sm: {
        root: {
          "--alert-px": "1.2rem",
          "--alert-height": "3.2rem",
          "--alert-font-size": "1.4rem",
        },
      },
      base: {
        root: {
          "--alert-px": "1.2rem",
          "--alert-height": "3.6rem",
          "--alert-font-size": "1.4rem",
        },
      },
      lg: {
        root: {
          "--alert-px": "2rem",
          "--alert-height": "4rem",
          "--alert-font-size": "1.4rem",
        },
      },
      xl: {
        root: {
          "--px": "1.6rem",
          "--height": "4.8rem",
          "--font-size": "1.6rem",
        },
      },
    },

    visual: {
      filled: {
        content: {
          color: "colorPalette.filled.fg",
          backgroundColor: "colorPalette.filled.bg",
          borderColor: "color-mix(in oklab, {colors.white} 5%, transparent)",
        },
      },
      soft: {
        content: {
          color: "colorPalette.soft.fg",
          backgroundColor: "colorPalette.soft.bg",
          borderColor: "color-mix(in oklab, {colors.white} 5%, transparent)",
        },
      },
      ghost: {
        content: {
          color: "colorPalette.ghost.fg",
          borderColor: "color-mix(in oklab, {colors.white} 0%, transparent)",
          backgroundColor:
            "color-mix(in oklab, {colors.white} 0%, transparent)",
        },
      },
      outlined: {
        content: {
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
    tone: "blue",
    shape: "round",
    visual: "soft",
  },
});
