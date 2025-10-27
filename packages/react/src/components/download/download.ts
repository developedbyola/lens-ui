import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { DownloadTrigger, DownloadTriggerBaseProps } from "@ark-ui/react";

// Download Component
export type DownloadRef = React.ComponentRef<"button">;
export type DownloadProps = Factory.Props<"button", DownloadTriggerBaseProps>;
export const Download = React.forwardRef<DownloadRef, DownloadProps>(
  (props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, [
      "data",
      "fileName",
      "mimeType",
    ]);

    return jsx(DownloadTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  },
);
Download.displayName = "DownloadTrigger";
