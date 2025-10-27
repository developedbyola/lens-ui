import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const checkbox = defineSlotRecipe({
  className: "checkbox",
  slots: [
    "root",
    "context",
    "control",
    "group",
    "group-provider",
    "hidden-input",
    "indicator",
    "label",
    "provider",
  ],

  base: {
    root: {
      ...baseStyles.content,
      "--size": "2rem",
      "--radii": ".6rem",

      display: "inline-flex",
      alignItems: "center",
      gap: ".8rem",
    },
    label: baseStyles.text,
    group: baseStyles.content,
    context: baseStyles.content,
    control: {
      ...baseStyles.trigger,
      width: "var(--size)",
      height: "var(--size)",
      rounded: "var(--radii)",
      cursor: "pointer",
      border: ".5px solid",

      borderColor: "{colors.border}",
      backgroundColor: "color-mix(in oklab, white 5%, transparent)",

      _focusWithin: {
        outline: "2px solid",
        outlineOffset: "-2px",
        outlineColor: "colors.blue.70",
      },

      _checked: {
        color: "colorPalette.filled.fg",
        borderColor: "colorPalette.filled.fg",
        backgroundColor: "colorPalette.filled.bg",
      },
    },
    indicator: {
      ...baseStyles.content,
      color: "white",
    },
    provider: baseStyles.content,
    "hidden-input": baseStyles.content,
    "group-provider": baseStyles.content,
  },
  variants: {
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

    size: {
      xs: {
        root: {
          "--size": "1.4rem",
        },
      },
      sm: {
        root: {
          "--size": "1.6rem",
        },
      },
      base: {
        root: {
          "--size": "1.8rem",
        },
      },
      lg: {
        root: {
          "--size": "2.0rem",
        },
      },
      xl: {
        root: {
          "--size": "2.4rem",
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
    size: "sm",
    tone: "blue",
    shape: "round",
  },
});
