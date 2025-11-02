import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, type Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { otp, type OtpVariantProps } from "../../../.styled/recipes";
import { PinInput, usePinInput, usePinInputContext, type UsePinInputContext, type UsePinInputProps, type UsePinInputReturn } from "@ark-ui/react";

export const use = usePinInput;
export const useContext = usePinInputContext;

export type { UsePinInputContext as UseContext, UsePinInputProps as UseProps, UsePinInputReturn as UseReturn };

const otpStyleContext = createStyleContext(otp);

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  PinInput.RootProviderBaseProps & OtpVariantProps
>;
export const Provider = otpStyleContext.withProvider(React.forwardRef<ProviderRef, ProviderProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(PinInput.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
), "root");
Provider.displayName = "OtpProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<"div", PinInput.RootBaseProps & OtpVariantProps>;
export const Root = otpStyleContext.withProvider(React.forwardRef<RootRef, RootProps>((props, ref) => {
  const [arkProps, divProps] = splitProps(props, [
    "autoFocus",
    "blurOnComplete",
    "defaultValue",
    "disabled",
    "form",
    "id",
    "ids",
    "invalid",
    "mask",
    "name",
    "onValueChange",
    "onValueComplete",
    "onValueInvalid",
    "otp",
    "pattern",
    "placeholder",
    "readOnly",
    "required",
    "selectOnFocus",
    "translations",
    "type",
    "value",
  ]);

  return jsx(PinInput.Root, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.div, { ...divProps, ref }),
  });
}), "root");
Root.displayName = "OtpRoot";

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", PinInput.ContextProps>;
export const Context = otpStyleContext.withContext(React.forwardRef<ContextRef, ContextProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(PinInput.Context, { ...arkProps }),
    });
  },
), "context");
Context.displayName = "OtpContext";

export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", PinInput.ControlBaseProps>;
export const Control = otpStyleContext.withContext(React.forwardRef<ControlRef, ControlProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(PinInput.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
), "control");
Control.displayName = "OtpControl";

export type InputRef = React.ComponentRef<"input">;
export type InputProps = Factory.Props<"input", PinInput.InputBaseProps>;
export const Input = otpStyleContext.withContext(React.forwardRef<InputRef, InputProps>((props, ref) => {
  const [arkProps, inputProps] = splitProps(props, ["asChild", "index"]);

  return jsx(PinInput.Input, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.input, { ...inputProps, ref }),
  });
}), "input");
Input.displayName = "OtpInput";

export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", PinInput.LabelBaseProps>;
export const Label = otpStyleContext.withContext(React.forwardRef<LabelRef, LabelProps>((props, ref) => {
  const [arkProps, labelProps] = splitProps(props, []);

  return jsx(PinInput.Label, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.label, { ...labelProps, ref }),
  });
}), "label");
Label.displayName = "OtpLabel";

export type HiddenInputRef = React.ComponentRef<"input">;
export type HiddenInputProps = Factory.Props<"input", PinInput.HiddenInputBaseProps>;
export const HiddenInput = otpStyleContext.withContext(React.forwardRef<HiddenInputRef, HiddenInputProps>((props, ref) => {
  const [arkProps, inputProps] = splitProps(props, []);

  return jsx(PinInput.HiddenInput, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.input, { ...inputProps, ref }),
  });
}), "context");
HiddenInput.displayName = "OtpHiddenInput";
