import { defineRecipe } from "@pandacss/dev";

export const text = defineRecipe({
  className: "text",
  base: { fontFamily: "inherit", textWrap: "pretty" },
  variants: {
    wrap: {
      wrap: { textWrap: "wrap" },
      pretty: { textWrap: "pretty" },
      balance: { textWrap: "balance" },
      "no-wrap": { textWrap: "no-wrap" },
    },
    role: {
      body: { fontWeight: "400" },
      label: { fontWeight: "500" },
      quote: { fontWeight: "500" },
      display: { fontWeight: "700" },
      heading: { fontWeight: "600" },
      caption: { fontWeight: "400" },
    },
    align: {
      left: { textAlign: "left" },
      right: { textAlign: "right" },
      center: { textAlign: "center" },
      justify: { textAlign: "justify" },
    },
    tone: {
      info: {},
      primary: {},
      success: {},
      warning: {},
      neutral: {},
      secondary: {},
      destructive: {},
    },
    size: {
      // Small text (12-14px) - Tighter line height for small text
      "8": { fontSize: "0.8rem", lineHeight: "1.4", letterSpacing: "0.01em" },
      "10": { fontSize: "1rem", lineHeight: "1.4", letterSpacing: "0.01em" },
      "12": { fontSize: "1.2rem", lineHeight: "1.4", letterSpacing: "0.01em" },
      "13": { fontSize: "1.3rem", lineHeight: "1.5", letterSpacing: "0.01em" },
      "14": { fontSize: "1.4rem", lineHeight: "1.5", letterSpacing: "0.01em" },

      // Body text (16-20px) - Comfortable reading line height
      "16": { fontSize: "1.6rem", lineHeight: "1.6", letterSpacing: "0.01em" },
      "18": { fontSize: "1.8rem", lineHeight: "1.55", letterSpacing: "0" },
      "20": { fontSize: "2.0rem", lineHeight: "1.5", letterSpacing: "0" },

      // Subheadings (24-32px) - Slightly tighter line height
      "24": {
        fontSize: "2.4rem",
        lineHeight: "1.35",
        letterSpacing: "-0.01em",
      },
      "32": {
        fontSize: "3.2rem",
        lineHeight: "1.25",
        letterSpacing: "-0.02em",
      },

      // Headings (40-64px) - Tighter line height and negative letter spacing for better grouping
      "40": { fontSize: "4.0rem", lineHeight: "1.2", letterSpacing: "-0.02em" },
      "48": {
        fontSize: "4.8rem",
        lineHeight: "1.15",
        letterSpacing: "-0.02em",
      },
      "56": { fontSize: "5.6rem", lineHeight: "1.1", letterSpacing: "-0.03em" },
      "64": { fontSize: "6.4rem", lineHeight: "1.1", letterSpacing: "-0.03em" },

      // Display sizes (80px+) - Very tight line height for display text
      "80": { fontSize: "8.0rem", lineHeight: "1", letterSpacing: "-0.04em" },
      "96": { fontSize: "9.6rem", lineHeight: "1", letterSpacing: "-0.05em" },
      "128": {
        fontSize: "12.8rem",
        lineHeight: "0.9",
        letterSpacing: "-0.06em",
      },
    },
    weight: {
      thin: { fontWeight: "100" },
      light: { fontWeight: "200" },
      regular: { fontWeight: "400" },
      medium: { fontWeight: "500" },
      semibold: { fontWeight: "600" },
      bold: { fontWeight: "700" },
      extrabold: { fontWeight: "800" },
      black: { fontWeight: "900" },
    },
  },
  defaultVariants: {},
});
