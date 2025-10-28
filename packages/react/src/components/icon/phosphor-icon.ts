import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { Factory, factory } from "../factory";
import * as PhosphorIcons from "@phosphor-icons/react";

type PhosphorIconBaseProps = {
  alt?: string;
  mirrored?: boolean;
  size?: number | string;
  name: keyof typeof PhosphorIcons;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
};

export const useGetIcon = (
  name: PhosphorIconBaseProps["name"],
): React.ComponentType<PhosphorIconProps> => {
  return React.useMemo(() => {
    return PhosphorIcons[name] as any;
  }, [name]);
};

export type PhosphorIconRef = React.ComponentRef<"svg">;
export type PhosphorIconProps = Factory.Props<"svg", PhosphorIconBaseProps>;
export const PhosphorIcon = React.forwardRef<
  PhosphorIconRef,
  PhosphorIconProps
>((props, ref) => {
  const { name, ...restProps } = props;
  const [phosphorIconProps, svgProps] = splitProps(restProps, [
    "weight",
    "size",
    "mirrored",
    "alt",
  ]);

  const Component = useGetIcon(props.name);

  return jsx(factory.svg, {
    ...svgProps,
    ref,
    asChild: true,
    children: jsx(Component, { ...phosphorIconProps }),
  });
});
PhosphorIcon.displayName = "PhosphorIcon";
