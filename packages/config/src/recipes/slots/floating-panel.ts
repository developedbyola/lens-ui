import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const floatingPanel = defineSlotRecipe({
  className: "floating-panel",
  slots: [
    "root",
    "positioner",
    "content",
    "title",
    "header",
    "control",
    "stage-trigger",
    "close-trigger",
    "body",
    "context",
    "trigger",
    "drag-trigger",
    "resize-trigger",
  ],
  base: {
    positioner: {},
    root: baseStyles.content,
    title: baseStyles.title,
    body: { width: "full" },
    header: { width: "full" },
    trigger: baseStyles.trigger,
    control: baseStyles.content,
    context: baseStyles.content,
    "stage-trigger": baseStyles.trigger,
    "close-trigger": baseStyles.trigger,
    "resize-trigger": baseStyles.trigger,
    "drag-trigger": { width: "full" },
    content: { ...baseStyles.menu, overflow: "hidden" },
  },
});
