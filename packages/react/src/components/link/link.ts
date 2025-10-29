import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { Factory, factory } from "../factory";

export type LinkRef = React.ComponentRef<"div">;
export type LinkProps = Factory.Props<"div", {}>;
export const Link = React.forwardRef<LinkRef, LinkProps>((props, ref) => {
  const [recipeProps, divProps] = splitProps(props, []);
  const className = cx(props.className);

  return jsx(factory.div, {
    ...divProps,
    ref,
    className,
  });
});
Link.displayName = "Link";
