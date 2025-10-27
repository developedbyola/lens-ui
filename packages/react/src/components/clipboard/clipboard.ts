import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { clipboard } from "../../../.styled/recipes";
import { createStyleContext } from "../../../.styled/jsx";
import { Clipboard, useClipboard, useClipboardContext, type UseClipboardContext, type UseClipboardProps, type UseClipboardReturn } from "@ark-ui/react";

export const use = useClipboard;
export const useContext = useClipboardContext;

export type { UseClipboardContext as UseContext, UseClipboardProps as UseProps, UseClipboardReturn as UseReturn };

const clipboardStyleContext = createStyleContext(clipboard);

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Clipboard.ContextProps>;
export const Context = clipboardStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Clipboard.Context, {
        asChild: true,
        ...arkProps,
      }),
    });
  }),
  "context",
);
Context.displayName = "ClipboardContext";

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Clipboard.RootProviderBaseProps
>;
export const Provider = clipboardStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Clipboard.RootProvider, {
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
Provider.displayName = "ClipboardProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<"div", Clipboard.RootBaseProps>;
export const Root = clipboardStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "ids",
      "value",
      "timeout",
      "defaultValue",
      "onValueChange",
      "onStatusChange",
    ]);

    return jsx(Clipboard.Root, {
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
Root.displayName = "ClipboardRoot";

export type TriggerRef = React.ComponentRef<"button">;
export type TriggerProps = Factory.Props<"button", Clipboard.TriggerBaseProps>;
export const Trigger = clipboardStyleContext.withContext(
  React.forwardRef<TriggerRef, TriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Clipboard.Trigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, {
        ...buttonProps,
        ref,
      }),
    });
  }),
  "trigger",
);
Trigger.displayName = "ClipboardTrigger";

export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", Clipboard.ControlBaseProps>;
export const Control = clipboardStyleContext.withContext(
  React.forwardRef<ControlRef, ControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Clipboard.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "control",
);
Control.displayName = "ClipboardControl";

export type IndicatorRef = React.ComponentRef<"div">;
export type IndicatorProps = Factory.Props<"div", Clipboard.IndicatorBaseProps>;
export const Indicator = clipboardStyleContext.withContext(
  React.forwardRef<IndicatorRef, IndicatorProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["copied"]);

    return jsx(Clipboard.Indicator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "indicator",
);
Indicator.displayName = "ClipboardIndicator";

export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", Clipboard.LabelBaseProps>;
export const Label = clipboardStyleContext.withContext(
  React.forwardRef<LabelRef, LabelProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, []);

    return jsx(Clipboard.Label, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, {
        ...labelProps,
        ref,
      }),
    });
  }),
  "label",
);
Label.displayName = "ClipboardLabel";

export type TextInputRef = React.ComponentRef<"input">;
export type TextInputProps = Factory.Props<"input", Clipboard.InputBaseProps>;
export const TextInput = clipboardStyleContext.withContext(
  React.forwardRef<TextInputRef, TextInputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, []);

    return jsx(Clipboard.Input, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, {
        ...inputProps,
        ref,
      }),
    });
  }),
  "text-input",
);
TextInput.displayName = "ClipboardTextInput";

export type ValueTextRef = React.ComponentRef<"span">;
export type ValueTextProps = Factory.Props<
  "span",
  Clipboard.ValueTextBaseProps
>;
export const ValueText = clipboardStyleContext.withContext(
  React.forwardRef<ValueTextRef, ValueTextProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Clipboard.ValueText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, {
        ...spanProps,
        ref,
      }),
    });
  }),
  "value-text",
);
ValueText.displayName = "ClipboardValueText";
