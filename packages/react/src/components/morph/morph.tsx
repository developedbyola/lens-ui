import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { Distributive } from "../../types";

export namespace Morph {
  export type Dict = {};

  export type Ref<E extends React.ElementType> = {
    ref?: React.Ref<React.ComponentRef<E>>;
  };

  export type BaseProps = {
    asChild?: boolean;
    as?: React.ElementType;
  };

  export type Props<
    E extends React.ElementType,
    P extends Dict = {},
  > = Distributive.Merge<
    React.ComponentPropsWithoutRef<E>,
    BaseProps & Ref<E> & P
  >;

  export type Component<E extends React.ElementType> = {
    (props: Props<E>): React.ReactElement | null;
    displayName?: string;
  };
}

export const morph = <E extends React.ElementType>(element: E) => {
  const _raw: Morph.Component<E> = (props) => {
    const [{ ref, as: Component = element, asChild, children }, morphProps] =
      splitProps(props, ["value", "children", "ref", "as", "asChild"]);

    if (asChild) {
      if (!React.isValidElement(children)) {
        return jsx(Component, { ...morphProps, ref, children });
      }
      return React.cloneElement(children, { ref, ...morphProps });
    }

    return jsx(Component, { ...morphProps, ref, children });
  };

  _raw.displayName =
    typeof element === "string"
      ? element
      : (element as React.ComponentType).displayName ||
        (element as React.ComponentType).name ||
        "MorphedComponent";

  return _raw;
};
