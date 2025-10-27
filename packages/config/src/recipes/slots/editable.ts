import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const editable = defineSlotRecipe({
  className: "editable",
  slots: [
    "root",
    "label",
    "area",
    "preview",
    "input",
    "edit-trigger",
    "submit-trigger",
    "cancel-trigger",
    "control",
    "context",
  ],
  base: {
    root: baseStyles.content,
    label: baseStyles.label,
    area: baseStyles.content,
    preview: baseStyles.text,
    input: baseStyles.input,
    "edit-trigger": baseStyles.trigger,
    "cancel-trigger": baseStyles.trigger,
    "submit-trigger": baseStyles.trigger,
    control: baseStyles.control,
    context: baseStyles.content,
  },
});
