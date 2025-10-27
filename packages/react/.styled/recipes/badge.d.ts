/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface BadgeVariant {
  /**
 * @default "base"
 */
size: "xs" | "sm" | "lg" | "xl" | "base"
/**
 * @default "round"
 */
shape: "flat" | "round" | "rounded" | "pill"
/**
 * @default "filled"
 */
visual: "filled" | "soft" | "outlined" | "ghost"
/**
 * @default "blue"
 */
tone: "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone"
}

type BadgeVariantMap = {
  [key in keyof BadgeVariant]: Array<BadgeVariant[key]>
}



export type BadgeVariantProps = {
  [key in keyof BadgeVariant]?: ConditionalValue<BadgeVariant[key]> | undefined
}

export interface BadgeRecipe {
  
  __type: BadgeVariantProps
  (props?: BadgeVariantProps): string
  raw: (props?: BadgeVariantProps) => BadgeVariantProps
  variantMap: BadgeVariantMap
  variantKeys: Array<keyof BadgeVariant>
  splitVariantProps<Props extends BadgeVariantProps>(props: Props): [BadgeVariantProps, Pretty<DistributiveOmit<Props, keyof BadgeVariantProps>>]
  getVariantProps: (props?: BadgeVariantProps) => BadgeVariantProps
}


export declare const badge: BadgeRecipe