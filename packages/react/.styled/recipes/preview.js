import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const previewDefaultVariants = {}
const previewCompoundVariants = []

const previewSlotNames = [
  [
    "root",
    "preview__root"
  ],
  [
    "arrow",
    "preview__arrow"
  ],
  [
    "context",
    "preview__context"
  ],
  [
    "arrow-tip",
    "preview__arrow-tip"
  ],
  [
    "content",
    "preview__content"
  ],
  [
    "positioner",
    "preview__positioner"
  ],
  [
    "trigger",
    "preview__trigger"
  ]
]
const previewSlotFns = /* @__PURE__ */ previewSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, previewDefaultVariants, getSlotCompoundVariant(previewCompoundVariants, slotName))])

const previewFn = memo((props = {}) => {
  return Object.fromEntries(previewSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const previewVariantKeys = []
const getVariantProps = (variants) => ({ ...previewDefaultVariants, ...compact(variants) })

export const preview = /* @__PURE__ */ Object.assign(previewFn, {
  __recipe__: false,
  __name__: 'preview',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: previewVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, previewVariantKeys)
  },
  getVariantProps
})