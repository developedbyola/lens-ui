import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { factory, Factory } from "../factory";
import { badge, type BadgeVariantProps } from "../../../.styled/recipes";

export type BadgeRef = React.ComponentRef<"span">;
export type BadgeProps = Factory.Props<"span", BadgeVariantProps>;
export const Badge = React.forwardRef<BadgeRef, BadgeProps>((props, ref) => {
  const [recipeProps, spanProps] = splitProps(props, [
    "size", "visual", "tone", "shape"
  ]);

  return jsx(factory.span, {
    ...spanProps,
    ref,
    className: cx(badge(recipeProps), props.className),
  });
});
