import { defineTokens } from "@pandacss/dev";
import { baseColors } from "./colors";

const animations = defineTokens.animations({
  spin: {
    value: "spin 1s linear infinite",
  },
  ping: {
    value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
  },
  pulse: {
    value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },
  bounce: {
    value: "bounce 1s infinite",
  },
});

const aspectRatios = defineTokens.aspectRatios({
  square: {
    value: "1 / 1",
  },
  landscape: {
    value: "4 / 3",
  },
  portrait: {
    value: "3 / 4",
  },
  wide: {
    value: "16 / 9",
  },
  ultrawide: {
    value: "18 / 5",
  },
  golden: {
    value: "1.618 / 1",
  },
});

const blurs = defineTokens.blurs({
  none: {
    value: " ",
  },
  sm: {
    value: "4px",
  },
  md: {
    value: "8px",
  },
  lg: {
    value: "12px",
  },
  xl: {
    value: "16px",
  },
  "2xl": {
    value: "24px",
  },
  "3xl": {
    value: "40px",
  },
  "4xl": {
    value: "64px",
  },
});

const borders = defineTokens.borders({
  xs: {
    value: "0.5px solid",
  },
  sm: {
    value: "1px solid",
  },
  md: {
    value: "2px solid",
  },
  lg: {
    value: "4px solid",
  },
  xl: {
    value: "8px solid",
  },
});

const colors = defineTokens.colors({
  transparent: {
    value: "transparent",
  },
  current: {
    value: "currentColor",
  },
  white: {
    value: "oklch(100 0 0)",
  },
  black: {
    value: "oklch(0 0 0)",
  },
  ...baseColors,
});

const cursor = defineTokens.cursor({
  button: {
    value: "pointer",
  },
  checkbox: {
    value: "default",
  },
  disabled: {
    value: "not-allowed",
  },
  menuitem: {
    value: "default",
  },
  option: {
    value: "default",
  },
  radio: {
    value: "default",
  },
  slider: {
    value: "default",
  },
  swittch: {
    value: "pointer",
  },
});

const durations = defineTokens.durations({
  fastest: {
    value: "50ms",
  },
  faster: {
    value: "100ms",
  },
  fast: {
    value: "150ms",
  },
  moderate: {
    value: "200ms",
  },
  slow: {
    value: "300ms",
  },
  slower: {
    value: "400ms",
  },
  slowest: {
    value: "500ms",
  },
});

const easings = defineTokens.easings({
  "ease-in": {
    value: "cubic-bezier(0.42, 0, 1, 1)",
  },
  "ease-out": {
    value: "cubic-bezier(0, 0, 0.58, 1)",
  },
  "ease-in-out": {
    value: "cubic-bezier(0.42, 0, 0.58, 1)",
  },
  "ease-in-smooth": {
    value: "cubic-bezier(0.32, 0.72, 0, 1)",
  },
});

const fontSizes = defineTokens.fontSizes({
  "8": {
    value: "0.8rem",
  },
  "10": {
    value: "1.0rem",
  },
  "12": {
    value: "1.2rem",
  },
  "13": {
    value: "1.3rem",
  },
  "14": {
    value: "1.4rem",
  },
  "16": {
    value: "1.6rem",
  },
  "18": {
    value: "1.8rem",
  },
  "20": {
    value: "2.0rem",
  },
  "24": {
    value: "2.4rem",
  },
  "32": {
    value: "3.2rem",
  },
  "40": {
    value: "4rem",
  },
  "48": {
    value: "4.8rem",
  },
  "56": {
    value: "5.6rem",
  },
  "64": {
    value: "6.4rem",
  },
  "80": {
    value: "8rem",
  },
  "96": {
    value: "9.6rem",
  },
  "128": {
    value: "12.8rem",
  },
});

const fontWeights = defineTokens.fontWeights({
  "100": {
    value: "100",
  },
  "200": {
    value: "200",
  },
  "300": {
    value: "300",
  },
  "400": {
    value: "400",
  },
  "500": {
    value: "500",
  },
  "600": {
    value: "600",
  },
  "700": {
    value: "700",
  },
  "800": {
    value: "800",
  },
  "900": {
    value: "900",
  },
});

const fonts = defineTokens.fonts({
  sans: {
    value:
      'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  mono: {
    value:
      'Google Sans Code, SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
});

const letterSpacings = defineTokens.letterSpacings({
  tighter: {
    value: "-0.05em",
  },
  tight: {
    value: "-0.025em",
  },
  wide: {
    value: "0.025em",
  },
  wider: {
    value: "0.05em",
  },
  widest: {
    value: "0.1em",
  },
});

const lineHeights = defineTokens.lineHeights({
  shorter: {
    value: 1.05,
  },
  short: {
    value: 1.24,
  },
  moderate: {
    value: 1.6,
  },
  tall: {
    value: 1.8,
  },
  taller: {
    value: 2,
  },
});

const radii = defineTokens.radii({
  "0": {
    value: "0",
  },
  "2": {
    value: "0.2rem",
  },
  "4": {
    value: "0.4rem",
  },
  "6": {
    value: "0.6rem",
  },
  "8": {
    value: "0.8rem",
  },
  "12": {
    value: "1.2rem",
  },
  "16": {
    value: "1.6rem",
  },
  "20": {
    value: "2rem",
  },
  "24": {
    value: "2.4rem",
  },
  "32": {
    value: "3.2rem",
  },
  "48": {
    value: "4.8rem",
  },
  "64": {
    value: "6.4rem",
  },
  full: {
    value: "9999px",
  },
});

const sizes = defineTokens.sizes({
  "4": {
    value: "0.2rem",
  },
  "8": {
    value: "0.4rem",
  },
  "12": {
    value: "1.2rem",
  },
  "16": {
    value: "1.6rem",
  },
  "20": {
    value: "2rem",
  },
  "24": {
    value: "2.4rem",
  },
  "28": {
    value: "2.8rem",
  },
  "32": {
    value: "3.2rem",
  },
  "36": {
    value: "3.6rem",
  },
  "40": {
    value: "4rem",
  },
  "44": {
    value: "4.4rem",
  },
  "46": {
    value: "4.6rem",
  },
  "48": {
    value: "4.8rem",
  },
  "50": {
    value: "5rem",
  },
  "52": {
    value: "5.2rem",
  },
  "56": {
    value: "5.6rem",
  },
  "64": {
    value: "6.4rem",
  },
  "72": {
    value: "7.2rem",
  },
  "80": {
    value: "8rem",
  },
  "96": {
    value: "9.6rem",
  },
  "128": {
    value: "12.8rem",
  },
  "160": {
    value: "16rem",
  },
  "200": {
    value: "20rem",
  },
  "256": {
    value: "25.6rem",
  },
  "320": {
    value: "32rem",
  },
  "360": {
    value: "36rem",
  },
  "400": {
    value: "40rem",
  },
  "448": {
    value: "44.8rem",
  },
  "512": {
    value: "51.2rem",
  },
  "576": {
    value: "57.6rem",
  },
  "640": {
    value: "64rem",
  },
  "768": {
    value: "76.8rem",
  },
  "896": {
    value: "89.6rem",
  },
  "1024": {
    value: "102.4rem",
  },
  "1280": {
    value: "128rem",
  },
  "1536": {
    value: "153.6rem",
  },
  "1/12": {
    value: "8.333333%",
  },
  "2/12": {
    value: "16.666667%",
  },
  "3/12": {
    value: "25%",
  },
  "4/12": {
    value: "33.333333%",
  },
  "5/12": {
    value: "41.666667%",
  },
  "6/12": {
    value: "50%",
  },
  "7/12": {
    value: "58.333333%",
  },
  "8/12": {
    value: "66.666667%",
  },
  "9/12": {
    value: "75%",
  },
  "10/12": {
    value: "83.333333%",
  },
  "11/12": {
    value: "91.666667%",
  },
  max: {
    value: "max-content",
  },
  min: {
    value: "min-content",
  },
  fit: {
    value: "fit-content",
  },
  full: {
    value: "100%",
  },
  dvh: {
    value: "100dvh",
  },
  svh: {
    value: "100svh",
  },
  lvh: {
    value: "100lvh",
  },
  dvw: {
    value: "100dvw",
  },
  svw: {
    value: "100svw",
  },
  lvw: {
    value: "100lvw",
  },
  vw: {
    value: "100vw",
  },
  vh: {
    value: "100vh",
  },
});

const spacing = defineTokens.spacing({
  "0": {
    value: "0rem",
  },
  "1": {
    value: "0.1rem",
  },
  "2": {
    value: "0.2rem",
  },
  "4": {
    value: "0.4rem",
  },
  "6": {
    value: "0.6rem",
  },
  "8": {
    value: "0.8rem",
  },
  "10": {
    value: "1.0rem",
  },
  "12": {
    value: "1.2rem",
  },
  "16": {
    value: "1.6rem",
  },
  "20": {
    value: "2rem",
  },
  "24": {
    value: "2.4rem",
  },
  "32": {
    value: "3.2rem",
  },
  "40": {
    value: "4rem",
  },
  "56": {
    value: "5.6rem",
  },
  "64": {
    value: "6.4rem",
  },
  "80": {
    value: "8rem",
  },
  "96": {
    value: "9.6rem",
  },
  "120": {
    value: "12rem",
  },
  "144": {
    value: "14.4rem",
  },
  "160": {
    value: "16rem",
  },
  "192": {
    value: "19.2rem",
  },
  "224": {
    value: "22.4rem",
  },
  "256": {
    value: "25.6rem",
  },
  "288": {
    value: "28.8rem",
  },
  "320": {
    value: "32rem",
  },
});

const zIndex = defineTokens.zIndex({
  hide: {
    value: -1,
  },
  base: {
    value: 0,
  },
  docked: {
    value: 10,
  },
  dropdown: {
    value: 1000,
  },
  sticky: {
    value: 1100,
  },
  banner: {
    value: 1200,
  },
  overlay: {
    value: 1300,
  },
  modal: {
    value: 1400,
  },
  popover: {
    value: 1500,
  },
  skipNav: {
    value: 1600,
  },
  toast: {
    value: 1700,
  },
  tooltip: {
    value: 1800,
  },
  max: {
    value: 2147483647,
  },
});

export const tokens = {
  aspectRatios,
  animations,
  blurs,
  borders,
  colors,
  durations,
  easings,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  spacing,
  sizes,
  zIndex,
  cursor,
};
