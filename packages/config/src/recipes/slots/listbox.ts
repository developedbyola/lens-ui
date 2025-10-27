import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const listbox = defineSlotRecipe({
  className: "listbox",
  slots: [
    "root",
    "label",
    "item",
    "input",
    "empty",
    "context",
    "content",
    "item-text",
    "item-group",
    "value-text",
    "item-context",
    "item-indicator",
    "item-group-label",
  ],
  base: {
    label: baseStyles.label,
    input: baseStyles.input,
    root: baseStyles.content,
    content: {
      ...baseStyles.menu,
      _focusVisible: {
        outline: "1px solid color-mix(in oklch, white 0%, transparent)",
      },
    },
    item: { ...baseStyles.trigger, height: "32", px: "8", width: "full" },
    empty: baseStyles.content,
    context: baseStyles.content,
    "item-text": { ...baseStyles.text, color: "inherit" },
    "value-text": baseStyles.title,
    "item-group": baseStyles.content,
    "item-context": baseStyles.content,
    "item-indicator": baseStyles.content,
    "item-group-label": baseStyles.label,
  },
});
