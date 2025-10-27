import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const comboboxDefaultVariants = {}
const comboboxCompoundVariants = []

const comboboxSlotNames = [
  [
    "root",
    "combobox__root"
  ],
  [
    "context",
    "combobox__context"
  ],
  [
    "content",
    "combobox__content"
  ],
  [
    "list",
    "combobox__list"
  ],
  [
    "item",
    "combobox__item"
  ],
  [
    "item-indicator",
    "combobox__item-indicator"
  ],
  [
    "item-text",
    "combobox__item-text"
  ],
  [
    "item-group",
    "combobox__item-group"
  ],
  [
    "item-group-label",
    "combobox__item-group-label"
  ],
  [
    "clear-trigger",
    "combobox__clear-trigger"
  ],
  [
    "control",
    "combobox__control"
  ],
  [
    "label",
    "combobox__label"
  ],
  [
    "text-input",
    "combobox__text-input"
  ],
  [
    "trigger",
    "combobox__trigger"
  ],
  [
    "positioner",
    "combobox__positioner"
  ]
]
const comboboxSlotFns = /* @__PURE__ */ comboboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, comboboxDefaultVariants, getSlotCompoundVariant(comboboxCompoundVariants, slotName))])

const comboboxFn = memo((props = {}) => {
  return Object.fromEntries(comboboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const comboboxVariantKeys = []
const getVariantProps = (variants) => ({ ...comboboxDefaultVariants, ...compact(variants) })

export const combobox = /* @__PURE__ */ Object.assign(comboboxFn, {
  __recipe__: false,
  __name__: 'combobox',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: comboboxVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, comboboxVariantKeys)
  },
  getVariantProps
})