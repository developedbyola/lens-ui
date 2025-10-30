import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { LocaleProvider, LocaleProviderProps } from "@ark-ui/react";

export type LocaleRef = React.ComponentRef<"div">;
export type LocaleProps = Factory.Props<"div", LocaleProviderProps>;
export const Locale = React.forwardRef<LocaleRef, LocaleProps>((props, ref) => {
  const [arkProps, divProps] = splitProps(props, ["locale"]);

  return jsx(LocaleProvider, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.div, { ...divProps, ref }),
  });
});
Locale.displayName = "Locale";
