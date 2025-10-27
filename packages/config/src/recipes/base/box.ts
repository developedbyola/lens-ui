import { defineRecipe } from "@pandacss/dev";

export const box = defineRecipe({
  className: "box",
  base: {
    width: "full",
    display: "block",
  },
});
