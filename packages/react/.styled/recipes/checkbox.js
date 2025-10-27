import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const checkboxDefaultVariants = {
  "size": "sm",
  "tone": "blue",
  "shape": "round"
}
const checkboxCompoundVariants = []

const checkboxSlotNames = [
  [
    "root",
    "checkbox__root"
  ],
  [
    "context",
    "checkbox__context"
  ],
  [
    "control",
    "checkbox__control"
  ],
  [
    "group",
    "checkbox__group"
  ],
  [
    "group-provider",
    "checkbox__group-provider"
  ],
  [
    "hidden-input",
    "checkbox__hidden-input"
  ],
  [
    "indicator",
    "checkbox__indicator"
  ],
  [
    "label",
    "checkbox__label"
  ],
  [
    "provider",
    "checkbox__provider"
  ]
]
const checkboxSlotFns = /* @__PURE__ */ checkboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, checkboxDefaultVariants, getSlotCompoundVariant(checkboxCompoundVariants, slotName))])

const checkboxFn = memo((props = {}) => {
  return Object.fromEntries(checkboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const checkboxVariantKeys = [
  "shape",
  "size",
  "tone"
]
const getVariantProps = (variants) => ({ ...checkboxDefaultVariants, ...compact(variants) })

export const checkbox = /* @__PURE__ */ Object.assign(checkboxFn, {
  __recipe__: false,
  __name__: 'checkbox',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: checkboxVariantKeys,
  variantMap: {
  "shape": [
    "square",
    "round",
    "rounded",
    "circle"
  ],
  "size": [
    "xs",
    "sm",
    "base",
    "lg",
    "xl"
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
    return splitProps(props, checkboxVariantKeys)
  },
  getVariantProps
})