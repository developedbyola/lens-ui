import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const preview = defineSlotRecipe({
  className: "preview",
  slots: [
    "root",
    "arrow",
    "context",
    "arrow-tip",
    "content",
    "positioner",
    "trigger",
  ],
  base: {
    root: baseStyles.content,
    arrow: baseStyles.arrow,
    trigger: baseStyles.trigger,
    context: baseStyles.content,
    content: baseStyles.menu,
    positioner: {},
    "arrow-tip": baseStyles.arrowTip,
  },
});
