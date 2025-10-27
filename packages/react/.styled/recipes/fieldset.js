import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const fieldsetDefaultVariants = {}
const fieldsetCompoundVariants = []

const fieldsetSlotNames = [
  [
    "root",
    "fieldset__root"
  ],
  [
    "context",
    "fieldset__context"
  ],
  [
    "helper",
    "fieldset__helper"
  ],
  [
    "error",
    "fieldset__error"
  ],
  [
    "legend",
    "fieldset__legend"
  ]
]
const fieldsetSlotFns = /* @__PURE__ */ fieldsetSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, fieldsetDefaultVariants, getSlotCompoundVariant(fieldsetCompoundVariants, slotName))])

const fieldsetFn = memo((props = {}) => {
  return Object.fromEntries(fieldsetSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const fieldsetVariantKeys = []
const getVariantProps = (variants) => ({ ...fieldsetDefaultVariants, ...compact(variants) })

export const fieldset = /* @__PURE__ */ Object.assign(fieldsetFn, {
  __recipe__: false,
  __name__: 'fieldset',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: fieldsetVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, fieldsetVariantKeys)
  },
  getVariantProps
})