/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface GridVariant {
  /**
 * @default "1"
 */
cols: "1" | "2" | "3" | "4" | "6" | "8" | "12" | "none" | "auto"
rows: "1" | "2" | "3" | "4" | "6" | "8" | "12" | "auto" | "none"
/**
 * @default "row"
 */
flow: "row" | "column" | "rowDense" | "columnDense"
autoRows: "auto" | "min" | "1fr"
autoCols: "auto" | "min"
/**
 * @default "stretch"
 */
items: "start" | "center" | "end" | "stretch"
/**
 * @default "start"
 */
justify: "start" | "center" | "end" | "stretch"
}

type GridVariantMap = {
  [key in keyof GridVariant]: Array<GridVariant[key]>
}



export type GridVariantProps = {
  [key in keyof GridVariant]?: ConditionalValue<GridVariant[key]> | undefined
}

export interface GridRecipe {
  
  __type: GridVariantProps
  (props?: GridVariantProps): string
  raw: (props?: GridVariantProps) => GridVariantProps
  variantMap: GridVariantMap
  variantKeys: Array<keyof GridVariant>
  splitVariantProps<Props extends GridVariantProps>(props: Props): [GridVariantProps, Pretty<DistributiveOmit<Props, keyof GridVariantProps>>]
  getVariantProps: (props?: GridVariantProps) => GridVariantProps
}


export declare const grid: GridRecipe