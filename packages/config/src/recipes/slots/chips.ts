import { baseStyles } from "../../styles";;
import { defineSlotRecipe } from "@pandacss/dev";

export const chips = defineSlotRecipe({
  className: "chips",
  slots: [
    "root",
    "control",
    "context",
    "clear-trigger",
    "input",
    "label",
    "item",
    "item-input",
    "item-text",
    "item-delete-trigger",
    "hidden-input",
  ],
  base: {
    root: baseStyles.content,
    control: {
      ...baseStyles.control,
      height: "auto",
      px: ".6rem",
      py: ".4rem",
      minHeight: "2.8rem",
    },
    context: baseStyles.content,
    "clear-trigger": baseStyles.trigger,
    input: {
      ...baseStyles.input,
      px: "0rem",
      width: "fit",
      maxWidth: "0rem",
      minWidth: "8rem",
      fontSize: "1.4rem",
    },
    label: baseStyles.label,
    item: { ...baseStyles.content },
    "item-text": baseStyles.text,
    "item-input": baseStyles.input,
    "item-delete-trigger": baseStyles.trigger,
    "hidden-input": baseStyles.content,
  },
});
