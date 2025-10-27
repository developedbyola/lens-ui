import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const aspectRatioFn = /* @__PURE__ */ createRecipe('aspect-ratio', {
  "ratio": "video",
  "fit": "cover"
}, [])

const aspectRatioVariantMap = {
  "ratio": [
    "photo",
    "square",
    "video",
    "portrait",
    "landscape",
    "golden",
    "cinematic",
    "photo-classic",
    "widescreen"
  ],
  "fit": [
    "cover",
    "contain",
    "fill"
  ]
}

const aspectRatioVariantKeys = Object.keys(aspectRatioVariantMap)

export const aspectRatio = /* @__PURE__ */ Object.assign(memo(aspectRatioFn.recipeFn), {
  __recipe__: true,
  __name__: 'aspectRatio',
  __getCompoundVariantCss__: aspectRatioFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: aspectRatioVariantKeys,
  variantMap: aspectRatioVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, aspectRatioVariantKeys)
  },
  getVariantProps: aspectRatioFn.getVariantProps,
})