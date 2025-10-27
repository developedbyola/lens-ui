import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const uploadDefaultVariants = {}
const uploadCompoundVariants = []

const uploadSlotNames = [
  [
    "root",
    "upload__root"
  ],
  [
    "item",
    "upload__item"
  ],
  [
    "label",
    "upload__label"
  ],
  [
    "trigger",
    "upload__trigger"
  ],
  [
    "context",
    "upload__context"
  ],
  [
    "dropzone",
    "upload__dropzone"
  ],
  [
    "item-name",
    "upload__item-name"
  ],
  [
    "item-group",
    "upload__item-group"
  ],
  [
    "hidden-input",
    "upload__hidden-input"
  ],
  [
    "item-preview",
    "upload__item-preview"
  ],
  [
    "clear-trigger",
    "upload__clear-trigger"
  ],
  [
    "item-size-text",
    "upload__item-size-text"
  ],
  [
    "item-preview-image",
    "upload__item-preview-image"
  ],
  [
    "item-delete-trigger",
    "upload__item-delete-trigger"
  ]
]
const uploadSlotFns = /* @__PURE__ */ uploadSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, uploadDefaultVariants, getSlotCompoundVariant(uploadCompoundVariants, slotName))])

const uploadFn = memo((props = {}) => {
  return Object.fromEntries(uploadSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const uploadVariantKeys = []
const getVariantProps = (variants) => ({ ...uploadDefaultVariants, ...compact(variants) })

export const upload = /* @__PURE__ */ Object.assign(uploadFn, {
  __recipe__: false,
  __name__: 'upload',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: uploadVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, uploadVariantKeys)
  },
  getVariantProps
})