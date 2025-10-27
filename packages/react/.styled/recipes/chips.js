import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const chipsDefaultVariants = {}
const chipsCompoundVariants = []

const chipsSlotNames = [
  [
    "root",
    "chips__root"
  ],
  [
    "control",
    "chips__control"
  ],
  [
    "context",
    "chips__context"
  ],
  [
    "clear-trigger",
    "chips__clear-trigger"
  ],
  [
    "input",
    "chips__input"
  ],
  [
    "label",
    "chips__label"
  ],
  [
    "item",
    "chips__item"
  ],
  [
    "item-input",
    "chips__item-input"
  ],
  [
    "item-text",
    "chips__item-text"
  ],
  [
    "item-delete-trigger",
    "chips__item-delete-trigger"
  ],
  [
    "hidden-input",
    "chips__hidden-input"
  ]
]
const chipsSlotFns = /* @__PURE__ */ chipsSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, chipsDefaultVariants, getSlotCompoundVariant(chipsCompoundVariants, slotName))])

const chipsFn = memo((props = {}) => {
  return Object.fromEntries(chipsSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const chipsVariantKeys = []
const getVariantProps = (variants) => ({ ...chipsDefaultVariants, ...compact(variants) })

export const chips = /* @__PURE__ */ Object.assign(chipsFn, {
  __recipe__: false,
  __name__: 'chips',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: chipsVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, chipsVariantKeys)
  },
  getVariantProps
})