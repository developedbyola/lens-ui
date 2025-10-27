import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const iconFn = /* @__PURE__ */ createRecipe('icon', {}, [])

const iconVariantMap = {
  "size": [
    "10",
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
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96"
  ]
}

const iconVariantKeys = Object.keys(iconVariantMap)

export const icon = /* @__PURE__ */ Object.assign(memo(iconFn.recipeFn), {
  __recipe__: true,
  __name__: 'icon',
  __getCompoundVariantCss__: iconFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: iconVariantKeys,
  variantMap: iconVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, iconVariantKeys)
  },
  getVariantProps: iconFn.getVariantProps,
})