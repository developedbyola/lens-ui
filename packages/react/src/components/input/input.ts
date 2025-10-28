import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { type Factory, factory } from "../factory";
import { input, type InputVariantProps } from "../../../.styled/recipes";

export type InputRef = React.ComponentRef<"input">;
export type InputProps = Factory.Props<"input", InputVariantProps>;
export const Input = React.forwardRef<InputRef, InputProps>((props, ref) => {
  const [recipeProps, inputProps] = splitProps(props, [
    "size",
    "visual",
    "shape",
  ]);

  const className = cx(input(recipeProps), props.className);

  return jsx(factory.input, { ...inputProps, ref, className });
});
Input.displayName = "Input";
