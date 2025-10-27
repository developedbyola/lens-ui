import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const dialogDefaultVariants = {}
const dialogCompoundVariants = []

const dialogSlotNames = [
  [
    "root",
    "dialog__root"
  ],
  [
    "backdrop",
    "dialog__backdrop"
  ],
  [
    "trigger",
    "dialog__trigger"
  ],
  [
    "close-trigger",
    "dialog__close-trigger"
  ],
  [
    "content",
    "dialog__content"
  ],
  [
    "context",
    "dialog__context"
  ],
  [
    "description",
    "dialog__description"
  ],
  [
    "positioner",
    "dialog__positioner"
  ],
  [
    "title",
    "dialog__title"
  ]
]
const dialogSlotFns = /* @__PURE__ */ dialogSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dialogDefaultVariants, getSlotCompoundVariant(dialogCompoundVariants, slotName))])

const dialogFn = memo((props = {}) => {
  return Object.fromEntries(dialogSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dialogVariantKeys = []
const getVariantProps = (variants) => ({ ...dialogDefaultVariants, ...compact(variants) })

export const dialog = /* @__PURE__ */ Object.assign(dialogFn, {
  __recipe__: false,
  __name__: 'dialog',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dialogVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, dialogVariantKeys)
  },
  getVariantProps
})