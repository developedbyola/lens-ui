import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const containerFn = /* @__PURE__ */ createRecipe('container', {
  "size": "base"
}, [])

const containerVariantMap = {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "base",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl"
  ]
}

const containerVariantKeys = Object.keys(containerVariantMap)

export const container = /* @__PURE__ */ Object.assign(memo(containerFn.recipeFn), {
  __recipe__: true,
  __name__: 'container',
  __getCompoundVariantCss__: containerFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: containerVariantKeys,
  variantMap: containerVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, containerVariantKeys)
  },
  getVariantProps: containerFn.getVariantProps,
})