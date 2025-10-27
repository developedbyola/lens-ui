/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AlertVariant {
  /**
 * @default "round"
 */
shape: "flat" | "round" | "rounded" | "pill"
/**
 * @default "base"
 */
size: "xs" | "sm" | "base" | "lg" | "xl"
/**
 * @default "soft"
 */
visual: "filled" | "soft" | "ghost" | "outlined"
/**
 * @default "blue"
 */
tone: "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone"
}

type AlertVariantMap = {
  [key in keyof AlertVariant]: Array<AlertVariant[key]>
}

type AlertSlot = "root" | "context" | "content" | "title" | "description" | "trigger" | "indicator"

export type AlertVariantProps = {
  [key in keyof AlertVariant]?: ConditionalValue<AlertVariant[key]> | undefined
}

export interface AlertRecipe {
  __slot: AlertSlot
  __type: AlertVariantProps
  (props?: AlertVariantProps): Pretty<Record<AlertSlot, string>>
  raw: (props?: AlertVariantProps) => AlertVariantProps
  variantMap: AlertVariantMap
  variantKeys: Array<keyof AlertVariant>
  splitVariantProps<Props extends AlertVariantProps>(props: Props): [AlertVariantProps, Pretty<DistributiveOmit<Props, keyof AlertVariantProps>>]
  getVariantProps: (props?: AlertVariantProps) => AlertVariantProps
}


export declare const alert: AlertRecipe