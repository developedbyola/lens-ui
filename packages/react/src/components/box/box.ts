import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { Factory, factory } from "../factory";
import { box, BoxVariantProps } from "../../../.styled/recipes";

export type BoxRef = React.ComponentRef<"div">;
export type BoxProps = Factory.Props<"div", BoxVariantProps>;
export const Box = React.forwardRef<BoxRef, BoxProps>((props, ref) => {
  const [recipeProps, divProps] = splitProps(props, []);
  const className = cx(box(recipeProps), props.className);

  return jsx(factory.div, {
    ...divProps,
    ref,
    className,
  });
});
Box.displayName = "Box";
