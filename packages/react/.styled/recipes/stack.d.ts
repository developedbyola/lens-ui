/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface StackVariant {
  /**
 * @default "horizontal"
 */
axis: "horizontal" | "vertical"
/**
 * @default "start"
 */
items: "center" | "start" | "end" | "stretch" | "baseline"
/**
 * @default "start"
 */
justify: "center" | "start" | "end" | "between" | "around" | "evenly"
/**
 * @default false
 */
wrap: boolean
}

type StackVariantMap = {
  [key in keyof StackVariant]: Array<StackVariant[key]>
}



export type StackVariantProps = {
  [key in keyof StackVariant]?: ConditionalValue<StackVariant[key]> | undefined
}

export interface StackRecipe {
  
  __type: StackVariantProps
  (props?: StackVariantProps): string
  raw: (props?: StackVariantProps) => StackVariantProps
  variantMap: StackVariantMap
  variantKeys: Array<keyof StackVariant>
  splitVariantProps<Props extends StackVariantProps>(props: Props): [StackVariantProps, Pretty<DistributiveOmit<Props, keyof StackVariantProps>>]
  getVariantProps: (props?: StackVariantProps) => StackVariantProps
}


export declare const stack: StackRecipe