import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, type Factory } from "../factory";
import {createStyleContext} from "../../../.styled/jsx";
import {mode, type ModeVariantProps} from "../../../.styled/recipes";
import { Switch, useSwitch, useSwitchContext, type UseSwitchContext, type UseSwitchProps, type UseSwitchReturn } from "@ark-ui/react";

const {withProvider, withContext} =  createStyleContext(mode);

export const use = useSwitch;
export const useContext = useSwitchContext;

export type {UseSwitchContext as UseContext, UseSwitchProps as UseProps, UseSwitchReturn as UseReturn}

export type ProviderRef = React.ComponentRef<"label">;
export type ProviderProps = Factory.Props<"label", Switch.RootProviderBaseProps & ModeVariantProps>;
export const Provider = withProvider(React.forwardRef<ProviderRef, ProviderProps>(
  (props, ref) => {
    const [arkProps, labelProps] = splitProps(props, ["value"]);

    return jsx(Switch.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, { ...labelProps, ref }),
    });
  },
), "root");
Provider.displayName = "ModeProvider";

export type RootRef = React.ComponentRef<"label">;
export type RootProps = Factory.Props<"label", Switch.RootBaseProps & ModeVariantProps>;
export const Root = withProvider(React.forwardRef<RootRef, RootProps>((props, ref) => {
  const [arkProps, labelProps] = splitProps(props, [
    "checked",
    "defaultChecked",
    "disabled",
    "form",
    "id",
    "ids",
    "invalid",
    "name",
    "onCheckedChange",
    "readOnly",
    "required",
    "value",
  ]);

  return jsx(Switch.Root, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.label, { ...labelProps, ref }),
  });
}), "root");
Root.displayName = "ModeRoot";

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Switch.ContextProps>;
export const Context = withContext(React.forwardRef<ContextRef, ContextProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Switch.Context, { ...arkProps }),
    });
  },
), "context");
Context.displayName = "ModeContext";

export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", Switch.ControlBaseProps>;
export const Control = withContext(React.forwardRef<ControlRef, ControlProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["asChild"]);

    return jsx(Switch.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
), "control");
Control.displayName = "ModeControl";

export type HiddenInputRef = React.ComponentRef<"input">;
export type HiddenInputProps = Factory.Props<
  "input",
  Switch.HiddenInputBaseProps
>;
export const HiddenInput = withContext(React.forwardRef<HiddenInputRef, HiddenInputProps>(
  (props, ref) => {
    const [arkProps, inputProps] = splitProps(props, ["asChild"]);

    return jsx(Switch.HiddenInput, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, { ...inputProps, ref }),
    });
  },
), "hidden-input");
HiddenInput.displayName = "ModeHiddenInput";

export type LabelRef = React.ComponentRef<"span">;
export type LabelProps = Factory.Props<"span", Switch.LabelBaseProps>;
export const Label = withContext(React.forwardRef<LabelRef, LabelProps>((props, ref) => {
  const [arkProps, spanProps] = splitProps(props, ["asChild"]);

  return jsx(Switch.Label, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.span, { ...spanProps, ref }),
  });
}), "label");
Label.displayName = "ModeLabel";

export type ThumbRef = React.ComponentRef<"span">;
export type ThumbProps = Factory.Props<"span", Switch.ThumbBaseProps>;
export const Thumb = withContext(React.forwardRef<ThumbRef, ThumbProps>((props, ref) => {
  const [arkProps, spanProps] = splitProps(props, ["asChild"]);

  return jsx(Switch.Thumb, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.span, { ...spanProps, ref }),
  });
}), "thumb");
Thumb.displayName = "ModeThumb";
