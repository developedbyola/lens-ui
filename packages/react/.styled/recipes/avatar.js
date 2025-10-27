import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const avatarDefaultVariants = {
  "size": "base",
  "tone": "neutral",
  "shape": "circle",
  "visual": "soft"
}
const avatarCompoundVariants = []

const avatarSlotNames = [
  [
    "root",
    "avatar__root"
  ],
  [
    "context",
    "avatar__context"
  ],
  [
    "image",
    "avatar__image"
  ],
  [
    "fallback",
    "avatar__fallback"
  ]
]
const avatarSlotFns = /* @__PURE__ */ avatarSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, avatarDefaultVariants, getSlotCompoundVariant(avatarCompoundVariants, slotName))])

const avatarFn = memo((props = {}) => {
  return Object.fromEntries(avatarSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const avatarVariantKeys = [
  "size",
  "shape",
  "visual",
  "tone"
]
const getVariantProps = (variants) => ({ ...avatarDefaultVariants, ...compact(variants) })

export const avatar = /* @__PURE__ */ Object.assign(avatarFn, {
  __recipe__: false,
  __name__: 'avatar',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: avatarVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "base",
    "lg",
    "xl",
    "2xl",
    "3xl"
  ],
  "shape": [
    "square",
    "round",
    "rounded",
    "circle"
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
    return splitProps(props, avatarVariantKeys)
  },
  getVariantProps
})