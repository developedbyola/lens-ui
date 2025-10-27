import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const calendarDefaultVariants = {}
const calendarCompoundVariants = []

const calendarSlotNames = [
  [
    "root",
    "calendar__root"
  ],
  [
    "clear-trigger",
    "calendar__clear-trigger"
  ],
  [
    "content",
    "calendar__content"
  ],
  [
    "control",
    "calendar__control"
  ],
  [
    "input",
    "calendar__input"
  ],
  [
    "label",
    "calendar__label"
  ],
  [
    "month-select",
    "calendar__month-select"
  ],
  [
    "next-trigger",
    "calendar__next-trigger"
  ],
  [
    "positioner",
    "calendar__positioner"
  ],
  [
    "preset-trigger",
    "calendar__preset-trigger"
  ],
  [
    "provider",
    "calendar__provider"
  ],
  [
    "range-text",
    "calendar__range-text"
  ],
  [
    "table",
    "calendar__table"
  ],
  [
    "table-body",
    "calendar__table-body"
  ],
  [
    "table-head",
    "calendar__table-head"
  ],
  [
    "table-header",
    "calendar__table-header"
  ],
  [
    "table-row",
    "calendar__table-row"
  ],
  [
    "table-cell",
    "calendar__table-cell"
  ],
  [
    "table-cell-trigger",
    "calendar__table-cell-trigger"
  ],
  [
    "trigger",
    "calendar__trigger"
  ],
  [
    "view",
    "calendar__view"
  ],
  [
    "view-control",
    "calendar__view-control"
  ],
  [
    "view-trigger",
    "calendar__view-trigger"
  ],
  [
    "year-select",
    "calendar__year-select"
  ],
  [
    "context",
    "calendar__context"
  ],
  [
    "prev-trigger",
    "calendar__prev-trigger"
  ]
]
const calendarSlotFns = /* @__PURE__ */ calendarSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, calendarDefaultVariants, getSlotCompoundVariant(calendarCompoundVariants, slotName))])

const calendarFn = memo((props = {}) => {
  return Object.fromEntries(calendarSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const calendarVariantKeys = []
const getVariantProps = (variants) => ({ ...calendarDefaultVariants, ...compact(variants) })

export const calendar = /* @__PURE__ */ Object.assign(calendarFn, {
  __recipe__: false,
  __name__: 'calendar',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: calendarVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, calendarVariantKeys)
  },
  getVariantProps
})