import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { type Factory, factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { field, type FieldVariantProps } from "../../../.styled/recipes";
import { Field, useField, useFieldContext, type UseFieldContext, type UseFieldProps, type UseFieldReturn } from "@ark-ui/react";

export const use = useField;
export const useContext = useFieldContext;

export type { UseFieldContext as UseContext, UseFieldProps as UseProps, UseFieldReturn as UseReturn };

const fieldStyleContext = createStyleContext(field);

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Field.RootProviderBaseProps & FieldVariantProps
>;
export const Provider = fieldStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Field.RootProvider, {
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
Provider.displayName = "FieldProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  Field.RootBaseProps & FieldVariantProps
>;
export const Root = fieldStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "ids",
      "invalid",
      "readOnly",
      "disabled",
      "required",
    ]);

    return jsx(Field.Root, {
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
Root.displayName = "FieldRoot";

export type HelperRef = React.ComponentRef<"span">;
export type HelperProps = Factory.Props<"span", Field.HelperTextBaseProps>;
export const Helper = fieldStyleContext.withContext(
  React.forwardRef<HelperRef, HelperProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Field.HelperText, {
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
Helper.displayName = "FieldHelper";

export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", Field.LabelBaseProps>;
export const Label = fieldStyleContext.withContext(
  React.forwardRef<LabelRef, LabelProps>((props, ref) => {
    const [_, labelProps] = splitProps(props, []);

    return jsx(Field.Label, {
      ...labelProps,
      asChild: true,
      children: jsx(factory.label, { ...labelProps, ref }),
    });
  }),
  "label",
);
Label.displayName = "FieldLabel";

export type InputRef = React.ComponentRef<"input">;
export type InputProps = Factory.Props<"input", Field.InputBaseProps>;
export const Input = fieldStyleContext.withContext(
  React.forwardRef<InputRef, InputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, []);

    return jsx(Field.Input, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, {
        ...inputProps,
        ref,
      }),
    });
  }),
  "input",
);
Input.displayName = "FieldInput";

export type TextareaRef = React.ComponentRef<"textarea">;
export type TextareaProps = Factory.Props<"textarea", Field.TextareaBaseProps>;
export const Textarea = fieldStyleContext.withContext(
  React.forwardRef<TextareaRef, TextareaProps>((props, ref) => {
    const field = useFieldContext();
    const [arkProps, textareaProps] = splitProps(props, ["autoresize"]);

    return jsx(Field.Textarea, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.textarea, {
        ...textareaProps,
        ref,
      }),
    });
  }),
  "textarea",
);
Textarea.displayName = "FieldTextarea";

export type ErrorRef = React.ComponentRef<"span">;
export type ErrorProps = Factory.Props<"span", Field.ErrorTextBaseProps>;
export const Error = fieldStyleContext.withContext(
  React.forwardRef<ErrorRef, ErrorProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Field.ErrorText, {
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
Error.displayName = "FieldError";

export type SelectRef = React.ComponentRef<"span">;
export type SelectProps = Factory.Props<"span", Field.SelectBaseProps>;
export const Select = fieldStyleContext.withContext(
  React.forwardRef<SelectRef, SelectProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Field.Select, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, {
        ...spanProps,
        ref,
      }),
    });
  }),
  "select",
);
Select.displayName = "FieldSelect";

export type RequiredIndicatorRef = React.ComponentRef<"span">;
export type RequiredIndicatorProps = Factory.Props<
  "span",
  Field.RequiredIndicatorBaseProps
>;
export const RequiredIndicator = fieldStyleContext.withContext(
  React.forwardRef<RequiredIndicatorRef, RequiredIndicatorProps>(
    (props, ref) => {
      const [_, spanProps] = splitProps(props, ["fallback"]);

      return jsx(Field.RequiredIndicator, {
        asChild: true,
        fallback: jsx(factory.span, {
          ...spanProps,
          ref,
        }),
      });
    },
  ),
  "required-indicator",
);
RequiredIndicator.displayName = "FieldRequiredIndicator";

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Field.ContextProps>;
export const Context = fieldStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Field.Context, {
        ...arkProps,
      }),
    });
  }),
  "context",
);
Context.displayName = "FieldContext";
