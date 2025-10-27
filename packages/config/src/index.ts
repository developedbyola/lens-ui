import { baseColors } from "./tokens/colors";
import { tokens, semanticTokens } from "./tokens";
import { slotRecipes, recipes } from "./recipes";
import pandacssPreset from "@pandacss/preset-base";
import { definePreset, defineGlobalStyles, defineConfig } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "*": {
    margin: 0,
    padding: 0,
    fontSynthesis: "none",
    boxSizing: "border-box",
    textRendering: "optimizeLegibility",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased",
  },
  html: {
    fontSize: "62.5%",
    lineHeight: "1.5",
    color: "{colors.fg.subtle}",
    fontFamily: "Zalando Sans, sans-serif",
  },
  body: {
    fontSize: "1.6rem",
  },
  "*::placeholder, *[data-placeholder]": {
    color: "neutral.50",
  },
  "*::selection": {
    backgroundColor: "neutral.60",
  },
});

export const preset = definePreset({
  name: "@notebook-ui/presets",
  globalCss,
  theme: {
    tokens,
    recipes,
    slotRecipes,
    semanticTokens,
  },
});
export const colors = baseColors;


const { conditions, utilities } = pandacssPreset;

export const config = defineConfig({
  exclude: [],
  eject: true,
  preflight: true,
  presets: [preset],
  outExtension: "js",
  outdir: "./.styled",
  jsxFramework: "react",
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./.ladle/**/*.{js,jsx,ts,tsx}"],
  staticCss: { recipes: "*", themes: ["dark", "light"] },
  conditions: {
    extend: {
      ...conditions,
    },
  },
  patterns: {
    extend: { ...{} },
  },
  utilities: {
    extend: {
      ...utilities,
    },
  },
});
