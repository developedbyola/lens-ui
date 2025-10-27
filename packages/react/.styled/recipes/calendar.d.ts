/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface CalendarVariant {
  
}

type CalendarVariantMap = {
  [key in keyof CalendarVariant]: Array<CalendarVariant[key]>
}

type CalendarSlot = "root" | "clear-trigger" | "content" | "control" | "input" | "label" | "month-select" | "next-trigger" | "positioner" | "preset-trigger" | "provider" | "range-text" | "table" | "table-body" | "table-head" | "table-header" | "table-row" | "table-cell" | "table-cell-trigger" | "trigger" | "view" | "view-control" | "view-trigger" | "year-select" | "context" | "prev-trigger"

export type CalendarVariantProps = {
  [key in keyof CalendarVariant]?: ConditionalValue<CalendarVariant[key]> | undefined
}

export interface CalendarRecipe {
  __slot: CalendarSlot
  __type: CalendarVariantProps
  (props?: CalendarVariantProps): Pretty<Record<CalendarSlot, string>>
  raw: (props?: CalendarVariantProps) => CalendarVariantProps
  variantMap: CalendarVariantMap
  variantKeys: Array<keyof CalendarVariant>
  splitVariantProps<Props extends CalendarVariantProps>(props: Props): [CalendarVariantProps, Pretty<DistributiveOmit<Props, keyof CalendarVariantProps>>]
  getVariantProps: (props?: CalendarVariantProps) => CalendarVariantProps
}


export declare const calendar: CalendarRecipe