import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import { dialog, type DialogVariantProps } from "../../../.styled/recipes";
import { Dialog, useDialog, useDialogContext, type UseDialogContext, type UseDialogProps, type UseDialogReturn } from "@ark-ui/react";

export const use = useDialog;
export const useContext = useDialogContext;

export type { UseDialogContext as UseContext, UseDialogProps as UseProps, UseDialogReturn as UseReturn };

const dialogStyleContext = createStyleContext(dialog);

// Root Component
export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  Dialog.RootBaseProps & DialogVariantProps
>;
export const Root = dialogStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "aria-label",
      "closeOnEscape",
      "closeOnInteractOutside",
      "defaultOpen",
      "finalFocusEl",
      "ids",
      "immediate",
      "initialFocusEl",
      "lazyMount",
      "modal",
      "onEscapeKeyDown",
      "onExitComplete",
      "onFocusOutside",
      "onInteractOutside",
      "onOpenChange",
      "onPointerDownOutside",
      "onRequestDismiss",
      "open",
      "persistentElements",
      "present",
      "preventScroll",
      "restoreFocus",
      "role",
      "skipAnimationOnMount",
      "trapFocus",
      "unmountOnExit",
    ]);

    return jsx(Dialog.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "DialogRoot";

// Backdrop Component
export type BackdropRef = React.ComponentRef<"div">;
export type BackdropProps = Factory.Props<"div", Dialog.BackdropBaseProps>;
export const Backdrop = dialogStyleContext.withContext(
  React.forwardRef<BackdropRef, BackdropProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Dialog.Backdrop, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "backdrop",
);
Backdrop.displayName = "DialogBackdrop";

// CloseTrigger Component
export type CloseTriggerRef = React.ComponentRef<"button">;
export type CloseTriggerProps = Factory.Props<
  "button",
  Dialog.CloseTriggerBaseProps
>;
export const CloseTrigger = dialogStyleContext.withContext(
  React.forwardRef<CloseTriggerRef, CloseTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Dialog.CloseTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "close-trigger",
);
CloseTrigger.displayName = "DialogCloseTrigger";

// Content Component
export type ContentRef = React.ComponentRef<"div">;
export type ContentProps = Factory.Props<"div", Dialog.ContentBaseProps>;
export const Content = dialogStyleContext.withContext(
  React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Dialog.Content, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "content",
);
Content.displayName = "DialogContent";

// Context Component
export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", Dialog.ContextProps>;
export const Context = dialogStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(Dialog.Context, {
        ...arkProps,
        asChild: true,
      }),
    });
  }),
  "context",
);
Context.displayName = "DialogContext";

// Description Component
export type DescriptionRef = React.ComponentRef<"span">;
export type DescriptionProps = Factory.Props<
  "span",
  Dialog.DescriptionBaseProps
>;
export const Description = dialogStyleContext.withContext(
  React.forwardRef<DescriptionRef, DescriptionProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Dialog.Description, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "description",
);
Description.displayName = "DialogDescription";

// Positioner Component
export type PositionerRef = React.ComponentRef<"div">;
export type PositionerProps = Factory.Props<"div", Dialog.PositionerBaseProps>;
export const Positioner = dialogStyleContext.withContext(
  React.forwardRef<PositionerRef, PositionerProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(Dialog.Positioner, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "positioner",
);
Positioner.displayName = "DialogPositioner";

// Provider Component
export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  Dialog.RootProviderBaseProps & DialogVariantProps
>;
export const Provider = dialogStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "value",
      "immediate",
      "lazyMount",
      "onExitComplete",
      "present",
      "skipAnimationOnMount",
      "unmountOnExit",
    ]);

    return jsx(Dialog.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "DialogProvider";

// Title Component
export type TitleRef = React.ComponentRef<"span">;
export type TitleProps = Factory.Props<"span", Dialog.TitleBaseProps>;
export const Title = dialogStyleContext.withContext(
  React.forwardRef<TitleRef, TitleProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(Dialog.Title, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "title",
);
Title.displayName = "DialogTitle";

// Trigger Component
export type TriggerRef = React.ComponentRef<"button">;
export type TriggerProps = Factory.Props<"button", Dialog.TriggerBaseProps>;
export const Trigger = dialogStyleContext.withContext(
  React.forwardRef<TriggerRef, TriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(Dialog.Trigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "trigger",
);
Trigger.displayName = "DialogTrigger";
