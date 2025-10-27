import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const sectionFn = /* @__PURE__ */ createRecipe('section', {
  "screen": "fit",
  "content": "center"
}, [])

const sectionVariantMap = {
  "content": [
    "end",
    "start",
    "center"
  ],
  "screen": [
    "full",
    "fit"
  ]
}

const sectionVariantKeys = Object.keys(sectionVariantMap)

export const section = /* @__PURE__ */ Object.assign(memo(sectionFn.recipeFn), {
  __recipe__: true,
  __name__: 'section',
  __getCompoundVariantCss__: sectionFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: sectionVariantKeys,
  variantMap: sectionVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, sectionVariantKeys)
  },
  getVariantProps: sectionFn.getVariantProps,
})