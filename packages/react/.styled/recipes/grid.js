import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const gridFn = /* @__PURE__ */ createRecipe('grid', {
  "cols": "1",
  "flow": "row",
  "items": "stretch",
  "justify": "start"
}, [])

const gridVariantMap = {
  "cols": [
    "1",
    "2",
    "3",
    "4",
    "6",
    "8",
    "12",
    "none",
    "auto"
  ],
  "rows": [
    "1",
    "2",
    "3",
    "4",
    "6",
    "8",
    "12",
    "auto",
    "none"
  ],
  "flow": [
    "row",
    "column",
    "rowDense",
    "columnDense"
  ],
  "autoRows": [
    "auto",
    "min",
    "1fr"
  ],
  "autoCols": [
    "auto",
    "min"
  ],
  "items": [
    "start",
    "center",
    "end",
    "stretch"
  ],
  "justify": [
    "start",
    "center",
    "end",
    "stretch"
  ]
}

const gridVariantKeys = Object.keys(gridVariantMap)

export const grid = /* @__PURE__ */ Object.assign(memo(gridFn.recipeFn), {
  __recipe__: true,
  __name__: 'grid',
  __getCompoundVariantCss__: gridFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: gridVariantKeys,
  variantMap: gridVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, gridVariantKeys)
  },
  getVariantProps: gridFn.getVariantProps,
})