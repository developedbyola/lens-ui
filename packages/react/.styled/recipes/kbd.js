import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const kbdFn = /* @__PURE__ */ createRecipe('kbd', {}, [])

const kbdVariantMap = {}

const kbdVariantKeys = Object.keys(kbdVariantMap)

export const kbd = /* @__PURE__ */ Object.assign(memo(kbdFn.recipeFn), {
  __recipe__: true,
  __name__: 'kbd',
  __getCompoundVariantCss__: kbdFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: kbdVariantKeys,
  variantMap: kbdVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, kbdVariantKeys)
  },
  getVariantProps: kbdFn.getVariantProps,
})