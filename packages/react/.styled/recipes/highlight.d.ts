/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface HighlightVariant {
  /**
 * @default "base"
 */
size: "xs" | "sm" | "lg" | "xl" | "base"
/**
 * @default "filled"
 */
visual: "soft" | "filled" | "outlined" | "ghost" | "plain"
/**
 * @default "primary"
 */
tone: "info" | "primary" | "success" | "warning" | "neutral" | "secondary" | "destructive"
/**
 * @default "rounded"
 */
shape: "flat" | "round" | "pill" | "rounded"
/**
 * @default "fit"
 */
span: "fit" | "full"
}

type HighlightVariantMap = {
  [key in keyof HighlightVariant]: Array<HighlightVariant[key]>
}



export type HighlightVariantProps = {
  [key in keyof HighlightVariant]?: HighlightVariant[key] | undefined
}

export interface HighlightRecipe {
  
  __type: HighlightVariantProps
  (props?: HighlightVariantProps): string
  raw: (props?: HighlightVariantProps) => HighlightVariantProps
  variantMap: HighlightVariantMap
  variantKeys: Array<keyof HighlightVariant>
  splitVariantProps<Props extends HighlightVariantProps>(props: Props): [HighlightVariantProps, Pretty<DistributiveOmit<Props, keyof HighlightVariantProps>>]
  getVariantProps: (props?: HighlightVariantProps) => HighlightVariantProps
}


export declare const highlight: HighlightRecipe