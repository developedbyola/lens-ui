import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const iconButtonFn = /* @__PURE__ */ createRecipe('icon-btn', {
  "size": "20",
  "tone": "blue",
  "shape": "round",
  "visual": "filled"
}, [])

const iconButtonVariantMap = {
  "size": [
    "12",
    "13",
    "14",
    "16",
    "18",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "48",
    "56",
    "64"
  ],
  "shape": [
    "square",
    "round",
    "rounded",
    "circle"
  ],
  "visual": [
    "filled",
    "outlined",
    "soft",
    "ghost"
  ],
  "tone": [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone"
  ]
}

const iconButtonVariantKeys = Object.keys(iconButtonVariantMap)

export const iconButton = /* @__PURE__ */ Object.assign(memo(iconButtonFn.recipeFn), {
  __recipe__: true,
  __name__: 'iconButton',
  __getCompoundVariantCss__: iconButtonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: iconButtonVariantKeys,
  variantMap: iconButtonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, iconButtonVariantKeys)
  },
  getVariantProps: iconButtonFn.getVariantProps,
})