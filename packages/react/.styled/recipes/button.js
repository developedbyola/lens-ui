import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const buttonFn = /* @__PURE__ */ createRecipe('btn', {
  "link": false,
  "span": false,
  "tone": "blue",
  "size": "base",
  "shape": "round",
  "visual": "filled"
}, [])

const buttonVariantMap = {
  "size": [
    "xs",
    "sm",
    "base",
    "lg",
    "xl"
  ],
  "shape": [
    "flat",
    "round",
    "pill",
    "rounded"
  ],
  "span": [
    "true"
  ],
  "link": [
    "true"
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

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(memo(buttonFn.recipeFn), {
  __recipe__: true,
  __name__: 'button',
  __getCompoundVariantCss__: buttonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
  getVariantProps: buttonFn.getVariantProps,
})