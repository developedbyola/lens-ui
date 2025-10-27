/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface UploadVariant {
  
}

type UploadVariantMap = {
  [key in keyof UploadVariant]: Array<UploadVariant[key]>
}

type UploadSlot = "root" | "item" | "label" | "trigger" | "context" | "dropzone" | "item-name" | "item-group" | "hidden-input" | "item-preview" | "clear-trigger" | "item-size-text" | "item-preview-image" | "item-delete-trigger"

export type UploadVariantProps = {
  [key in keyof UploadVariant]?: ConditionalValue<UploadVariant[key]> | undefined
}

export interface UploadRecipe {
  __slot: UploadSlot
  __type: UploadVariantProps
  (props?: UploadVariantProps): Pretty<Record<UploadSlot, string>>
  raw: (props?: UploadVariantProps) => UploadVariantProps
  variantMap: UploadVariantMap
  variantKeys: Array<keyof UploadVariant>
  splitVariantProps<Props extends UploadVariantProps>(props: Props): [UploadVariantProps, Pretty<DistributiveOmit<Props, keyof UploadVariantProps>>]
  getVariantProps: (props?: UploadVariantProps) => UploadVariantProps
}


export declare const upload: UploadRecipe