/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface CheckboxVariant {
  /**
 * @default "round"
 */
shape: "square" | "round" | "rounded" | "circle"
/**
 * @default "sm"
 */
size: "xs" | "sm" | "base" | "lg" | "xl"
/**
 * @default "blue"
 */
tone: "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone"
}

type CheckboxVariantMap = {
  [key in keyof CheckboxVariant]: Array<CheckboxVariant[key]>
}

type CheckboxSlot = "root" | "context" | "control" | "group" | "group-provider" | "hidden-input" | "indicator" | "label" | "provider"

export type CheckboxVariantProps = {
  [key in keyof CheckboxVariant]?: ConditionalValue<CheckboxVariant[key]> | undefined
}

export interface CheckboxRecipe {
  __slot: CheckboxSlot
  __type: CheckboxVariantProps
  (props?: CheckboxVariantProps): Pretty<Record<CheckboxSlot, string>>
  raw: (props?: CheckboxVariantProps) => CheckboxVariantProps
  variantMap: CheckboxVariantMap
  variantKeys: Array<keyof CheckboxVariant>
  splitVariantProps<Props extends CheckboxVariantProps>(props: Props): [CheckboxVariantProps, Pretty<DistributiveOmit<Props, keyof CheckboxVariantProps>>]
  getVariantProps: (props?: CheckboxVariantProps) => CheckboxVariantProps
}


export declare const checkbox: CheckboxRecipe