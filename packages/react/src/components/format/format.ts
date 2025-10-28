import React from "react";
import { Format } from "@ark-ui/react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";

// Byte Component
export type ByteRef = React.ComponentRef<"span">;
export type ByteProps = Factory.Props<"span", Format.ByteProps>;
export const Byte = React.forwardRef<ByteRef, ByteProps>((props, ref) => {
  const [arkProps, spanProps] = splitProps(props, ["unit", "value"]);

  return jsx(Format.Byte, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.span, { ...spanProps, ref }),
  });
});
Byte.displayName = "FormatByte";

// Number Component
export type NumberRef = React.ComponentRef<"span">;
export type NumberProps = Factory.Props<"span", Format.NumberProps>;
export const Number = React.forwardRef<NumberRef, NumberProps>((props, ref) => {
  const [arkProps, spanProps] = splitProps(props, [
    "currency",
    "currencyDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "value",
  ]);

  return jsx(Format.Number, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.span, { ...spanProps, ref }),
  });
});
Number.displayName = "FormatNumber";

// RelativeTime Component
export type RelativeTimeRef = React.ComponentRef<"span">;
export type RelativeTimeProps = Factory.Props<"span", Format.RelativeTimeProps>;
export const RelativeTime = React.forwardRef<
  RelativeTimeRef,
  RelativeTimeProps
>((props, ref) => {
  const [arkProps, spanProps] = splitProps(props, [
    "numeric",
    "style",
    "value",
  ]);

  return jsx(Format.RelativeTime, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.span, { ...spanProps, ref }),
  });
});
RelativeTime.displayName = "FormatRelativeTime";
