import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { Factory, factory } from "../factory";
import { button, type ButtonVariantProps } from "../../../.styled/recipes";

export type ButtonRef = React.ComponentRef<"button">;
export type ButtonProps = Factory.Props<"button", ButtonVariantProps>;
export const Button = React.forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const [recipeProps, buttonProps] = splitProps(props, [
    "size",
    "visual",
    "shape",
    "tone",
    "span",
    "link"
  ]);

  const className = cx(button(recipeProps), props.className);

  return jsx(factory.button, {
    ...buttonProps,
    ref,
    className,
  });
});
