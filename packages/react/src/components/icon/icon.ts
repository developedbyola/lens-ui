import React from "react";
import { jsx } from "react/jsx-runtime";
import { Factory, factory } from "../factory";

export type IconRef = React.ComponentRef<"svg">;
export type IconProps = Factory.Props<"svg">;
export const Icon = React.forwardRef<IconRef, IconProps>((props, ref) => {
  return jsx(factory.svg, {
    ...props,
    ref,
  });
});
Icon.displayName = "Icon";
