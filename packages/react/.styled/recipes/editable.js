import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const editableDefaultVariants = {}
const editableCompoundVariants = []

const editableSlotNames = [
  [
    "root",
    "editable__root"
  ],
  [
    "label",
    "editable__label"
  ],
  [
    "area",
    "editable__area"
  ],
  [
    "preview",
    "editable__preview"
  ],
  [
    "input",
    "editable__input"
  ],
  [
    "edit-trigger",
    "editable__edit-trigger"
  ],
  [
    "submit-trigger",
    "editable__submit-trigger"
  ],
  [
    "cancel-trigger",
    "editable__cancel-trigger"
  ],
  [
    "control",
    "editable__control"
  ],
  [
    "context",
    "editable__context"
  ]
]
const editableSlotFns = /* @__PURE__ */ editableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, editableDefaultVariants, getSlotCompoundVariant(editableCompoundVariants, slotName))])

const editableFn = memo((props = {}) => {
  return Object.fromEntries(editableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const editableVariantKeys = []
const getVariantProps = (variants) => ({ ...editableDefaultVariants, ...compact(variants) })

export const editable = /* @__PURE__ */ Object.assign(editableFn, {
  __recipe__: false,
  __name__: 'editable',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: editableVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, editableVariantKeys)
  },
  getVariantProps
})