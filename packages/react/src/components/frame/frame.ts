import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, type Factory } from "../factory";
import { Frame as ArkFrame, type FrameProps as ArkFrameProps } from "@ark-ui/react";

// Frame Component
export type FrameRef = React.ComponentRef<"div">;
export type FrameProps = Factory.Props<"div", ArkFrameProps>;
export const Frame = React.forwardRef<FrameRef, FrameProps>((props, ref) => {
  const [arkProps, divProps] = splitProps(props, [
    "head",
    "title",
    "onMount",
    "srcDoc",
  ]);

  return jsx(ArkFrame, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.div, { ...divProps, ref }),
  });
});
Frame.displayName = "Frame";
