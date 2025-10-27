/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ButtonVariant {
  /**
 * @default "base"
 */
size: "xs" | "sm" | "base" | "lg" | "xl"
/**
 * @default "round"
 */
shape: "flat" | "round" | "pill" | "rounded"
/**
 * @default false
 */
span: boolean
/**
 * @default false
 */
link: boolean
/**
 * @default "filled"
 */
visual: "filled" | "outlined" | "soft" | "ghost"
/**
 * @default "blue"
 */
tone: "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone"
}

type ButtonVariantMap = {
  [key in keyof ButtonVariant]: Array<ButtonVariant[key]>
}



export type ButtonVariantProps = {
  [key in keyof ButtonVariant]?: ConditionalValue<ButtonVariant[key]> | undefined
}

export interface ButtonRecipe {
  
  __type: ButtonVariantProps
  (props?: ButtonVariantProps): string
  raw: (props?: ButtonVariantProps) => ButtonVariantProps
  variantMap: ButtonVariantMap
  variantKeys: Array<keyof ButtonVariant>
  splitVariantProps<Props extends ButtonVariantProps>(props: Props): [ButtonVariantProps, Pretty<DistributiveOmit<Props, keyof ButtonVariantProps>>]
  getVariantProps: (props?: ButtonVariantProps) => ButtonVariantProps
}

/**
 * A versatile button with tone and visual variants using CSS variables
 */
export declare const button: ButtonRecipe