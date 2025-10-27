/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface PreviewVariant {
  
}

type PreviewVariantMap = {
  [key in keyof PreviewVariant]: Array<PreviewVariant[key]>
}

type PreviewSlot = "root" | "arrow" | "context" | "arrow-tip" | "content" | "positioner" | "trigger"

export type PreviewVariantProps = {
  [key in keyof PreviewVariant]?: ConditionalValue<PreviewVariant[key]> | undefined
}

export interface PreviewRecipe {
  __slot: PreviewSlot
  __type: PreviewVariantProps
  (props?: PreviewVariantProps): Pretty<Record<PreviewSlot, string>>
  raw: (props?: PreviewVariantProps) => PreviewVariantProps
  variantMap: PreviewVariantMap
  variantKeys: Array<keyof PreviewVariant>
  splitVariantProps<Props extends PreviewVariantProps>(props: Props): [PreviewVariantProps, Pretty<DistributiveOmit<Props, keyof PreviewVariantProps>>]
  getVariantProps: (props?: PreviewVariantProps) => PreviewVariantProps
}


export declare const preview: PreviewRecipe