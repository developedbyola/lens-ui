import type React from "react";

export const composeRefs = <T>(...refs: (React.Ref<T> | undefined)[]) => {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref != null) {
        (ref as React.RefObject<T | null>).current = node;
      }
    }
  };
};
