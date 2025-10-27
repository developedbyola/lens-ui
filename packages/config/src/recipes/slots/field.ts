import { baseStyles } from "../../styles";;
import { defineSlotRecipe } from "@pandacss/dev";

export const field = defineSlotRecipe({
  className: "field",
  slots: [
    "root",
    "input",
    "label",
    "error",
    "select",
    "helper",
    "context",
    "textarea",
    "textarea",
    "required-indicator",
  ],
  base: {
    input: baseStyles.input,
    label: baseStyles.label,
    root: baseStyles.content,
    select: baseStyles.content,
    textarea: baseStyles.textarea,
    error: {
      ...baseStyles.text,
      color: "rose.fg",
    },
    helper: baseStyles.text,
    context: baseStyles.content,
    "required-indicator": {
      ...baseStyles.content,
      color: "fg.muted",
    },
  },
});
