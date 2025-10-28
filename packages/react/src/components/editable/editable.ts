import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { editable, type EditableVariantProps } from "../../../.styled/recipes";
import { Editable, useEditable, useEditableContext, type UseEditableContext, type UseEditableProps, type UseEditableReturn } from "@ark-ui/react";

export const use = useEditable;
export const useContext = useEditableContext;

export type { UseEditableContext as UseContext, UseEditableProps as UseProps, UseEditableReturn as UseReturn };

const editableStyleContext = createStyleContext(editable);

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Editable.RootProviderBaseProps & EditableVariantProps
>;
export const Provider = editableStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Editable.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "EditableProvider";

// Root Component
export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<"div", Editable.RootBaseProps & EditableVariantProps>;
export const Root = editableStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "activationMode",
      "autoResize",
      "defaultValue",
      "disabled",
      "finalFocusEl",
      "ids",
      "invalid",
      "maxLength",
      "name",
      "onValueChange",
      "onValueCommit",
      "onValueRevert",
      "placeholder",
      "readOnly",
      "required",
      "selectOnFocus",
      "submitMode",
      "value",
    ]);

    return jsx(Editable.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "EditableRoot";

// Label Component
export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", Editable.LabelBaseProps>;
export const Label = editableStyleContext.withContext(
  React.forwardRef<LabelRef, LabelProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, []);

    return jsx(Editable.Label, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, { ...labelProps, ref }),
    });
  }),
  "label",
);
Label.displayName = "EditableLabel";

// Preview Component
export type PreviewRef = React.ComponentRef<"span">;
export type PreviewProps = Factory.Props<"span", Editable.PreviewBaseProps>;
export const Preview = editableStyleContext.withContext(
  React.forwardRef<PreviewRef, PreviewProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Editable.Preview, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "preview",
);
Preview.displayName = "EditablePreview";

// Input Component
export type InputRef = React.ComponentRef<"input">;
export type InputProps = Factory.Props<"input", Editable.InputBaseProps>;
export const Input = editableStyleContext.withContext(
  React.forwardRef<InputRef, InputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, []);

    return jsx(Editable.Input, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, { ...inputProps, ref }),
    });
  }),
  "input",
);
Input.displayName = "EditableInput";

// Area Component
export type AreaRef = React.ComponentRef<"div">;
export type AreaProps = Factory.Props<"div", Editable.AreaBaseProps>;
export const Area = editableStyleContext.withContext(
  React.forwardRef<AreaRef, AreaProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Editable.Area, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "area",
);
Area.displayName = "EditableArea";

// EditTrigger Component
export type EditTriggerRef = React.ComponentRef<"button">;
export type EditTriggerProps = Factory.Props<
  "button",
  Editable.EditTriggerBaseProps
>;
export const EditTrigger = editableStyleContext.withContext(
  React.forwardRef<EditTriggerRef, EditTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Editable.EditTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "edit-trigger",
);
EditTrigger.displayName = "EditableEditTrigger";

// SubmitTrigger Component
export type SubmitTriggerRef = React.ComponentRef<"button">;
export type SubmitTriggerProps = Factory.Props<
  "button",
  Editable.SubmitTriggerBaseProps
>;
export const SubmitTrigger = editableStyleContext.withContext(
  React.forwardRef<SubmitTriggerRef, SubmitTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Editable.SubmitTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "submit-trigger",
);
SubmitTrigger.displayName = "EditableSubmitTrigger";

// CancelTrigger Component
export type CancelTriggerRef = React.ComponentRef<"button">;
export type CancelTriggerProps = Factory.Props<
  "button",
  Editable.CancelTriggerBaseProps
>;
export const CancelTrigger = editableStyleContext.withContext(
  React.forwardRef<CancelTriggerRef, CancelTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Editable.CancelTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "cancel-trigger",
);
CancelTrigger.displayName = "EditableCancelTrigger";

// Control Component
export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", Editable.ControlBaseProps>;
export const Control = editableStyleContext.withContext(
  React.forwardRef<ControlRef, ControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Editable.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "control",
);
Control.displayName = "EditableControl";

// Context Component
export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Editable.ContextProps>;
export const Context = editableStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Editable.Context, {
        ...arkProps,
        asChild: true,
      }),
    });
  }),
  "context",
);
Context.displayName = "EditableContext";
