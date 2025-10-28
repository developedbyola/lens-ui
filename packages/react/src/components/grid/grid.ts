import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { cx } from "../../../.styled/css";
import { type Factory, factory } from "../factory";
import { grid, type GridVariantProps } from "../../../.styled/recipes";

export type GridRef = React.ComponentRef<"button">;
export type GridProps = Factory.Props<"button", GridVariantProps>;
export const Grid = React.forwardRef<GridRef, GridProps>((props, ref) => {
  const [recipeProps, gridProps] = splitProps(props, [
    "cols",
    "rows",
    "flow",
    "items",
    "justify",
    "autoRows",
    "autoCols",
  ]);

  const className = cx(grid(recipeProps), props.className);

  return jsx(factory.button, {
    ...gridProps,
    ref,
    className,
  });
});
