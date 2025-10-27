import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { Factory, factory } from "../factory";
import { iconButton, type IconButtonVariantProps } from "../../../.styled/recipes";

export type IconButtonRef = React.ComponentRef<"button">;
export type IconButtonProps = Factory.Props<"button", IconButtonVariantProps>;
export const IconButton = React.forwardRef<IconButtonRef, IconButtonProps>(
  (props, ref) => {
    const [recipeProps, buttonProps] = splitProps(props, ["tone", "shape", "visual", "size"]);

    const className = cx(iconButton(recipeProps), props.className);

    return jsx(factory.button, {
      ...buttonProps,
      ref,
      className,
    });
  },
);
IconButton.displayName = "IconButton";
