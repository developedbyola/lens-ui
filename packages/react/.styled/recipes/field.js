import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const fieldDefaultVariants = {}
const fieldCompoundVariants = []

const fieldSlotNames = [
  [
    "root",
    "field__root"
  ],
  [
    "input",
    "field__input"
  ],
  [
    "label",
    "field__label"
  ],
  [
    "error",
    "field__error"
  ],
  [
    "select",
    "field__select"
  ],
  [
    "helper",
    "field__helper"
  ],
  [
    "context",
    "field__context"
  ],
  [
    "textarea",
    "field__textarea"
  ],
  [
    "textarea",
    "field__textarea"
  ],
  [
    "required-indicator",
    "field__required-indicator"
  ]
]
const fieldSlotFns = /* @__PURE__ */ fieldSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, fieldDefaultVariants, getSlotCompoundVariant(fieldCompoundVariants, slotName))])

const fieldFn = memo((props = {}) => {
  return Object.fromEntries(fieldSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const fieldVariantKeys = []
const getVariantProps = (variants) => ({ ...fieldDefaultVariants, ...compact(variants) })

export const field = /* @__PURE__ */ Object.assign(fieldFn, {
  __recipe__: false,
  __name__: 'field',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: fieldVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, fieldVariantKeys)
  },
  getVariantProps
})