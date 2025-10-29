import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { cx } from "../../../.styled/css";

export type KbdRef = React.ComponentProps<"kbd">;
export type KbdProps = Factory.Props<"kbd", {}>;
export const Kbd = React.forwardRef<KbdRef, KbdProps>((props, ref) => {
  const [recipeProps, divProps] = splitProps(props, []);
  // const className = cx(kbd(recipeProps), props.className);

  return jsx(factory.kbd, {
    ...divProps,
    ref,
    className: "",
  });
});
