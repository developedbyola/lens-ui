/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextVariant {
  wrap: "wrap" | "pretty" | "balance" | "no-wrap"
role: "body" | "label" | "quote" | "display" | "heading" | "caption"
align: "left" | "right" | "center" | "justify"
tone: "info" | "primary" | "success" | "warning" | "neutral" | "secondary" | "destructive"
size: "8" | "10" | "12" | "13" | "14" | "16" | "18" | "20" | "24" | "32" | "40" | "48" | "56" | "64" | "80" | "96" | "128"
weight: "thin" | "light" | "regular" | "medium" | "semibold" | "bold" | "extrabold" | "black"
}

type TextVariantMap = {
  [key in keyof TextVariant]: Array<TextVariant[key]>
}



export type TextVariantProps = {
  [key in keyof TextVariant]?: ConditionalValue<TextVariant[key]> | undefined
}

export interface TextRecipe {
  
  __type: TextVariantProps
  (props?: TextVariantProps): string
  raw: (props?: TextVariantProps) => TextVariantProps
  variantMap: TextVariantMap
  variantKeys: Array<keyof TextVariant>
  splitVariantProps<Props extends TextVariantProps>(props: Props): [TextVariantProps, Pretty<DistributiveOmit<Props, keyof TextVariantProps>>]
  getVariantProps: (props?: TextVariantProps) => TextVariantProps
}


export declare const text: TextRecipe