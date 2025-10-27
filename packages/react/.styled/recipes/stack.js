import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const stackFn = /* @__PURE__ */ createRecipe('stack', {
  "items": "start",
  "justify": "start",
  "axis": "horizontal",
  "wrap": false
}, [])

const stackVariantMap = {
  "axis": [
    "horizontal",
    "vertical"
  ],
  "items": [
    "center",
    "start",
    "end",
    "stretch",
    "baseline"
  ],
  "justify": [
    "center",
    "start",
    "end",
    "between",
    "around",
    "evenly"
  ],
  "wrap": [
    "true",
    "false"
  ]
}

const stackVariantKeys = Object.keys(stackVariantMap)

export const stack = /* @__PURE__ */ Object.assign(memo(stackFn.recipeFn), {
  __recipe__: true,
  __name__: 'stack',
  __getCompoundVariantCss__: stackFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: stackVariantKeys,
  variantMap: stackVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, stackVariantKeys)
  },
  getVariantProps: stackFn.getVariantProps,
})