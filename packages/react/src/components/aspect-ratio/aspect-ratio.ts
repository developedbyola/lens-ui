import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { Factory, factory } from "../factory";
import { aspectRatio, type AspectRatioVariantProps } from "../../../.styled/recipes";


export type AspectRatioRef = React.ComponentRef<"div">;
export type AspectRatioProps = Factory.Props<"div", AspectRatioVariantProps>;
export const AspectRatio = React.forwardRef<AspectRatioRef, AspectRatioProps>(
  (props, ref) => {
    const [recipeProps, divProps] = splitProps(props, ['ratio', 'fit']);
    const className = cx(aspectRatio(recipeProps), props.className);

    return jsx(factory.div, {
      ...divProps,
      ref,
      className,
    });
  },
);
AspectRatio.displayName = "AspectRatio";
