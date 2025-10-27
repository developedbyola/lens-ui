/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ChipsVariant {
  
}

type ChipsVariantMap = {
  [key in keyof ChipsVariant]: Array<ChipsVariant[key]>
}

type ChipsSlot = "root" | "control" | "context" | "clear-trigger" | "input" | "label" | "item" | "item-input" | "item-text" | "item-delete-trigger" | "hidden-input"

export type ChipsVariantProps = {
  [key in keyof ChipsVariant]?: ConditionalValue<ChipsVariant[key]> | undefined
}

export interface ChipsRecipe {
  __slot: ChipsSlot
  __type: ChipsVariantProps
  (props?: ChipsVariantProps): Pretty<Record<ChipsSlot, string>>
  raw: (props?: ChipsVariantProps) => ChipsVariantProps
  variantMap: ChipsVariantMap
  variantKeys: Array<keyof ChipsVariant>
  splitVariantProps<Props extends ChipsVariantProps>(props: Props): [ChipsVariantProps, Pretty<DistributiveOmit<Props, keyof ChipsVariantProps>>]
  getVariantProps: (props?: ChipsVariantProps) => ChipsVariantProps
}


export declare const chips: ChipsRecipe