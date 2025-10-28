import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { createStyleContext } from "../../../.styled/jsx";
import {
  floatingPanel,
  type FloatingPanelVariantProps,
} from "../../../.styled/recipes";
import {
  FloatingPanel,
  useFloatingPanel,
  useFloatingPanelContext,
  type UseFloatingPanelContext,
  type UseFloatingPanelProps,
  type UseFloatingPanelReturn
} from "@ark-ui/react";

export const use = useFloatingPanel;
export const useContext = useFloatingPanelContext;

export type { UseFloatingPanelContext as UseContext, UseFloatingPanelProps as UseProps, UseFloatingPanelReturn as UseReturn };

const floatingPanelStyleContext = createStyleContext(floatingPanel);

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  FloatingPanel.RootProviderBaseProps & FloatingPanelVariantProps
>;
export const Provider = floatingPanelStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "value",
      "immediate",
      "lazyMount",
      "unmountOnExit",
      "onExitComplete",
      "skipAnimationOnMount",
    ]);

    return jsx(FloatingPanel.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "FloatingPanelProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  FloatingPanel.RootBaseProps & FloatingPanelVariantProps
>;
export const Root = floatingPanelStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "allowOverflow",
      "closeOnEscape",
      "defaultOpen",
      "defaultPosition",
      "defaultSize",
      "dir",
      "disabled",
      "draggable",
      "getAnchorPosition",
      "getBoundaryEl",
      "gridSize",
      "id",
      "ids",
      "immediate",
      "lazyMount",
      "lockAspectRatio",
      "maxSize",
      "minSize",
      "onExitComplete",
      "onOpenChange",
      "onPositionChange",
      "onPositionChangeEnd",
      "onSizeChange",
      "onSizeChangeEnd",
      "onStageChange",
      "open",
      "persistRect",
      "position",
      "present",
      "resizable",
      "size",
      "skipAnimationOnMount",
      "strategy",
      "translations",
      "unmountOnExit",
    ]);

    return jsx(FloatingPanel.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "FloatingPanelRoot";

export type BodyRef = React.ComponentRef<"div">;
export type BodyProps = Factory.Props<"div", FloatingPanel.BodyBaseProps>;
export const Body = floatingPanelStyleContext.withContext(
  React.forwardRef<BodyRef, BodyProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(FloatingPanel.Body, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "body",
);
Body.displayName = "FloatingPanelBody";

export type CloseTriggerRef = React.ComponentRef<"button">;
export type CloseTriggerProps = Factory.Props<
  "button",
  FloatingPanel.CloseTriggerBaseProps
>;
export const CloseTrigger = floatingPanelStyleContext.withContext(
  React.forwardRef<CloseTriggerRef, CloseTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(FloatingPanel.CloseTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "close-trigger",
);
CloseTrigger.displayName = "FloatingPanelCloseTrigger";

export type ContentRef = React.ComponentRef<"div">;
export type ContentProps = Factory.Props<"div", FloatingPanel.ContentBaseProps>;
export const Content = floatingPanelStyleContext.withContext(
  React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(FloatingPanel.Content, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "content",
);
Content.displayName = "FloatingPanelContent";

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", FloatingPanel.ContextProps>;
export const Context = floatingPanelStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(FloatingPanel.Context, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "context",
);
Context.displayName = "FloatingPanelContext";

export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", FloatingPanel.ControlBaseProps>;
export const Control = floatingPanelStyleContext.withContext(
  React.forwardRef<ControlRef, ControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(FloatingPanel.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "control",
);
Control.displayName = "FloatingPanelControl";

export type DragTriggerRef = React.ComponentRef<"div">;
export type DragTriggerProps = Factory.Props<
  "div",
  FloatingPanel.DragTriggerBaseProps
>;
export const DragTrigger = floatingPanelStyleContext.withContext(
  React.forwardRef<DragTriggerRef, DragTriggerProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(FloatingPanel.DragTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "drag-trigger",
);
DragTrigger.displayName = "FloatingPanelDragTrigger";

export type HeaderRef = React.ComponentRef<"div">;
export type HeaderProps = Factory.Props<"div", FloatingPanel.HeaderBaseProps>;
export const Header = floatingPanelStyleContext.withContext(
  React.forwardRef<HeaderRef, HeaderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(FloatingPanel.Header, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "header",
);
Header.displayName = "FloatingPanelHeader";

export type PositionerRef = React.ComponentRef<"div">;
export type PositionerProps = Factory.Props<
  "div",
  FloatingPanel.PositionerBaseProps
>;
export const Positioner = floatingPanelStyleContext.withContext(
  React.forwardRef<PositionerRef, PositionerProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(FloatingPanel.Positioner, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "positioner",
);
Positioner.displayName = "FloatingPanelPositioner";

export type StageTriggerRef = React.ComponentRef<"button">;
export type StageTriggerProps = Factory.Props<
  "button",
  FloatingPanel.StageTriggerBaseProps
>;
export const StageTrigger = floatingPanelStyleContext.withContext(
  React.forwardRef<StageTriggerRef, StageTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, ["stage"]);

    return jsx(FloatingPanel.StageTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "stage-trigger",
);
StageTrigger.displayName = "FloatingPanelStageTrigger";

export type TitleRef = React.ComponentRef<"h6">;
export type TitleProps = Factory.Props<"h6", FloatingPanel.TitleBaseProps>;
export const Title = floatingPanelStyleContext.withContext(
  React.forwardRef<TitleRef, TitleProps>((props, ref) => {
    const [arkProps, h6Props] = splitProps(props, []);

    return jsx(FloatingPanel.Title, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.h6, { ...h6Props, ref }),
    });
  }),
  "title",
);
Title.displayName = "FloatingPanelTitle";

export type TriggerRef = React.ComponentRef<"button">;
export type TriggerProps = Factory.Props<
  "button",
  FloatingPanel.TriggerBaseProps
>;
export const Trigger = floatingPanelStyleContext.withContext(
  React.forwardRef<TriggerRef, TriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(FloatingPanel.Trigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "trigger",
);
Trigger.displayName = "FloatingPanelTrigger";

export type ResizeTriggerRef = React.ComponentRef<"button">;
export type ResizeTriggerProps = Factory.Props<
  "button",
  FloatingPanel.ResizeTriggerBaseProps
>;
export const ResizeTrigger = floatingPanelStyleContext.withContext(
  React.forwardRef<ResizeTriggerRef, ResizeTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, ["axis"]);

    return jsx(FloatingPanel.ResizeTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "resize-trigger",
);
ResizeTrigger.displayName = "FloatingPanelResizeTrigger";
