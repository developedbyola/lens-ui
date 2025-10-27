import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { Checkbox, useCheckbox, useCheckboxContext, type UseCheckboxContext, type UseCheckboxGroupProps, type UseCheckboxGroupReturn, type UseCheckboxGroupContext, type UseCheckboxProps, type UseCheckboxReturn, useCheckboxGroupContext, useCheckboxGroup } from "@ark-ui/react";
import { checkbox, type CheckboxVariantProps } from "../../../.styled/recipes";

// Re-export hooks
export const use = useCheckbox;
export const useGroup = useCheckboxGroup;
export const useContext = useCheckboxContext;
export const useGroupContext = useCheckboxGroupContext;

export type { UseCheckboxContext as UseContext, UseCheckboxGroupContext as UseGroupContext, UseCheckboxGroupProps as UseGroupProps, UseCheckboxGroupReturn as UseGroupReturn, UseCheckboxProps as UseProps, UseCheckboxReturn as UseReturn }

const checkboxStyleContext = createStyleContext(checkbox);

// Context component
export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Checkbox.ContextProps>;
export const Context = checkboxStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Checkbox.Context, {
        ...arkProps,
      }),
    });
  }),
  "context",
);
Context.displayName = "CheckboxContext";

// Control component
export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", Checkbox.ControlBaseProps>;
export const Control = checkboxStyleContext.withContext(
  React.forwardRef<ControlRef, ControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Checkbox.Control, {
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
Control.displayName = "CheckboxControl";

// GroupProvider component
export type GroupProviderRef = React.ComponentRef<"div">;
export type GroupProviderProps = Factory.Props<
  "div",
  Checkbox.GroupProviderBaseProps
>;
export const GroupProvider = checkboxStyleContext.withProvider(
  React.forwardRef<GroupProviderRef, GroupProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Checkbox.GroupProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "group-provider",
);
GroupProvider.displayName = "CheckboxGroupProvider";

// Group component
export type GroupRef = React.ComponentRef<"div">;
export type GroupProps = Factory.Props<"div", Checkbox.GroupBaseProps>;
export const Group = checkboxStyleContext.withProvider(
  React.forwardRef<GroupRef, GroupProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "defaultValue",
      "disabled",
      "invalid",
      "name",
      "onValueChange",
      "readOnly",
      "value",
    ]);

    return jsx(Checkbox.Group, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "group",
);
Group.displayName = "CheckboxGroup";

// HiddenInput component
export type HiddenInputRef = React.ComponentRef<"input">;
export type HiddenInputProps = Factory.Props<
  "input",
  Checkbox.HiddenInputProps
>;
export const HiddenInput = checkboxStyleContext.withContext(
  React.forwardRef<HiddenInputRef, HiddenInputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, []);

    return jsx(Checkbox.HiddenInput, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, {
        ...inputProps,
        ref,
      }),
    });
  }),
  "hidden-input",
);
HiddenInput.displayName = "CheckboxHiddenInput";

// Indicator component
export type IndicatorRef = React.ComponentRef<"div">;
export type IndicatorProps = Factory.Props<"div", Checkbox.IndicatorBaseProps>;
export const Indicator = checkboxStyleContext.withContext(
  React.forwardRef<IndicatorRef, IndicatorProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["indeterminate"]);

    return jsx(Checkbox.Indicator, {
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
Indicator.displayName = "CheckboxIndicator";

// Label component
export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", Checkbox.LabelBaseProps>;
export const Label = checkboxStyleContext.withContext(
  React.forwardRef<LabelRef, LabelProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, []);

    return jsx(Checkbox.Label, {
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
Label.displayName = "CheckboxLabel";

// Provider component
export type ProviderRef = React.ComponentRef<"label">;
export type ProviderProps = Factory.Props<
  "label",
  Checkbox.RootProviderBaseProps & CheckboxVariantProps
>;
export const Provider = checkboxStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, ["value"]);

    return jsx(Checkbox.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, {
        ...labelProps,
        ref,
      }),
    });
  }),
  "provider",
);
Provider.displayName = "CheckboxProvider";

// Root component
export type RootRef = React.ComponentRef<"label">;
export type RootProps = Factory.Props<
  "label",
  Checkbox.RootBaseProps & CheckboxVariantProps
>;
export const Root = checkboxStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, [
      "id",
      "ids",
      "form",
      "name",
      "value",
      "invalid",
      "checked",
      "required",
      "disabled",
      "readOnly",
      "defaultChecked",
      "onCheckedChange",
    ]);

    return jsx(Checkbox.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, {
        ...labelProps,
        ref,
      }),
    });
  }),
  "root",
);
Root.displayName = "CheckboxRoot";
