/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AvatarVariant {
  /**
 * @default "base"
 */
size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"
/**
 * @default "circle"
 */
shape: "square" | "round" | "rounded" | "circle"
/**
 * @default "soft"
 */
visual: "filled" | "soft" | "ghost" | "outlined"
/**
 * @default "neutral"
 */
tone: "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone"
}

type AvatarVariantMap = {
  [key in keyof AvatarVariant]: Array<AvatarVariant[key]>
}

type AvatarSlot = "root" | "context" | "image" | "fallback"

export type AvatarVariantProps = {
  [key in keyof AvatarVariant]?: ConditionalValue<AvatarVariant[key]> | undefined
}

export interface AvatarRecipe {
  __slot: AvatarSlot
  __type: AvatarVariantProps
  (props?: AvatarVariantProps): Pretty<Record<AvatarSlot, string>>
  raw: (props?: AvatarVariantProps) => AvatarVariantProps
  variantMap: AvatarVariantMap
  variantKeys: Array<keyof AvatarVariant>
  splitVariantProps<Props extends AvatarVariantProps>(props: Props): [AvatarVariantProps, Pretty<DistributiveOmit<Props, keyof AvatarVariantProps>>]
  getVariantProps: (props?: AvatarVariantProps) => AvatarVariantProps
}


export declare const avatar: AvatarRecipe