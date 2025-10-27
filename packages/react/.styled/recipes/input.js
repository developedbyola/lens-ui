import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const inputFn = /* @__PURE__ */ createRecipe('input', {
  "size": "base",
  "shape": "round",
  "visual": "outlined"
}, [])

const inputVariantMap = {
  "shape": [
    "round",
    "flat",
    "rounded",
    "pill"
  ],
  "size": [
    "xs",
    "sm",
    "base",
    "lg",
    "xl"
  ],
  "visual": [
    "ghost",
    "filled",
    "outlined",
    "underlined"
  ]
}

const inputVariantKeys = Object.keys(inputVariantMap)

export const input = /* @__PURE__ */ Object.assign(memo(inputFn.recipeFn), {
  __recipe__: true,
  __name__: 'input',
  __getCompoundVariantCss__: inputFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: inputVariantKeys,
  variantMap: inputVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, inputVariantKeys)
  },
  getVariantProps: inputFn.getVariantProps,
})