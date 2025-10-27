import { baseStyles } from "../../styles";;
import { defineSlotRecipe } from "@pandacss/dev";

export const inputGroup = defineSlotRecipe({
  className: "input-group",
  slots: ["root", "addon", "input", "textarea"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",

      "--px": "1.0rem",
      "--py": "1.0rem",
      "--size": "auto",
      "--radii": "0.6rem",
      "--font-size": "1.4rem",

      "&:has(textarea)": {
        height: "auto",
        flexWrap: "initial",
        flexDirection: "column",
      },

      "&:has(input)": {
        flexWrap: "nowrap",
        height: "var(--size)",
        flexDirection: "row",
      },

      width: "full",
      border: "none",

      overflow: "clip",
      color: "{colors.fg}",
      rounded: "var(--radii)",
      fontSize: "var(--font-size)",
      outline: "0px solid transparent",
      transition: "all 150ms ease-in-out",
    },
    addon: {
      height: "full",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      ...baseStyles.input,
      px: "var(--px)",
      fontSize: "var(--font-size)",
    },
    textarea: {
      ...baseStyles.textarea,
      px: "var(--px)",
      py: "var(--py)",
      fontSize: "var(--font-size)",
    },
  },
  variants: {
    shape: {
      round: {
        root: {
          "--radii": "0.6rem",
        },
      },
      flat: {
        root: {
          "--radii": "0rem",
        },
      },
      rounded: {
        root: {
          "--radii": "1.2rem",
        },
      },
      pill: {
        root: {
          "--radii": "99.9rem",
        },
      },
    },

    size: {
      xs: {
        root: {
          "--px": "1rem",
          "--py": "1rem",
          "--size": "2.8rem",
          "--font-size": "1.2rem",
        },
      },
      sm: {
        root: {
          "--px": "1rem",
          "--py": "1rem",
          "--size": "3.2rem",
          "--font-size": "1.4rem",
        },
      },
      base: {
        root: {
          "--px": "1rem",
          "--py": "1rem",
          "--size": "3.6rem",
          "--font-size": "1.4rem",
        },
      },
      lg: {
        root: {
          "--px": "1.2rem",
          "--py": "1.2rem",
          "--size": "4rem",
          "--font-size": "1.4rem",
        },
      },
      xl: {
        root: {
          "--px": "1.6rem",
          "--py": "1.6rem",
          "--size": "4.8rem",
          "--font-size": "1.6rem",
        },
      },
    },

    visual: {
      ghost: {
        root: {
          backgroundColor: "color-mix(in oklab, white 0%, transparent)",
        },
      },
      filled: {
        root: {
          backgroundColor: "{colors.bg.surface}",
        },
      },
      outlined: {
        root: {
          outline: ".5px solid",
          outlineOffset: "-.5px",
          outlineColor: "{colors.border}",
          backgroundColor: "color-mix(in oklab, white 5%, transparent)",
          _focusWithin: {
            outline: "2px solid",
            outlineOffset: "-2px",
            outlineColor: "{colors.accent}",
          },
        },
      },
      underlined: {
        root: {
          "--radii": "0rem",
          borderBottom: "2px solid",
          borderBottomColor: "{colors.border}",
        },
      },
    },
  },
  defaultVariants: {
    size: "base",
    shape: "round",
    visual: "outlined",
  },
});
