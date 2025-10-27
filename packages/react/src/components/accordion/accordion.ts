import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, type Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import {
  accordion,
  type AccordionVariantProps,
} from "../../../.styled/recipes";
import {
  Accordion,
  useAccordionContext,
  useAccordion,
  useAccordionItemContext,
  type UseAccordionContext,
  type UseAccordionItemContext,
  type UseAccordionProps,
  type UseAccordionReturn,
} from "@ark-ui/react";

const accordionStyleContext = createStyleContext(accordion);

export const use = useAccordion;
export const useContext = useAccordionContext;
export const useItemContext = useAccordionItemContext;

export type { UseAccordionContext as UseContext, UseAccordionItemContext as UseItemContext, UseAccordionProps as UseProps, UseAccordionReturn as UseReturn }

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Accordion.RootProviderBaseProps & AccordionVariantProps
>;
export const Provider = accordionStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [providerProps, divProps] = splitProps(props, [
      "value",
      "lazyMount",
      "unmountOnExit",
    ]);

    return jsx(Accordion.RootProvider, {
      ...providerProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "AccordionProvider";

export type RootRef = React.ComponentRef<typeof factory.div>;
export type RootProps = Factory.Props<
  "div",
  Accordion.RootBaseProps & AccordionVariantProps
>;
export const Root = accordionStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [rootProps, divProps] = splitProps(props, [
      "id",
      "ids",
      "value",
      "multiple",
      "disabled",
      "lazyMount",
      "collapsible",
      "orientation",
      "defaultValue",
      "onFocusChange",
      "onValueChange",
      "unmountOnExit",
    ]);

    return jsx(Accordion.Root, {
      ...rootProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "root",
);
Root.displayName = "AccordionRoot";

export type ItemRef = React.ComponentRef<"div">;
export type ItemProps = Factory.Props<"div", Accordion.ItemBaseProps>;
export const Item = accordionStyleContext.withContext(
  React.forwardRef<ItemRef, ItemProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value", "disabled"]);

    return jsx(Accordion.Item, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, {
        ...divProps,
        ref,
      }),
    });
  }),
  "item",
);
Item.displayName = "AccordionItem";

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Accordion.ContextProps>;
export const Context = accordionStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      children: jsx(Accordion.Context, {
        ...arkProps,
      }),
    });
  }),
  "context",
);
Context.displayName = "AccordionContext";

export type ItemContextRef = React.ComponentRef<"div">;
export type ItemContextProps = Factory.Props<"div", Accordion.ItemContextProps>;
export const ItemContext = accordionStyleContext.withContext(
  React.forwardRef<ItemContextRef, ItemContextProps>((props, ref) => {
    const [contextProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Accordion.ItemContext, { ...contextProps }),
    });
  }),
  "item-context",
);
ItemContext.displayName = "AccordionItemContext";

export type ItemTriggerRef = React.ComponentRef<"button">;
export type ItemTriggerProps = Factory.Props<
  "button",
  Accordion.ItemTriggerBaseProps
>;
export const ItemTrigger = accordionStyleContext.withContext(
  React.forwardRef<ItemTriggerRef, ItemTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Accordion.ItemTrigger, {
      asChild: true,
      ...arkProps,
      children: jsx(factory.button, {
        ...buttonProps,
        ref,
      }),
    });
  }),
  "item-trigger",
);
ItemTrigger.displayName = "AccordionItemTrigger";

export type ItemContentRef = React.ComponentRef<"div">;
export type ItemContentProps = Factory.Props<
  "div",
  Accordion.ItemContentBaseProps
>;
export const ItemContent = accordionStyleContext.withContext(
  React.forwardRef<ItemContentRef, ItemContentProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Accordion.ItemContent, {
      asChild: true,
      ...arkProps,
      children: jsx(factory.div, {
        ...buttonProps,
        ref,
      }),
    });
  }),
  "item-content",
);
ItemContent.displayName = "AccordionItemContent";

export type ItemIndicatorRef = React.ComponentRef<"span">;
export type ItemIndicatorProps = Factory.Props<
  "span",
  Accordion.ItemIndicatorBaseProps
>;
export const ItemIndicator = accordionStyleContext.withContext(
  React.forwardRef<ItemIndicatorRef, ItemIndicatorProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Accordion.ItemIndicator, {
      asChild: true,
      ...arkProps,
      children: jsx(factory.span, {
        ...buttonProps,
        ref,
      }),
    });
  }),
  "item-indicator",
);
ItemIndicator.displayName = "AccordionItemIndicator";
