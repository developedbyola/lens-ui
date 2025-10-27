/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface IconVariant {
  size: "10" | "12" | "13" | "14" | "16" | "18" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96"
}

type IconVariantMap = {
  [key in keyof IconVariant]: Array<IconVariant[key]>
}



export type IconVariantProps = {
  [key in keyof IconVariant]?: ConditionalValue<IconVariant[key]> | undefined
}

export interface IconRecipe {
  
  __type: IconVariantProps
  (props?: IconVariantProps): string
  raw: (props?: IconVariantProps) => IconVariantProps
  variantMap: IconVariantMap
  variantKeys: Array<keyof IconVariant>
  splitVariantProps<Props extends IconVariantProps>(props: Props): [IconVariantProps, Pretty<DistributiveOmit<Props, keyof IconVariantProps>>]
  getVariantProps: (props?: IconVariantProps) => IconVariantProps
}


export declare const icon: IconRecipe