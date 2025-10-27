import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const collapsible = defineSlotRecipe({
  className: "collapsible",
  slots: ["root", "context", "content", "trigger", "indicator"],
  base: {
    root: baseStyles.content,
    context: baseStyles.content,
    content: baseStyles.content,
    trigger: baseStyles.trigger,
    indicator: baseStyles.content,
  },
});
