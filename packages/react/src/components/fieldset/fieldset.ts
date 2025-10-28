import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { Factory, factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { fieldset, FieldsetVariantProps } from "../../../.styled/recipes";
import { Fieldset, useFieldset, useFieldsetContext, type UseFieldsetContext, type UseFieldsetProps, type UseFieldsetReturn } from "@ark-ui/react";

export const use = useFieldset;
export const useContext = useFieldsetContext;

export type { UseFieldsetProps as UseProps, UseFieldsetContext as UseContext, UseFieldsetReturn as UseReturn };

const fieldsetStyleContext = createStyleContext(fieldset);

// Context
export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Fieldset.ContextProps>;
export const Context = fieldsetStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Fieldset.Context, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "context",
);
Context.displayName = "FieldsetContext";

// Error
export type ErrorRef = React.ComponentRef<"span">;
export type ErrorProps = Factory.Props<"span", Fieldset.ErrorTextBaseProps>;
export const Error = fieldsetStyleContext.withContext(
  React.forwardRef<ErrorRef, ErrorProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Fieldset.ErrorText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, {
        ...spanProps,
        ref,
      }),
    });
  }),
  "error",
);
Error.displayName = "FieldsetError";

// Helper
export type HelperRef = React.ComponentRef<"span">;
export type HelperProps = Factory.Props<"span", Fieldset.HelperTextBaseProps>;
export const Helper = fieldsetStyleContext.withContext(
  React.forwardRef<HelperRef, HelperProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Fieldset.HelperText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, {
        ...spanProps,
        ref,
      }),
    });
  }),
  "helper",
);
Helper.displayName = "FieldsetHelper";

// Legend
export type LegendRef = React.ComponentRef<"legend">;
export type LegendProps = Factory.Props<"legend", Fieldset.LegendBaseProps>;
export const Legend = fieldsetStyleContext.withContext(
  React.forwardRef<LegendRef, LegendProps>((props, ref) => {
    const [arkProps, legendProps] = splitProps(props, []);

    return jsx(Fieldset.Legend, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.legend, {
        ...legendProps,
        ref,
      }),
    });
  }),
  "legend",
);
Legend.displayName = "FieldsetLegend";

// Provider
export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Fieldset.RootProviderBaseProps & FieldsetVariantProps
>;
export const Provider = fieldsetStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Fieldset.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "root",
);
Provider.displayName = "FieldsetProvider";

// Root
export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  Fieldset.RootBaseProps & FieldsetVariantProps
>;
export const Root = fieldsetStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["invalid"]);

    return jsx(Fieldset.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "root",
);
Root.displayName = "FieldsetRoot";
