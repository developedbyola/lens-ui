import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const alertDefaultVariants = {
  "size": "base",
  "tone": "blue",
  "shape": "round",
  "visual": "soft"
}
const alertCompoundVariants = []

const alertSlotNames = [
  [
    "root",
    "alert__root"
  ],
  [
    "context",
    "alert__context"
  ],
  [
    "content",
    "alert__content"
  ],
  [
    "title",
    "alert__title"
  ],
  [
    "description",
    "alert__description"
  ],
  [
    "trigger",
    "alert__trigger"
  ],
  [
    "indicator",
    "alert__indicator"
  ]
]
const alertSlotFns = /* @__PURE__ */ alertSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, alertDefaultVariants, getSlotCompoundVariant(alertCompoundVariants, slotName))])

const alertFn = memo((props = {}) => {
  return Object.fromEntries(alertSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const alertVariantKeys = [
  "shape",
  "size",
  "visual",
  "tone"
]
const getVariantProps = (variants) => ({ ...alertDefaultVariants, ...compact(variants) })

export const alert = /* @__PURE__ */ Object.assign(alertFn, {
  __recipe__: false,
  __name__: 'alert',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: alertVariantKeys,
  variantMap: {
  "shape": [
    "flat",
    "round",
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
    "filled",
    "soft",
    "ghost",
    "outlined"
  ],
  "tone": [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, alertVariantKeys)
  },
  getVariantProps
})