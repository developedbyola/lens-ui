import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { carousel, type CarouselVariantProps } from "../../../.styled/recipes";
import { Carousel, useCarousel, useCarouselContext, type UseCarouselContext, type UseCarouselReturn, type UseCarouselProps } from "@ark-ui/react";

export const use = useCarousel;
export const useContext = useCarouselContext;

export type { UseCarouselContext as UseContext, UseCarouselProps as UseProps, UseCarouselReturn as UseReturn };

const carouselStyleContext = createStyleContext(carousel);

// AutoplayTrigger
export type AutoplayTriggerRef = React.ComponentRef<"button">;
export type AutoplayTriggerProps = Factory.Props<
  "button",
  Carousel.AutoplayTriggerBaseProps
>;
export const AutoplayTrigger = carouselStyleContext.withContext(
  React.forwardRef<AutoplayTriggerRef, AutoplayTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);
    return jsx(Carousel.AutoplayTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "autoplay-trigger",
);
AutoplayTrigger.displayName = "CarouselAutoplayTrigger";

// Context
type ContextRef = React.ComponentRef<"div">;
type ContextProps = Factory.Props<"div", Carousel.ContextProps>;
export const Context = carouselStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Carousel.Context, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "context",
);
Context.displayName = "CarouselContext";

// Control
type ControlRef = React.ComponentRef<"div">;
type ControlProps = Factory.Props<"div", Carousel.ControlBaseProps>;
export const Control = carouselStyleContext.withContext(
  React.forwardRef<ControlRef, ControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Carousel.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "control",
);
Control.displayName = "CarouselControl";

// IndicatorGroup
export type IndicatorGroupRef = React.ComponentRef<"div">;
export type IndicatorGroupProps = Factory.Props<
  "div",
  Carousel.IndicatorGroupBaseProps
>;
export const IndicatorGroup = carouselStyleContext.withContext(
  React.forwardRef<IndicatorGroupRef, IndicatorGroupProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Carousel.IndicatorGroup, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "indicator-group",
);
IndicatorGroup.displayName = "CarouselIndicatorGroup";

// Indicator
export type IndicatorRef = React.ComponentRef<"div">;
export type IndicatorProps = Factory.Props<"div", Carousel.IndicatorBaseProps>;
export const Indicator = carouselStyleContext.withContext(
  React.forwardRef<IndicatorRef, IndicatorProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["index", "readOnly"]);
    return jsx(Carousel.Indicator, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "indicator",
);
Indicator.displayName = "CarouselIndicator";

// ItemGroup
export type ItemGroupRef = React.ComponentRef<"div">;
export type ItemGroupProps = Factory.Props<"div", Carousel.ItemGroupBaseProps>;
export const ItemGroup = carouselStyleContext.withContext(
  React.forwardRef<ItemGroupRef, ItemGroupProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);
    return jsx(Carousel.ItemGroup, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item-group",
);
ItemGroup.displayName = "CarouselItemGroup";

// Item
export type ItemRef = React.ComponentRef<"div">;
export type ItemProps = Factory.Props<"div", Carousel.ItemBaseProps>;
export const Item = carouselStyleContext.withContext(
  React.forwardRef<ItemRef, ItemProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["index", "snapAlign"]);
    return jsx(Carousel.Item, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "item",
);
Item.displayName = "CarouselItem";

// NextTrigger
export type NextTriggerRef = React.ComponentRef<"button">;
export type NextTriggerProps = Factory.Props<
  "button",
  Carousel.NextTriggerBaseProps
>;
export const NextTrigger = carouselStyleContext.withContext(
  React.forwardRef<NextTriggerRef, NextTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);
    return jsx(Carousel.NextTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "next-trigger",
);
NextTrigger.displayName = "CarouselNextTrigger";

// PrevTrigger
export type PrevTriggerRef = React.ComponentRef<"button">;
export type PrevTriggerProps = Factory.Props<
  "button",
  Carousel.PrevTriggerBaseProps
>;
export const PrevTrigger = carouselStyleContext.withContext(
  React.forwardRef<PrevTriggerRef, PrevTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);
    return jsx(Carousel.PrevTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "prev-trigger",
);
PrevTrigger.displayName = "CarouselPrevTrigger";

// Provider
export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Carousel.RootProviderBaseProps & CarouselVariantProps
>;
export const Provider = carouselStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);
    return jsx(Carousel.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "CarouselProvider";

// Root
export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  Carousel.RootBaseProps & CarouselVariantProps
>;
export const Root = carouselStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "ids",
      "loop",
      "page",
      "padding",
      "spacing",
      "autoplay",
      "snapType",
      "slideCount",
      "defaultPage",
      "orientation",
      "translations",
      "onPageChange",
      "slidesPerPage",
      "slidesPerMove",
      "allowMouseDrag",
      "inViewThreshold",
      "onDragStatusChange",
      "onAutoplayStatusChange",
    ]);

    return jsx(Carousel.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "CarouselRoot";
