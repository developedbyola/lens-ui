import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { Factory, factory } from "../factory";
import { container, ContainerVariantProps } from "../../../.styled/recipes";

export type ContainerRef = React.ComponentRef<"div">;
export type ContainerProps = Factory.Props<"div", ContainerVariantProps>;
export const Container = React.forwardRef<ContainerRef, ContainerProps>(
  (props, ref) => {
    const [recipeProps, divProps] = splitProps(props, ["size"]);
    const className = cx(container(recipeProps), props.className);

    return jsx(factory.div, {
      ...divProps,
      ref,
      className,
    });
  },
);
