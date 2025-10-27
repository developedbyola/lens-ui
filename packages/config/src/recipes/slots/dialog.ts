import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";;

export const dialog = defineSlotRecipe({
  className: "dialog",
  slots: [
    "root",
    "backdrop",
    "trigger",
    "close-trigger",
    "content",
    "context",
    "description",
    "positioner",
    "title",
  ],
  base: {
    root: baseStyles.content,
    backdrop: baseStyles.backdrop,
    trigger: baseStyles.trigger,
    "close-trigger": baseStyles.trigger,
    content: { ...baseStyles.menu, maxWidth: "36rem" },
    context: baseStyles.content,
    description: baseStyles.text,
    title: baseStyles.title,
    positioner: {
      ...baseStyles.content,
      position: "fixed",
      zIndex: "99",
      top: "0rem",
      left: "0rem",
      display: "flex",
      width: "full",
      height: "full",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
