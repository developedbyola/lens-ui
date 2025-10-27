import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const clipboard = defineSlotRecipe({
  className: "clipboard",
  slots: [
    "root",
    "label",
    "context",
    "control",
    "trigger",
    "indicator",
    "value-text",
    "text-input",
  ],
  base: {
    root: baseStyles.content,
    label: baseStyles.label,
    context: baseStyles.content,
    control: baseStyles.control,
    trigger: baseStyles.content,
    indicator: baseStyles.content,
    "value-text": baseStyles.content,
    "text-input": baseStyles.input,
  },
});
