import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { TagsInput, useTagsInput, useTagsInputContext, useTagsInputItemContext, type UseTagsInputContext, type UseTagsInputItemContext, type UseTagsInputProps, type UseTagsInputReturn } from "@ark-ui/react";
import { factory, Factory } from "../factory";
import { chips } from "../../../.styled/recipes";
import { createStyleContext } from "../../../.styled/jsx";

const chipsStyleContext = createStyleContext(chips);

export const use = useTagsInput;
export const useContext = useTagsInputContext;
export const useItemContext = useTagsInputItemContext;

export type { UseTagsInputContext as UseContext, UseTagsInputProps as UseProps, UseTagsInputReturn as UseReturn, UseTagsInputItemContext as UseItemContext };

// Provider Component
export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  TagsInput.RootProviderBaseProps
>;
export const Provider = chipsStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(TagsInput.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "ChipsProvider";

// Root Component
export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<"div", TagsInput.RootBaseProps>;
export const Root = chipsStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "addOnPaste",
      "allowOverflow",
      "blurBehavior",
      "defaultValue",
      "delimiter",
      "disabled",
      "form",
      "id",
      "ids",
      "inputValue",
      "invalid",
      "max",
      "maxLength",
      "name",
      "onFocusOutside",
      "onHighlightChange",
      "onInputValueChange",
      "onInteractOutside",
      "onPointerDownOutside",
      "onInputValueChange",
      "onValueChange",
      "onValueInvalid",
      "readOnly",
      "required",
      "translations",
      "validate",
      "value",
    ]);

    return jsx(TagsInput.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "ChipsRoot";

// Context Component
export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", TagsInput.ContextProps>;
export const Context = chipsStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(TagsInput.Context, { ...arkProps }),
    });
  }),
  "context",
);
Context.displayName = "ChipsContext";

// Label Component
export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", TagsInput.LabelBaseProps>;
export const Label = chipsStyleContext.withContext(
  React.forwardRef<LabelRef, LabelProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, ["asChild"]);

    return jsx(TagsInput.Label, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, { ...labelProps, ref }),
    });
  }),
  "label",
);
Label.displayName = "ChipsLabel";

// Control Component
export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", TagsInput.ControlBaseProps>;
export const Control = chipsStyleContext.withContext(
  React.forwardRef<ControlRef, ControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(TagsInput.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "control",
);
Control.displayName = "ChipsControl";

// Input Component
export type InputRef = React.ComponentRef<"input">;
export type InputProps = Factory.Props<"input", TagsInput.InputBaseProps>;
export const Input = chipsStyleContext.withContext(
  React.forwardRef<InputRef, InputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, []);

    return jsx(TagsInput.Input, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, { ...inputProps, ref }),
    });
  }),
  "input",
);
Input.displayName = "ChipsInput";

// Item Component
export type ItemRef = React.ComponentRef<"div">;
export type ItemProps = Factory.Props<"div", TagsInput.ItemBaseProps>;
export const Item = chipsStyleContext.withContext(
  React.forwardRef<ItemRef, ItemProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "asChild",
      "index",
      "value",
    ]);

    return jsx(TagsInput.Item, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item",
);
Item.displayName = "ChipsItem";

// ItemInput Component
export type ItemInputRef = React.ComponentRef<"input">;
export type ItemInputProps = Factory.Props<
  "input",
  TagsInput.ItemInputBaseProps
>;
export const ItemInput = chipsStyleContext.withContext(
  React.forwardRef<ItemInputRef, ItemInputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, []);

    return jsx(TagsInput.ItemInput, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, { ...inputProps, ref }),
    });
  }),
  "item-input",
);
ItemInput.displayName = "ChipsItemInput";

// ItemText Component
export type ItemTextRef = React.ComponentRef<"span">;
export type ItemTextProps = Factory.Props<"span", TagsInput.ItemTextBaseProps>;
export const ItemText = chipsStyleContext.withContext(
  React.forwardRef<ItemTextRef, ItemTextProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(TagsInput.ItemText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "item-text",
);
ItemText.displayName = "ChipsItemText";

// ItemDeleteTrigger Component
export type ItemDeleteTriggerRef = React.ComponentRef<"button">;
export type ItemDeleteTriggerProps = Factory.Props<
  "button",
  TagsInput.ItemDeleteTriggerBaseProps
>;
export const ItemDeleteTrigger = chipsStyleContext.withContext(
  React.forwardRef<ItemDeleteTriggerRef, ItemDeleteTriggerProps>(
    (props, ref) => {
      const [arkProps, buttonProps] = splitProps(props, []);

      return jsx(TagsInput.ItemDeleteTrigger, {
        ...arkProps,
        asChild: true,
        children: jsx(factory.button, { ...buttonProps, ref }),
      });
    },
  ),
  "item-delete-trigger",
);
ItemDeleteTrigger.displayName = "ChipsItemDeleteTrigger";

// ClearTrigger Component
export type ClearTriggerRef = React.ComponentRef<"button">;
export type ClearTriggerProps = Factory.Props<
  "button",
  TagsInput.ClearTriggerBaseProps
>;
export const ClearTrigger = chipsStyleContext.withContext(
  React.forwardRef<ClearTriggerRef, ClearTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(TagsInput.ClearTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "clear-trigger",
);
ClearTrigger.displayName = "ChipsClearTrigger";

// HiddenInput Component
export type HiddenInputRef = React.ComponentRef<"input">;
export type HiddenInputProps = Factory.Props<
  "input",
  TagsInput.HiddenInputBaseProps
>;
export const HiddenInput = chipsStyleContext.withContext(
  React.forwardRef<HiddenInputRef, HiddenInputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, []);

    return jsx(TagsInput.HiddenInput, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, { ...inputProps, ref }),
    });
  }),
  "hidden-input",
);
HiddenInput.displayName = "ChipsHiddenInput";
