import React from "react";
import { jsx } from "react/jsx-runtime";
import {
  Highlight as ArkHighlight,
  type HighlightProps as ArkHighlightProps,
} from "@ark-ui/react";
import { splitProps } from "../../utils";
import { factory, type Factory } from "../factory";

// Highlight Component
export type HighlightRef = React.ComponentRef<"span">;
export type HighlightProps = Factory.Props<"span", ArkHighlightProps>;
export const Highlight = React.forwardRef<HighlightRef, HighlightProps>(
  (props, ref) => {
    const [arkProps, spanProps] = splitProps(props, [
      "query",
      "text",
      "matchAll",
      "ignoreCase",
    ]);

    return jsx(ArkHighlight, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  },
);
Highlight.displayName = "Highlight";
