import { defineRecipe } from "@pandacss/dev";

export const container = defineRecipe({
  className: "container",
  base: {
    px: "20",
    mx: "auto",
    width: "full",
  },
  variants: {
    size: {
      xs: { maxWidth: "40rem" },
      sm: { maxWidth: "48rem" },
      md: { maxWidth: "64rem" },
      lg: { maxWidth: "80rem" },
      xl: { maxWidth: "96rem" },
      base: { maxWidth: "72rem" },
      "2xl": { maxWidth: "128rem" },
      "3xl": { maxWidth: "160rem" },
      "4xl": { maxWidth: "256rem" },
      "5xl": { maxWidth: "384rem" },
      "6xl": { maxWidth: "512rem" },
    },
  },
  defaultVariants: {
    size: "base",
  },
});
