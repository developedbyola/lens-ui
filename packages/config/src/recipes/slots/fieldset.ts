import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const fieldset = defineSlotRecipe({
  className: "fieldset",
  slots: ["root", "context", "helper", "error", "legend"],
  base: {
    root: baseStyles.content,
    context: baseStyles.content,
    helper: baseStyles.text,
    legend: baseStyles.title,
    error: {
      ...baseStyles.text,
      color: "rose.fg",
    },
  },
});
