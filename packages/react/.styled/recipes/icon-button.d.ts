/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface IconButtonVariant {
  /**
 * @default "20"
 */
size: "12" | "13" | "14" | "16" | "18" | "20" | "24" | "28" | "32" | "36" | "40" | "48" | "56" | "64"
/**
 * @default "round"
 */
shape: "square" | "round" | "rounded" | "circle"
/**
 * @default "filled"
 */
visual: "filled" | "outlined" | "soft" | "ghost"
/**
 * @default "blue"
 */
tone: "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone"
}

type IconButtonVariantMap = {
  [key in keyof IconButtonVariant]: Array<IconButtonVariant[key]>
}



export type IconButtonVariantProps = {
  [key in keyof IconButtonVariant]?: ConditionalValue<IconButtonVariant[key]> | undefined
}

export interface IconButtonRecipe {
  
  __type: IconButtonVariantProps
  (props?: IconButtonVariantProps): string
  raw: (props?: IconButtonVariantProps) => IconButtonVariantProps
  variantMap: IconButtonVariantMap
  variantKeys: Array<keyof IconButtonVariant>
  splitVariantProps<Props extends IconButtonVariantProps>(props: Props): [IconButtonVariantProps, Pretty<DistributiveOmit<Props, keyof IconButtonVariantProps>>]
  getVariantProps: (props?: IconButtonVariantProps) => IconButtonVariantProps
}

/**
 * A versatile button with tone and visual variants using CSS variables
 */
export declare const iconButton: IconButtonRecipe