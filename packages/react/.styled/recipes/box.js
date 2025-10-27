import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const boxFn = /* @__PURE__ */ createRecipe('box', {}, [])

const boxVariantMap = {}

const boxVariantKeys = Object.keys(boxVariantMap)

export const box = /* @__PURE__ */ Object.assign(memo(boxFn.recipeFn), {
  __recipe__: true,
  __name__: 'box',
  __getCompoundVariantCss__: boxFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: boxVariantKeys,
  variantMap: boxVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, boxVariantKeys)
  },
  getVariantProps: boxFn.getVariantProps,
})