import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { type Factory, factory } from "../factory";

export type ImageRef = React.ComponentRef<"img">;
export type ImageProps = Factory.Props<"img", {}>;
export const Image = React.forwardRef<ImageRef, ImageProps>((props, ref) => {
  const [recipeProps, imageProps] = splitProps(props, []);

  return jsx(factory.img, { ...imageProps, ref });
});
Image.displayName = "Image";
