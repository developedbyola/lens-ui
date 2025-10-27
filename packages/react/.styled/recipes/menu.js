import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const menuDefaultVariants = {}
const menuCompoundVariants = []

const menuSlotNames = [
  [
    "root",
    "menu__root"
  ],
  [
    "item",
    "menu__item"
  ],
  [
    "arrow",
    "menu__arrow"
  ],
  [
    "trigger",
    "menu__trigger"
  ],
  [
    "context",
    "menu__context"
  ],
  [
    "content",
    "menu__content"
  ],
  [
    "arrow-tip",
    "menu__arrow-tip"
  ],
  [
    "indicator",
    "menu__indicator"
  ],
  [
    "item-text",
    "menu__item-text"
  ],
  [
    "item-group",
    "menu__item-group"
  ],
  [
    "positioner",
    "menu__positioner"
  ],
  [
    "item-group",
    "menu__item-group"
  ],
  [
    "radio-item",
    "menu__radio-item"
  ],
  [
    "separator",
    "menu__separator"
  ],
  [
    "trigger-item",
    "menu__trigger-item"
  ],
  [
    "checkbox-item",
    "menu__checkbox-item"
  ],
  [
    "item-indicator",
    "menu__item-indicator"
  ],
  [
    "context-trigger",
    "menu__context-trigger"
  ],
  [
    "item-group-label",
    "menu__item-group-label"
  ],
  [
    "radio-item-group",
    "menu__radio-item-group"
  ]
]
const menuSlotFns = /* @__PURE__ */ menuSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, menuDefaultVariants, getSlotCompoundVariant(menuCompoundVariants, slotName))])

const menuFn = memo((props = {}) => {
  return Object.fromEntries(menuSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const menuVariantKeys = []
const getVariantProps = (variants) => ({ ...menuDefaultVariants, ...compact(variants) })

export const menu = /* @__PURE__ */ Object.assign(menuFn, {
  __recipe__: false,
  __name__: 'menu',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: menuVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, menuVariantKeys)
  },
  getVariantProps
})