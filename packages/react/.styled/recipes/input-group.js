import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const inputGroupDefaultVariants = {
  "size": "base",
  "shape": "round",
  "visual": "outlined"
}
const inputGroupCompoundVariants = []

const inputGroupSlotNames = [
  [
    "root",
    "input-group__root"
  ],
  [
    "addon",
    "input-group__addon"
  ],
  [
    "input",
    "input-group__input"
  ],
  [
    "textarea",
    "input-group__textarea"
  ]
]
const inputGroupSlotFns = /* @__PURE__ */ inputGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, inputGroupDefaultVariants, getSlotCompoundVariant(inputGroupCompoundVariants, slotName))])

const inputGroupFn = memo((props = {}) => {
  return Object.fromEntries(inputGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const inputGroupVariantKeys = [
  "shape",
  "size",
  "visual"
]
const getVariantProps = (variants) => ({ ...inputGroupDefaultVariants, ...compact(variants) })

export const inputGroup = /* @__PURE__ */ Object.assign(inputGroupFn, {
  __recipe__: false,
  __name__: 'inputGroup',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: inputGroupVariantKeys,
  variantMap: {
  "shape": [
    "round",
    "flat",
    "rounded",
    "pill"
  ],
  "size": [
    "xs",
    "sm",
    "base",
    "lg",
    "xl"
  ],
  "visual": [
    "ghost",
    "filled",
    "outlined",
    "underlined"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, inputGroupVariantKeys)
  },
  getVariantProps
})