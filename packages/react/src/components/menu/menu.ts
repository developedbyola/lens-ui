import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import {
  Menu,
  useMenu,
  useMenuContext,
  useMenuItemContext,
} from "@ark-ui/react/menu";
import { menu, type MenuVariantProps } from "../../../.styled/recipes";

export const use = useMenu;
export const useContext = useMenuContext;
export const useItemContext = useMenuItemContext;

const menuStyleContext = createStyleContext(menu);

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Menu.RootProviderBaseProps & MenuVariantProps
>;
export const Provider = menuStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "present",
      "value",
      "immediate",
      "lazyMount",
      "onExitComplete",
      "skipAnimationOnMount",
      "unmountOnExit",
    ]);

    return jsx(Menu.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "MenuProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<"div", Menu.RootBaseProps>;
export const Root = menuStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "anchorPoint",
      "open",
      "defaultOpen",
      "onOpenChange",
      "onSelect",
      "id",
      "ids",
      "aria-label",
      "closeOnSelect",
      "composite",
      "defaultHighlightedValue",
      "highlightedValue",
    ]);

    return jsx(Menu.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "MenuRoot";

export type ArrowRef = React.ComponentRef<"div">;
export type ArrowProps = Factory.Props<"div", Menu.ArrowBaseProps>;
export const Arrow = menuStyleContext.withContext(
  React.forwardRef<ArrowRef, ArrowProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Menu.Arrow, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "arrow",
);
Arrow.displayName = "MenuArrow";

export type ArrowTipRef = React.ComponentRef<"div">;
export type ArrowTipProps = Factory.Props<"div", Menu.ArrowTipBaseProps>;
export const ArrowTip = menuStyleContext.withContext(
  React.forwardRef<ArrowTipRef, ArrowTipProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Menu.ArrowTip, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "arrow-tip",
);
ArrowTip.displayName = "MenuArrowTip";

export type ContentRef = React.ComponentRef<"div">;
export type ContentProps = Factory.Props<"div", Menu.ContentBaseProps>;
export const Content = menuStyleContext.withContext(
  React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Menu.Content, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "content",
);
Content.displayName = "MenuContent";

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Menu.ContextProps>;
export const Context = menuStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Menu.Context, {
        ...arkProps,
        asChild: true,
      }),
    });
  }),
  "context",
);
Context.displayName = "MenuContext";

export type ItemContextRef = React.ComponentRef<"div">;
export type ItemContextProps = Factory.Props<"div", Menu.ItemContextProps>;
export const ItemContext = menuStyleContext.withContext(
  React.forwardRef<ItemContextRef, ItemContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Menu.ItemContext, {
        ...arkProps,
        asChild: true,
      }),
    });
  }),
  "context",
);
ItemContext.displayName = "MenuItemContext";

export type ContextTriggerRef = React.ComponentRef<"button">;
export type ContextTriggerProps = Factory.Props<
  "button",
  Menu.ContextTriggerBaseProps
>;
export const ContextTrigger = menuStyleContext.withContext(
  React.forwardRef<ContextTriggerRef, ContextTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, ["disabled"]);

    return jsx(Menu.ContextTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "context-trigger",
);
ContextTrigger.displayName = "MenuContextTrigger";

export type IndicatorRef = React.ComponentRef<"span">;
export type IndicatorProps = Factory.Props<"span", Menu.IndicatorBaseProps>;
export const Indicator = menuStyleContext.withContext(
  React.forwardRef<IndicatorRef, IndicatorProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);
    return jsx(Menu.Indicator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "indicator",
);
Indicator.displayName = "MenuIndicator";

export type ItemRef = React.ComponentRef<"div">;
export type ItemProps = Factory.Props<"div", Menu.ItemBaseProps>;
export const Item = menuStyleContext.withContext(
  React.forwardRef<ItemRef, ItemProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value", "disabled"]);
    return jsx(Menu.Item, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item",
);
Item.displayName = "MenuItem";

export type ItemGroupRef = React.ComponentRef<"div">;
export type ItemGroupProps = Factory.Props<"div", Menu.ItemGroupBaseProps>;
export const ItemGroup = menuStyleContext.withContext(
  React.forwardRef<ItemGroupRef, ItemGroupProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Menu.ItemGroup, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-group",
);
ItemGroup.displayName = "MenuItemGroup";

export type ItemGroupLabelRef = React.ComponentRef<"div">;
export type ItemGroupLabelProps = Factory.Props<
  "div",
  Menu.ItemGroupLabelBaseProps
>;
export const ItemGroupLabel = menuStyleContext.withContext(
  React.forwardRef<ItemGroupLabelRef, ItemGroupLabelProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Menu.ItemGroupLabel, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-group-label",
);
ItemGroupLabel.displayName = "MenuItemGroupLabel";

export type ItemIndicatorRef = React.ComponentRef<"span">;
export type ItemIndicatorProps = Factory.Props<
  "span",
  Menu.ItemIndicatorBaseProps
>;
export const ItemIndicator = menuStyleContext.withContext(
  React.forwardRef<ItemIndicatorRef, ItemIndicatorProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);
    return jsx(Menu.ItemIndicator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "item-indicator",
);
ItemIndicator.displayName = "MenuItemIndicator";

export type ItemTextRef = React.ComponentRef<"span">;
export type ItemTextProps = Factory.Props<"span", Menu.ItemTextBaseProps>;
export const ItemText = menuStyleContext.withContext(
  React.forwardRef<ItemTextRef, ItemTextProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);
    return jsx(Menu.ItemText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "item-text",
);
ItemText.displayName = "MenuItemText";

export type PositionerRef = React.ComponentRef<"div">;
export type PositionerProps = Factory.Props<"div", Menu.PositionerBaseProps>;
export const Positioner = menuStyleContext.withContext(
  React.forwardRef<PositionerRef, PositionerProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Menu.Positioner, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "positioner",
);
Positioner.displayName = "MenuPositioner";

export type SeparatorRef = React.ComponentRef<"div">;
export type SeparatorProps = Factory.Props<"div", Menu.SeparatorBaseProps>;
export const Separator = menuStyleContext.withContext(
  React.forwardRef<SeparatorRef, SeparatorProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Menu.Separator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "separator",
);
Separator.displayName = "MenuSeparator";

export type TriggerRef = React.ComponentRef<"button">;
export type TriggerProps = Factory.Props<"button", Menu.TriggerBaseProps>;
export const Trigger = menuStyleContext.withContext(
  React.forwardRef<TriggerRef, TriggerProps>((props, ref) => {
    const [arkProps, btnProps] = splitProps(props, ["disabled"]);

    return jsx(Menu.Trigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...btnProps, ref }),
    });
  }),
  "trigger",
);
Trigger.displayName = "MenuTrigger";

export type TriggerItemRef = React.ComponentRef<"div">;
export type TriggerItemProps = Factory.Props<"div", Menu.TriggerItemBaseProps>;
export const TriggerItem = menuStyleContext.withContext(
  React.forwardRef<TriggerItemRef, TriggerItemProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Menu.TriggerItem, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "trigger-item",
);
TriggerItem.displayName = "MenuTriggerItem";
