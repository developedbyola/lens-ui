import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import {
  collapsible,
  type CollapsibleVariantProps,
} from "../../../.styled/recipes";
import { Collapsible, useCollapsible, useCollapsibleContext, type UseCollapsibleContext, type UseCollapsibleProps, type UseCollapsibleReturn } from "@ark-ui/react";

export const use = useCollapsible;
export const useContext = useCollapsibleContext;

export type { UseCollapsibleContext as UseContext, UseCollapsibleProps as UseProps, UseCollapsibleReturn as UseReturn };

const collapsibleStyleContext = createStyleContext(collapsible);

// Root Component
export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Collapsible.RootProviderBaseProps & CollapsibleVariantProps
>;
export const Provider = collapsibleStyleContext.withProvider(
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
Provider.displayName = "CollapsibleProvider";

// Root Component
export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  Collapsible.RootBaseProps & CollapsibleVariantProps
>;
export const Root = collapsibleStyleContext.withProvider(
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
Root.displayName = "CollapsibleRoot";

// Context Component
export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Collapsible.ContextProps>;
export const Context = collapsibleStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ref,
      ...divProps,
      children: jsx(Collapsible.Context, {
        ...arkProps,
        asChild: true,
      }),
    });
  }),
  "content",
);
Context.displayName = "CollapsibleContext";

// Trigger Component
export type TriggerRef = React.ComponentRef<"button">;
export type TriggerProps = Factory.Props<
  "button",
  Collapsible.TriggerBaseProps
>;
export const Trigger = collapsibleStyleContext.withContext(
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
Trigger.displayName = "CollapsibleTrigger";

// Content Component
export type ContentRef = React.ComponentRef<"div">;
export type ContentProps = Factory.Props<"div", Collapsible.ContentBaseProps>;
export const Content = collapsibleStyleContext.withContext(
  React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["asChild"]);

    return jsx(Collapsible.Content, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "content",
);
Content.displayName = "CollapsibleContent";

// Indicator Component
export type IndicatorRef = React.ComponentRef<"div">;
export type IndicatorProps = Factory.Props<
  "div",
  Collapsible.IndicatorBaseProps
>;
export const Indicator = collapsibleStyleContext.withContext(
  React.forwardRef<IndicatorRef, IndicatorProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["asChild"]);

    return jsx(Collapsible.Indicator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "indicator",
);
Indicator.displayName = "CollapsibleIndicator";
