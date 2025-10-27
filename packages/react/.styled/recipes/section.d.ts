/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SectionVariant {
  /**
 * @default "center"
 */
content: "end" | "start" | "center"
/**
 * @default "fit"
 */
screen: "full" | "fit"
}

type SectionVariantMap = {
  [key in keyof SectionVariant]: Array<SectionVariant[key]>
}



export type SectionVariantProps = {
  [key in keyof SectionVariant]?: ConditionalValue<SectionVariant[key]> | undefined
}

export interface SectionRecipe {
  
  __type: SectionVariantProps
  (props?: SectionVariantProps): string
  raw: (props?: SectionVariantProps) => SectionVariantProps
  variantMap: SectionVariantMap
  variantKeys: Array<keyof SectionVariant>
  splitVariantProps<Props extends SectionVariantProps>(props: Props): [SectionVariantProps, Pretty<DistributiveOmit<Props, keyof SectionVariantProps>>]
  getVariantProps: (props?: SectionVariantProps) => SectionVariantProps
}


export declare const section: SectionRecipe