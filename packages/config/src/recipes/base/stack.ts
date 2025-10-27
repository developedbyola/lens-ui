import { defineRecipe } from "@pandacss/dev";

export const stack = defineRecipe({
  className: "stack",
  base: {
    display: "flex",
  },
  variants: {
    axis: {
      horizontal: { flexDirection: "row" },
      vertical: { flexDirection: "column" },
    },
    items: {
      center: { alignItems: "center" },
      start: { alignItems: "flex-start" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      center: { justifyContent: "center" },
      start: { justifyContent: "flex-start" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
    },
    wrap: {
      true: { flexWrap: "wrap" },
      false: { flexWrap: "nowrap" },
    },
  },
  defaultVariants: {
    items: "start",
    justify: "start",
    axis: "horizontal",
    wrap: false,
  },
});
