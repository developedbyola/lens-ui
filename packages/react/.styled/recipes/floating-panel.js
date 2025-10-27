import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const floatingPanelDefaultVariants = {}
const floatingPanelCompoundVariants = []

const floatingPanelSlotNames = [
  [
    "root",
    "floating-panel__root"
  ],
  [
    "positioner",
    "floating-panel__positioner"
  ],
  [
    "content",
    "floating-panel__content"
  ],
  [
    "title",
    "floating-panel__title"
  ],
  [
    "header",
    "floating-panel__header"
  ],
  [
    "control",
    "floating-panel__control"
  ],
  [
    "stage-trigger",
    "floating-panel__stage-trigger"
  ],
  [
    "close-trigger",
    "floating-panel__close-trigger"
  ],
  [
    "body",
    "floating-panel__body"
  ],
  [
    "context",
    "floating-panel__context"
  ],
  [
    "trigger",
    "floating-panel__trigger"
  ],
  [
    "drag-trigger",
    "floating-panel__drag-trigger"
  ],
  [
    "resize-trigger",
    "floating-panel__resize-trigger"
  ]
]
const floatingPanelSlotFns = /* @__PURE__ */ floatingPanelSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, floatingPanelDefaultVariants, getSlotCompoundVariant(floatingPanelCompoundVariants, slotName))])

const floatingPanelFn = memo((props = {}) => {
  return Object.fromEntries(floatingPanelSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const floatingPanelVariantKeys = []
const getVariantProps = (variants) => ({ ...floatingPanelDefaultVariants, ...compact(variants) })

export const floatingPanel = /* @__PURE__ */ Object.assign(floatingPanelFn, {
  __recipe__: false,
  __name__: 'floatingPanel',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: floatingPanelVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, floatingPanelVariantKeys)
  },
  getVariantProps
})