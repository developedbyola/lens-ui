import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, type Factory } from "../factory";
import { avatar, type AvatarVariantProps } from "../../../.styled/recipes";
import { createStyleContext } from "../../../.styled/jsx";
import {
  Avatar as ArkAvatar,
  useAvatar,
  useAvatarContext,
  type UseAvatarContext,
  type UseAvatarProps,
  type UseAvatarReturn,
} from "@ark-ui/react";

export const use = useAvatar;
export const useContext = useAvatarContext;

export type { UseAvatarContext as UseContext, UseAvatarProps as UseProps, UseAvatarReturn as UseReturn }

const avatarStyleContext = createStyleContext(avatar);

export type ContextRef = React.Component<"div">;
export type ContextProps = Factory.Props<"div", ArkAvatar.ContextProps>;
export const Context = avatarStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(ArkAvatar.Context, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "context",
);
Context.displayName = "AvatarContext";

export type FallbackRef = React.Component<"span">;
export type FallbackProps = Factory.Props<"span", ArkAvatar.FallbackBaseProps>;
export const Fallback = avatarStyleContext.withContext(
  React.forwardRef<FallbackRef, FallbackProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(ArkAvatar.Fallback, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "fallback",
);
Fallback.displayName = "AvatarFallback";

export type ImageRef = React.ComponentRef<"img">;
export type ImageProps = Factory.Props<"img", ArkAvatar.ImageBaseProps>;
export const Image = avatarStyleContext.withContext(
  React.forwardRef<ImageRef, ImageProps>((props, ref) => {
    const [arkProps, imgProps] = splitProps(props, []);

    return jsx(ArkAvatar.Image, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.img, { ...imgProps, ref }),
    });
  }),
  "image",
);
Image.displayName = "AvatarImage";

export type ProviderRef = React.ComponentRef<"div">;
export type ProviderProps = Factory.Props<
  "div",
  ArkAvatar.RootProviderProps & AvatarVariantProps
>;
export const Provider = avatarStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["value"]);

    return jsx(ArkAvatar.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "AvatarProvider";

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<
  "div",
  ArkAvatar.RootBaseProps & AvatarVariantProps
>;
export const Root = avatarStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["ids", "onStatusChange"]);

    return jsx(ArkAvatar.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "AvatarRoot";
