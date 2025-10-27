import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const textFn = /* @__PURE__ */ createRecipe('text', {}, [])

const textVariantMap = {
  "wrap": [
    "wrap",
    "pretty",
    "balance",
    "no-wrap"
  ],
  "role": [
    "body",
    "label",
    "quote",
    "display",
    "heading",
    "caption"
  ],
  "align": [
    "left",
    "right",
    "center",
    "justify"
  ],
  "tone": [
    "info",
    "primary",
    "success",
    "warning",
    "neutral",
    "secondary",
    "destructive"
  ],
  "size": [
    "8",
    "10",
    "12",
    "13",
    "14",
    "16",
    "18",
    "20",
    "24",
    "32",
    "40",
    "48",
    "56",
    "64",
    "80",
    "96",
    "128"
  ],
  "weight": [
    "thin",
    "light",
    "regular",
    "medium",
    "semibold",
    "bold",
    "extrabold",
    "black"
  ]
}

const textVariantKeys = Object.keys(textVariantMap)

export const text = /* @__PURE__ */ Object.assign(memo(textFn.recipeFn), {
  __recipe__: true,
  __name__: 'text',
  __getCompoundVariantCss__: textFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textVariantKeys,
  variantMap: textVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textVariantKeys)
  },
  getVariantProps: textFn.getVariantProps,
})