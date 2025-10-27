import { baseStyles } from "../../styles";;
import { defineSlotRecipe } from "@pandacss/dev";

export const upload = defineSlotRecipe({
  className: "upload",
  slots: [
    "root",
    "item",
    "label",
    "trigger",
    "context",
    "dropzone",
    "item-name",
    "item-group",
    "hidden-input",
    "item-preview",
    "clear-trigger",
    "item-size-text",
    "item-preview-image",
    "item-delete-trigger",
  ],
  base: {
    label: baseStyles.label,
    root: { ...baseStyles.content, width: "full" },
    item: baseStyles.content,
    context: baseStyles.content,
    trigger: baseStyles.trigger,
    dropzone: baseStyles.content,
    "item-name": baseStyles.text,
    "item-group": baseStyles.content,
    "item-size-text": baseStyles.text,
    "hidden-input": baseStyles.content,
    "item-preview": baseStyles.content,
    "clear-trigger": baseStyles.trigger,
    "item-preview-image": baseStyles.image,
    "item-delete-trigger": baseStyles.trigger,
  },
});
