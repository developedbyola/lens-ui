import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { Factory, factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { combobox, type ComboboxVariantProps } from "../../../.styled/recipes";
import { Combobox, useCombobox, useComboboxContext, useComboboxItemContext, type UseComboboxProps, type UseComboboxContext, type UseComboboxReturn, type UseComboboxItemContext } from "@ark-ui/react";

export const use = useCombobox;
export const useContext = useComboboxContext;
export const useItemContext = useComboboxItemContext;


export type { UseComboboxContext as UseContext, UseComboboxItemContext as UseItemContext, UseComboboxProps as UseProps, UseComboboxReturn as UseReturn }

const comboboxStyleContext = createStyleContext(combobox);

// Root Component
export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  Combobox.RootBaseProps<any> & ComboboxVariantProps
>;
export const Root = comboboxStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "value",
      "collection",
      "allowCustomValue",
      "autoFocus",
      "closeOnSelect",
      "composite",
      "defaultOpen",
      "defaultValue",
      "disabled",
      "disableLayer",
      "form",
      "highlightedValue",
      "id",
      "ids",
      "immediate",
      "inputBehavior",
      "inputValue",
      "invalid",
      "lazyMount",
      "loopFocus",
      "multiple",
      "defaultInputValue",
      "defaultHighlightedValue",
      "name",
      "navigate",
      "onExitComplete",
      "onFocusOutside",
      "onHighlightChange",
      "onInputValueChange",
      "onInteractOutside",
      "onOpenChange",
      "onPointerDownOutside",
      "onSelect",
      "onValueChange",
      "open",
      "onOpenChange",
      "openOnClick",
      "openOnKeyPress",
      "placeholder",
      "positioning",
      "present",
      "readOnly",
      "required",
      "scrollToIndexFn",
      "selectionBehavior",
      "skipAnimationOnMount",
      "translations",
      "unmountOnExit",
    ]);

    return jsx(Combobox.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "ComboboxRoot";

// Context Component
export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Combobox.ContextProps<any>>;
export const Context = comboboxStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Combobox.Context, { ...arkProps, asChild: true }),
    });
  }),
  "context",
);
Context.displayName = "ComboboxContext";

// ClearTrigger Component
export type ClearTriggerRef = React.ComponentRef<"button">;
export type ClearTriggerProps = Factory.Props<
  "button",
  Combobox.ClearTriggerBaseProps
>;
export const ClearTrigger = comboboxStyleContext.withContext(
  React.forwardRef<ClearTriggerRef, ClearTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Combobox.ClearTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "clear-trigger",
);
ClearTrigger.displayName = "ComboboxClearTrigger";

// Content Component
export type ContentRef = React.ComponentRef<"div">;
export type ContentProps = Factory.Props<"div", Combobox.ContentBaseProps>;
export const Content = comboboxStyleContext.withContext(
  React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Combobox.Content, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "content",
);
Content.displayName = "ComboboxContent";

// Control Component
export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", Combobox.ControlBaseProps>;
export const Control = comboboxStyleContext.withContext(
  React.forwardRef<ControlRef, ControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Combobox.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "control",
);
Control.displayName = "ComboboxControl";

// ItemGroup Component
export type ItemGroupRef = React.ComponentRef<"div">;
export type ItemGroupProps = Factory.Props<"div", Combobox.ItemGroupBaseProps>;
export const ItemGroup = comboboxStyleContext.withContext(
  React.forwardRef<ItemGroupRef, ItemGroupProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Combobox.ItemGroup, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-group",
);
ItemGroup.displayName = "ComboboxItemGroup";

// ItemGroupLabel Component
export type ItemGroupLabelRef = React.ComponentRef<"div">;
export type ItemGroupLabelProps = Factory.Props<
  "div",
  Combobox.ItemGroupLabelBaseProps
>;
export const ItemGroupLabel = comboboxStyleContext.withContext(
  React.forwardRef<ItemGroupLabelRef, ItemGroupLabelProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Combobox.ItemGroupLabel, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-group-label",
);
ItemGroupLabel.displayName = "ComboboxItemGroupLabel";

// ItemIndicator Component
export type ItemIndicatorRef = React.ComponentRef<"div">;
export type ItemIndicatorProps = Factory.Props<
  "div",
  Combobox.ItemIndicatorBaseProps
>;
export const ItemIndicator = comboboxStyleContext.withContext(
  React.forwardRef<ItemIndicatorRef, ItemIndicatorProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Combobox.ItemIndicator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-indicator",
);
ItemIndicator.displayName = "ComboboxItemIndicator";

// ItemText Component
export type ItemTextRef = React.ComponentRef<"div">;
export type ItemTextProps = Factory.Props<"div", Combobox.ItemTextBaseProps>;
export const ItemText = comboboxStyleContext.withContext(
  React.forwardRef<ItemTextRef, ItemTextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Combobox.ItemText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-text",
);
ItemText.displayName = "ComboboxItemText";

// Item Component
export type ItemRef = React.ComponentRef<"div">;
export type ItemProps = Factory.Props<"div", Combobox.ItemBaseProps>;
export const Item = comboboxStyleContext.withContext(
  React.forwardRef<ItemRef, ItemProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["item", "persistFocus"]);

    return jsx(Combobox.Item, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item",
);
Item.displayName = "ComboboxItem";

// Label Component
export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", Combobox.LabelBaseProps>;
export const Label = comboboxStyleContext.withContext(
  React.forwardRef<LabelRef, LabelProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, []);

    return jsx(Combobox.Label, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, { ...labelProps, ref }),
    });
  }),
  "label",
);
Label.displayName = "ComboboxLabel";

// List Component
export type ListRef = React.ComponentRef<"ul">;
export type ListProps = Factory.Props<"ul", Combobox.ListProps>;
export const List = comboboxStyleContext.withContext(
  React.forwardRef<ListRef, ListProps>((props, ref) => {
    const [arkProps, ulProps] = splitProps(props, []);

    return jsx(Combobox.List, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.ul, { ...ulProps, ref }),
    });
  }),
  "list",
);
List.displayName = "ComboboxList";

// Positioner Component
export type PositionerRef = React.ComponentRef<"div">;
export type PositionerProps = Factory.Props<"div", Combobox.PositionerProps>;
export const Positioner = comboboxStyleContext.withContext(
  React.forwardRef<PositionerRef, PositionerProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Combobox.Positioner, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "positioner",
);
Positioner.displayName = "ComboboxPositioner";

// Provider Component
export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Combobox.RootProviderBaseProps<any> & ComboboxVariantProps
>;
export const Provider = comboboxStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Combobox.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "ComboboxProvider";

// TextInput Component
export type TextInputRef = React.ComponentRef<"input">;
export type TextInputProps = Factory.Props<"input", Combobox.InputBaseProps>;
export const TextInput = comboboxStyleContext.withContext(
  React.forwardRef<TextInputRef, TextInputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, []);

    return jsx(Combobox.Input, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, { ...inputProps, ref }),
    });
  }),
  "text-input",
);
TextInput.displayName = "ComboboxTextInput";

// Trigger Component
export type TriggerRef = React.ComponentRef<"button">;
export type TriggerProps = Factory.Props<"button", Combobox.TriggerBaseProps>;
export const Trigger = comboboxStyleContext.withContext(
  React.forwardRef<TriggerRef, TriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Combobox.Trigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "trigger",
);
Trigger.displayName = "ComboboxTrigger";
