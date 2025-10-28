import React from "react";
import { JSX } from "react/jsx-runtime";
import { morph, type Morph } from "../morph";
import type { Distributive } from "../../types";
import { type HTMLStyledProps, styled } from "../../../.styled/jsx";

export namespace Factory {

  export type Ref<E extends keyof JSX.IntrinsicElements> = React.ComponentRef<E>

  export type Dict = {};

  export type Props<
    E extends keyof JSX.IntrinsicElements,
    P extends Dict = {},
  > = Distributive.Merge<HTMLStyledProps<E>, Morph.BaseProps & P>;

  export type Component<E extends keyof JSX.IntrinsicElements> = {
    (props: Props<E>): React.ReactElement | null;
    displayName?: string;
  };

  export type Elements = {
    [E in keyof JSX.IntrinsicElements]: Component<E>;
  };
}

const jsxFactory = (): Factory.Elements => {
  const cache = new Map();
  const storeElement = (element: keyof JSX.IntrinsicElements) => {
    if (!cache.has(element)) {
      const Component = styled(morph(element));
      Component.displayName =
        typeof element === "string"
          ? element
          : (element as React.ComponentType).displayName ||
          (element as React.ComponentType).name ||
          "Component";
      cache.set(element, Component);
    }
    return cache.get(element);
  };
  return new Proxy({} as Factory.Elements, {
    apply: (_target, _args, _arr) => {
      return storeElement(_arr[0]);
    },
    get: (_, element: keyof JSX.IntrinsicElements) => {
      return storeElement(element);
    },
  });
};

export const factory = jsxFactory();
