import { defineSlotRecipe } from "@pandacss/dev";
import { baseStyles } from "../../styles";

export const accordion = defineSlotRecipe({
  className: "accordion",
  slots: [
    "root",
    "item",
    "context",
    "item-context",
    "item-content",
    "item-trigger",
    "item-indicator",
  ],

  base: {
    root: {
      ...baseStyles.content,
      gap: "2",
      display: "flex",
      "&[data-orientation=horizontal]": { flexDirection: "row" },
      "&[data-orientation=vertical]": { flexDirection: "column" },
    },
    item: {
      ...baseStyles.content,
      display: "flex",
      "&[data-orientation=horizontal]": { flexDirection: "row" },
      "&[data-orientation=vertical]": { flexDirection: "column" },
    },
    context: baseStyles.content,
    "item-context": baseStyles.content,
    "item-trigger": {
      ...baseStyles.trigger,
      height: "40",
      rowGap: "4",
      width: "full",
      columnGap: "2",
      justifyContent: "space-between",
    },
    "item-content": baseStyles.content,
    "item-indicator": baseStyles.content,
  },
});
