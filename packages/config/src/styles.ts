import { defineStyles } from "@pandacss/dev";

const content = defineStyles({
  width: "auto",
});

const control = defineStyles({
  alignItems: "center",
  display: "inline-flex",
});

const image = defineStyles({
  objectFit: "cover",
  width: "full",
  height: "full",
});

const menu = defineStyles({
  width: "full",
  height: "auto",
  minWidth: "24rem",
  rounded: "1.2rem",
  border: ".5px solid",
  backgroundColor: "{colors.bg}",
  borderColor: "{colors.border}",
  boxShadow: "0px 1.5px 2px 1px {colors.blackAplha.70}",
  _focusVisible: {
    outline: "1px solid color-mix(in oklab, white 0%, transparent)",
  },
});

const trigger = defineStyles({
  gap: ".2rem",
  cursor: "pointer",
  fontFamily: "inherit",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid transparent",
  transition: "all 150ms ease-in-out",
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none",
  },
});

const text = defineStyles({
  fontSize: "1.4rem",
});

const label = defineStyles({
  display: "block",
  fontSize: "1.4rem",
});

const input = defineStyles({
  width: "full",
  height: "full",
  fontWeight: "500",
  border: ".5px solid",
  outline: ".5px solid",
  outlineOffset: "-.5px",
  color: "{colors.fg.headline}",
  borderColor: "color-mix(in oklab, white 0%, transparent)",
  outlineColor: "color-mix(in oklab, white 0%, transparent)",
  backgroundColor: "color-mix(in oklab, white 0%, transparent)",
  _placeholder: {
    fontWeight: "400",
    color: "{colors.fg.muted}",
  },
  _disabled: {
    opacity: 0.5,
    pointerEvents: "none",
    cursor: "not-allowed",
  },
});

const textarea = defineStyles({
  width: "full",
  resize: "none",
  border: "none",
  fontWeight: "500",
  outline: ".5px solid",
  outlineOffset: "-.5px",
  color: "{colors.fg.headline}",
  borderColor: "color-mix(in oklab, white 0%, transparent)",
  outlineColor: "color-mix(in oklab, white 0%, transparent)",
  backgroundColor: "color-mix(in oklab, white 0%, transparent)",
  _placeholder: {
    fontWeight: "400",
    color: "{colors.fg.muted}",
  },
  _disabled: {
    opacity: 0.5,
    pointerEvents: "none",
    cursor: "not-allowed",
  },
});

const title = defineStyles({
  fontWeight: "600",
  fontSize: "1.6rem",
  fontFamily: "inherit",
  color: "{colors.fg.headline}",
  border: "1px solid transparent",
});

const backdrop = defineStyles({
  top: "0rem",
  zIndex: "98",
  left: "0rem",
  width: "full",
  height: "full",
  position: "fixed",
  backgroundColor: "blackAlpha.60",
  _dark: { backgroundColor: "blackAlpha.80" },
});

const arrow = defineStyles({
  "--arrow-size": "1.2rem",
  "--arrow-background": "{colors.bg}",
});

const arrowTip = defineStyles({
  borderTopWidth: "0.5px",
  borderLeftWidth: "0.5px",
  borderColor: "{colors.border}",
});

const item = defineStyles({
  px: "8",
  gap: "10",
  height: "32",
  rounded: "8",
  display: "flex",
  width: "full",
  fontWeight: "500",
  cursor: "pointer",
  color: "{colors.fg.subtle}",
  alignItems: "center",
  _hover: {
    color: "{colors.fg}",
    backgroundColor: "{colors.bg.subtle}",
  },
  _selected: {
    color: "{colors.fg}",
    backgroundColor: "{colors.bg.subtle}",
  },
  _checked: {
    color: "{colors.fg}",
    backgroundColor: "{colors.bg.subtle}",
  },
  _disabled: {
    opacity: 0.5,
    pointerEvents: "none",
    cursor: "not-allowed",
  },
});

export const baseStyles = {
  trigger,
  text,
  input,
  title,
  content,
  control,
  image,
  label,
  menu,
  backdrop,
  textarea,
  arrow,
  arrowTip,
  item,
};
