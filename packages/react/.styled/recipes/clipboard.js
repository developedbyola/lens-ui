import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const clipboardDefaultVariants = {}
const clipboardCompoundVariants = []

const clipboardSlotNames = [
  [
    "root",
    "clipboard__root"
  ],
  [
    "label",
    "clipboard__label"
  ],
  [
    "context",
    "clipboard__context"
  ],
  [
    "control",
    "clipboard__control"
  ],
  [
    "trigger",
    "clipboard__trigger"
  ],
  [
    "indicator",
    "clipboard__indicator"
  ],
  [
    "value-text",
    "clipboard__value-text"
  ],
  [
    "text-input",
    "clipboard__text-input"
  ]
]
const clipboardSlotFns = /* @__PURE__ */ clipboardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, clipboardDefaultVariants, getSlotCompoundVariant(clipboardCompoundVariants, slotName))])

const clipboardFn = memo((props = {}) => {
  return Object.fromEntries(clipboardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const clipboardVariantKeys = []
const getVariantProps = (variants) => ({ ...clipboardDefaultVariants, ...compact(variants) })

export const clipboard = /* @__PURE__ */ Object.assign(clipboardFn, {
  __recipe__: false,
  __name__: 'clipboard',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: clipboardVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, clipboardVariantKeys)
  },
  getVariantProps
})