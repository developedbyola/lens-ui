/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AspectRatioVariant {
  /**
 * @default "video"
 */
ratio: "photo" | "square" | "video" | "portrait" | "landscape" | "golden" | "cinematic" | "photo-classic" | "widescreen"
/**
 * @default "cover"
 */
fit: "cover" | "contain" | "fill"
}

type AspectRatioVariantMap = {
  [key in keyof AspectRatioVariant]: Array<AspectRatioVariant[key]>
}



export type AspectRatioVariantProps = {
  [key in keyof AspectRatioVariant]?: ConditionalValue<AspectRatioVariant[key]> | undefined
}

export interface AspectRatioRecipe {
  
  __type: AspectRatioVariantProps
  (props?: AspectRatioVariantProps): string
  raw: (props?: AspectRatioVariantProps) => AspectRatioVariantProps
  variantMap: AspectRatioVariantMap
  variantKeys: Array<keyof AspectRatioVariant>
  splitVariantProps<Props extends AspectRatioVariantProps>(props: Props): [AspectRatioVariantProps, Pretty<DistributiveOmit<Props, keyof AspectRatioVariantProps>>]
  getVariantProps: (props?: AspectRatioVariantProps) => AspectRatioVariantProps
}

/**
 * A component for maintaining consistent aspect ratios for its children.
 */
export declare const aspectRatio: AspectRatioRecipe