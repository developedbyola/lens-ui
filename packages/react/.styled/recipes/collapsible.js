import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const collapsibleDefaultVariants = {}
const collapsibleCompoundVariants = []

const collapsibleSlotNames = [
  [
    "root",
    "collapsible__root"
  ],
  [
    "context",
    "collapsible__context"
  ],
  [
    "content",
    "collapsible__content"
  ],
  [
    "trigger",
    "collapsible__trigger"
  ],
  [
    "indicator",
    "collapsible__indicator"
  ]
]
const collapsibleSlotFns = /* @__PURE__ */ collapsibleSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, collapsibleDefaultVariants, getSlotCompoundVariant(collapsibleCompoundVariants, slotName))])

const collapsibleFn = memo((props = {}) => {
  return Object.fromEntries(collapsibleSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const collapsibleVariantKeys = []
const getVariantProps = (variants) => ({ ...collapsibleDefaultVariants, ...compact(variants) })

export const collapsible = /* @__PURE__ */ Object.assign(collapsibleFn, {
  __recipe__: false,
  __name__: 'collapsible',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: collapsibleVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, collapsibleVariantKeys)
  },
  getVariantProps
})