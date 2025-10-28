import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, type Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import {
  inputGroup,
  type InputGroupVariantProps,
} from "../../../.styled/recipes";
import { Field, useField, useFieldContext, type UseFieldContext, type UseFieldReturn, type UseFieldProps } from "@ark-ui/react";

export const use = useField;
export const useContext = useFieldContext;

export type { UseFieldContext as UseContext, UseFieldProps as UseProps, UseFieldReturn as UseReturn }

const inputGroupStyleContext = createStyleContext(inputGroup);

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Field.RootProviderBaseProps & InputGroupVariantProps
>;
export const Provider = inputGroupStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Field.RootProvider, {
      ...arkProps,
      asChild: true,
      role: "group",
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "root",
);
Provider.displayName = "InputGroupProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  Field.RootBaseProps & InputGroupVariantProps
>;
export const Root = inputGroupStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "disabled",
      "invalid",
      "ids",
      "readOnly",
      "required",
    ]);

    return jsx(Field.Root, {
      ...arkProps,
      asChild: true,
      role: "group",
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "root",
);
Root.displayName = "InputGroupRoot";

export type AddonRef = React.ComponentRef<"div">;
export type AddonProps = Factory.Props<"div">;
export const Addon = inputGroupStyleContext.withContext(
  React.forwardRef<AddonRef, RootProps>((props, ref) => {
    const [_, divProps] = splitProps(props, []);

    return jsx(factory.div, {
      ...divProps,
      ref,
    });
  }),
  "addon",
);
Root.displayName = "InputGroupRoot";

export type InputRef = React.ComponentRef<"input">;
export type InputProps = Factory.Props<"input">;
export const Input = inputGroupStyleContext.withContext(
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
Input.displayName = "InputGroupInput";

export type TextareaRef = React.ComponentRef<"textarea">;
export type TextareaProps = Factory.Props<"textarea", Field.TextareaBaseProps>;
export const Textarea = inputGroupStyleContext.withContext(
  React.forwardRef<TextareaRef, TextareaProps>((props, ref) => {
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
Textarea.displayName = "InputGroupTextarea";
