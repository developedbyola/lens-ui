import React from "react";
import { jsx } from "react/jsx-runtime";
import {
  Listbox,
  useListbox,
  useListboxContext,
  useListboxItemContext,
} from "@ark-ui/react";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { listbox, type ListboxVariantProps } from "../../../.styled/recipes";

export const use = useListbox;
export const useContext = useListboxContext;
export const useItemContext = useListboxItemContext;

const listboxStyleContext = createStyleContext(listbox);

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Listbox.RootProviderBaseProps<any> & ListboxVariantProps
>;
export const Provider = listboxStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Listbox.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "ListboxProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<"div", Listbox.RootBaseProps<any>>;
export const Root = listboxStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "collection",
      "defaultHighlightedValue",
      "defaultValue",
      "deselectable",
      "disabled",
      "disallowSelectAll",
      "highlightedValue",
      "id",
      "ids",
      "loopFocus",
      "onHighlightChange",
      "onSelect",
      "onValueChange",
      "orientation",
      "scrollToIndexFn",
      "selectionMode",
      "selectOnHighlight",
      "typeahead",
      "value",
    ]);

    return jsx(Listbox.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "ListboxRoot";

export type ContentRef = React.ComponentRef<"ul">;
export type ContentProps = Factory.Props<"ul", Listbox.ContentBaseProps>;
export const Content = listboxStyleContext.withContext(
  React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const [arkProps, ulProps] = splitProps(props, []);

    return jsx(Listbox.Content, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.ul, { ...ulProps, ref }),
    });
  }),
  "content",
);
Content.displayName = "ListboxContent";

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Listbox.ContextProps<any>>;
export const Context = React.forwardRef<ContextRef, ContextProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Listbox.Context, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
);
Context.displayName = "ListboxContext";

export type ItemContextRef = React.ComponentRef<"div">;
export type ItemContextProps = Factory.Props<"div", Listbox.ItemContextProps>;
export const ItemContext = listboxStyleContext.withContext(
  React.forwardRef<ItemContextRef, ItemContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Listbox.ItemContext, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-context",
);
ItemContext.displayName = "ListboxItemContext";

export type ItemRef = React.ComponentRef<"li">;
export type ItemProps = Factory.Props<
  "li",
  Listbox.ItemBaseProps & { disabled?: boolean }
>;
export const Item = listboxStyleContext.withContext(
  React.forwardRef<ItemRef, ItemProps>((props, ref) => {
    const [arkProps, liProps] = splitProps(props, [
      "highlightOnHover",
      "item",
      "disabled",
    ]);

    return jsx(Listbox.Item, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.li, { ...liProps, ref }),
    });
  }),
  "item",
);
Item.displayName = "ListboxItem";

export type ItemGroupRef = React.ComponentRef<"div">;
export type ItemGroupProps = Factory.Props<"div", Listbox.ItemGroupBaseProps>;
export const ItemGroup = listboxStyleContext.withContext(
  React.forwardRef<ItemGroupRef, ItemGroupProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Listbox.ItemGroup, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-group",
);
ItemGroup.displayName = "ListboxItemGroup";

export type ItemGroupLabelRef = React.ComponentRef<"label">;
export type ItemGroupLabelProps = Factory.Props<
  "label",
  Listbox.ItemGroupLabelBaseProps
>;
export const ItemGroupLabel = listboxStyleContext.withContext(
  React.forwardRef<ItemGroupLabelRef, ItemGroupLabelProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, []);

    return jsx(Listbox.ItemGroupLabel, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, { ...labelProps, ref }),
    });
  }),
  "item-group-label",
);
ItemGroupLabel.displayName = "ListboxItemGroupLabel";

export type ItemIndicatorRef = React.ComponentRef<"div">;
export type ItemIndicatorProps = Factory.Props<
  "div",
  Listbox.ItemIndicatorBaseProps
>;
export const ItemIndicator = listboxStyleContext.withContext(
  React.forwardRef<ItemIndicatorRef, ItemIndicatorProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Listbox.ItemIndicator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-indicator",
);
ItemIndicator.displayName = "ListboxItemIndicator";

export type ItemTextRef = React.ComponentRef<"span">;
export type ItemTextProps = Factory.Props<"span", Listbox.ItemTextBaseProps>;
export const ItemText = listboxStyleContext.withContext(
  React.forwardRef<ItemTextRef, ItemTextProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Listbox.ItemText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "item-text",
);
ItemText.displayName = "ListboxItemText";

export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", Listbox.LabelBaseProps>;
export const Label = listboxStyleContext.withContext(
  React.forwardRef<LabelRef, LabelProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, []);

    return jsx(Listbox.Label, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, { ...labelProps, ref }),
    });
  }),
  "label",
);
Label.displayName = "ListboxLabel";

export type ValueTextRef = React.ComponentRef<"span">;
export type ValueTextProps = Factory.Props<"span", Listbox.ValueTextBaseProps>;
export const ValueText = listboxStyleContext.withContext(
  React.forwardRef<ValueTextRef, ValueTextProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, ["placeholder"]);

    return jsx(Listbox.ValueText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "value-text",
);
ValueText.displayName = "ListboxValueText";
