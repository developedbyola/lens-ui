import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const combobox = defineSlotRecipe({
  className: "combobox",
  slots: [
    "root",
    "context",
    "content",
    "list",
    "item",
    "item-indicator",
    "item-text",
    "item-group",
    "item-group-label",
    "clear-trigger",
    "control",
    "label",
    "text-input",
    "trigger",
    "positioner",
  ],
  base: {
    root: baseStyles.content,
    context: baseStyles.content,
    content: baseStyles.menu,
    list: baseStyles.content,
    item: baseStyles.content,
    "item-indicator": baseStyles.content,
    "item-group": baseStyles.content,
    "item-group-label": baseStyles.label,
    "item-text": baseStyles.text,
    "text-input": baseStyles.input,
    control: baseStyles.content,
    trigger: baseStyles.trigger,
    "clear-trigger": baseStyles.trigger,
  },
});
