import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { alert, type AlertVariantProps } from "../../../.styled/recipes";
import { createStyleContext } from "../../../.styled/jsx";
import {
  Collapsible,
  useCollapsible,
  useCollapsibleContext,
  type UseCollapsibleContext,
  type UseCollapsibleProps,
  type UseCollapsibleReturn,
} from "@ark-ui/react";

export const use = useCollapsible;
export const useContext = useCollapsibleContext;

export type { UseCollapsibleContext as UseContext, UseCollapsibleProps as UseProps, UseCollapsibleReturn as UseReturn }

const alertStyleContext = createStyleContext(alert);

// Provider Component
export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Collapsible.RootProviderBaseProps & AlertVariantProps
>;
export const Provider = alertStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(Collapsible.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "AlertProvider";

// Root Component
export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  Collapsible.RootBaseProps & AlertVariantProps
>;
export const Root = alertStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "defaultOpen",
      "disabled",
      "id",
      "ids",
      "lazyMount",
      "onOpenChange",
      "open",
      "unmountOnExit",
    ]);

    return jsx(Collapsible.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "AlertRoot";

// Context Component
export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Collapsible.ContextProps>;
export const Context = alertStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Collapsible.Context, {
        ...arkProps,
      }),
    });
  }),
  "context",
);
Context.displayName = "AlertContext";

// Trigger Component
export type TriggerRef = React.ComponentRef<"button">;
export type TriggerProps = Factory.Props<
  "button",
  Collapsible.TriggerBaseProps
>;
export const Trigger = alertStyleContext.withContext(
  React.forwardRef<TriggerRef, TriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Collapsible.Trigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "trigger",
);
Trigger.displayName = "AlertTrigger";

// Content Component
export type ContentRef = React.ComponentRef<"div">;
export type ContentProps = Factory.Props<"div", Collapsible.ContentBaseProps>;
export const Content = alertStyleContext.withContext(
  React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Collapsible.Content, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "content",
);
Content.displayName = "AlertContent";

// Indicator Component
export type IndicatorRef = React.ComponentRef<"div">;
export type IndicatorProps = Factory.Props<
  "div",
  Collapsible.IndicatorBaseProps
>;
export const Indicator = alertStyleContext.withContext(
  React.forwardRef<IndicatorRef, IndicatorProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Collapsible.Indicator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "indicator",
);
Indicator.displayName = "AlertIndicator";

// Title Component
export type TitleRef = React.ComponentRef<"h6">;
export type TitleProps = Factory.Props<"h6">;
export const Title = alertStyleContext.withContext(
  React.forwardRef<TitleRef, TitleProps>((props, ref) => {
    const [arkProps, h6Props] = splitProps(props, []);

    return jsx(factory.h6, { ...h6Props, ref });
  }),
  "title",
);
Title.displayName = "AlertTitle";

// Description Component
export type DescriptionRef = React.ComponentRef<"p">;
export type DescriptionProps = Factory.Props<"p">;
export const Description = alertStyleContext.withContext(
  React.forwardRef<DescriptionRef, DescriptionProps>((props, ref) => {
    const [arkProps, pProps] = splitProps(props, []);

    return jsx(factory.p, { ...pProps, ref });
  }),
  "description",
);
Description.displayName = "AlertDescription";
