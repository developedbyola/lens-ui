import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const carousel = defineSlotRecipe({
  className: "carousel",
  slots: [
    "root",
    "autoplay-trigger",
    "context",
    "control",
    "indicator-group",
    "indicator",
    "item-group",
    "item",
    "next-trigger",
    "prev-trigger",
  ],

  base: {
    root: baseStyles.content,
    "autoplay-trigger": baseStyles.trigger,
    "next-trigger": baseStyles.trigger,
    "prev-trigger": baseStyles.trigger,
    control: baseStyles.content,
    context: baseStyles.content,
    indicator: baseStyles.content,
    "indicator-group": baseStyles.content,
    item: baseStyles.content,
    "item-group": baseStyles.content,
  },
});
