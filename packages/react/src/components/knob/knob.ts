import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { AngleSlider } from "@ark-ui/react";
import { factory, Factory } from "../factory";

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  AngleSlider.RootProviderBaseProps
>;
export const Provider = React.forwardRef<ProviderRef, ProviderProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(AngleSlider.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
);
Provider.displayName = "AngleSliderProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<"div", AngleSlider.RootBaseProps>;
export const Root = React.forwardRef<RootRef, RootProps>((props, ref) => {
  const [arkProps, divProps] = splitProps(props, [
    "id",
    "ids",
    "name",
    "step",
    "value",
    "invalid",
    "disabled",
    "readOnly",
    "defaultValue",
    "onValueChange",
    "onValueChangeEnd",
  ]);

  return jsx(AngleSlider.Root, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.div, { ...divProps, ref }),
  });
});
Root.displayName = "AngleSliderRoot";

export type ContextRef = React.ComponentRef<"div">;
export type ContextProps = Factory.Props<"div", AngleSlider.ContextProps>;
export const Context = React.forwardRef<ContextRef, ContextProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(AngleSlider.Context, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
);

Context.displayName = "AngleSliderContext";

export type ControlRef = React.ComponentRef<"div">;
export type ControlProps = Factory.Props<"div", AngleSlider.ControlBaseProps>;
export const Control = React.forwardRef<ControlRef, ControlProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(AngleSlider.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
);

Control.displayName = "AngleSliderControl";

export type HiddenInputRef = React.ComponentRef<"div">;
export type HiddenInputProps = Factory.Props<
  "div",
  AngleSlider.HiddenInputBaseProps
>;
export const HiddenInput = React.forwardRef<HiddenInputRef, HiddenInputProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(AngleSlider.HiddenInput, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
);
HiddenInput.displayName = "AngleSliderHiddenInput";

export type LabelRef = React.ComponentRef<"label">;
export type LabelProps = Factory.Props<"label", AngleSlider.LabelBaseProps>;
export const Label = React.forwardRef<LabelRef, LabelProps>((props, ref) => {
  const [arkProps, labelProps] = splitProps(props, []);

  return jsx(AngleSlider.Label, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.label, { ...labelProps, ref }),
  });
});
Label.displayName = "AngleSliderLabel";

export type MarkerRef = React.ComponentRef<"div">;
export type MarkerProps = Factory.Props<"div", AngleSlider.MarkerBaseProps>;
export const Marker = React.forwardRef<MarkerRef, MarkerProps>((props, ref) => {
  const [arkProps, divProps] = splitProps(props, ["value"]);

  return jsx(AngleSlider.Marker, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.div, { ...divProps, ref }),
  });
});
Marker.displayName = "AngleSliderMarker";

export type MarkerGroupRef = React.ComponentRef<"div">;
export type MarkerGroupProps = Factory.Props<
  "div",
  AngleSlider.MarkerGroupBaseProps
>;
export const MarkerGroup = React.forwardRef<MarkerGroupRef, MarkerGroupProps>(
  (props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(AngleSlider.MarkerGroup, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  },
);
MarkerGroup.displayName = "AngleSliderMarkerGroup";

export type ThumbRef = React.ComponentRef<"div">;
export type ThumbProps = Factory.Props<"div", AngleSlider.ThumbBaseProps>;
export const Thumb = React.forwardRef<ThumbRef, ThumbProps>((props, ref) => {
  const [arkProps, divProps] = splitProps(props, []);

  return jsx(AngleSlider.Thumb, {
    ...arkProps,
    asChild: true,
    children: jsx(factory.div, { ...divProps, ref }),
  });
});
Thumb.displayName = "AngleSliderThumb";

export type ValueTextRef = React.ComponentRef<"span">;
export type ValueTextProps = Factory.Props<
  "span",
  AngleSlider.ValueTextBaseProps
>;
export const ValueText = React.forwardRef<ValueTextRef, ValueTextProps>(
  (props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(AngleSlider.ValueText, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  },
);
ValueText.displayName = "AngleSliderValueText";
