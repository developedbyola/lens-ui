import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { Factory, factory } from "../factory";

export type ForRef = React.ComponentRef<"div">;
export type ForProps<T extends any[] = []> = Factory.Props<
  "div",
  { each: T; children: (item: T[number], index: number) => React.ReactNode }
>;
export const For = React.forwardRef<ForRef, ForProps<any[]>>((props, ref) => {
  const [{ each }, divProps] = splitProps(props, ["each"]);
  const className = cx(props.className);

  const children = each.map((item, index) => props.children(item, index));

  return jsx(factory.div, {
    ...divProps,
    ref,
    className,
    children,
  });
});
