import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const listboxDefaultVariants = {}
const listboxCompoundVariants = []

const listboxSlotNames = [
  [
    "root",
    "listbox__root"
  ],
  [
    "label",
    "listbox__label"
  ],
  [
    "item",
    "listbox__item"
  ],
  [
    "input",
    "listbox__input"
  ],
  [
    "empty",
    "listbox__empty"
  ],
  [
    "context",
    "listbox__context"
  ],
  [
    "content",
    "listbox__content"
  ],
  [
    "item-text",
    "listbox__item-text"
  ],
  [
    "item-group",
    "listbox__item-group"
  ],
  [
    "value-text",
    "listbox__value-text"
  ],
  [
    "item-context",
    "listbox__item-context"
  ],
  [
    "item-indicator",
    "listbox__item-indicator"
  ],
  [
    "item-group-label",
    "listbox__item-group-label"
  ]
]
const listboxSlotFns = /* @__PURE__ */ listboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, listboxDefaultVariants, getSlotCompoundVariant(listboxCompoundVariants, slotName))])

const listboxFn = memo((props = {}) => {
  return Object.fromEntries(listboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const listboxVariantKeys = []
const getVariantProps = (variants) => ({ ...listboxDefaultVariants, ...compact(variants) })

export const listbox = /* @__PURE__ */ Object.assign(listboxFn, {
  __recipe__: false,
  __name__: 'listbox',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: listboxVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, listboxVariantKeys)
  },
  getVariantProps
})