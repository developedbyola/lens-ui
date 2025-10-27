type MergeableProps = {
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
};

export type MergeProps<T, U> = Omit<T, keyof U> & U;

// Utility type: merge all objects left-to-right
type MergePropsReturn<T extends MergeableProps[]> = T extends [
  infer First,
  ...infer Rest,
]
  ? First & (Rest extends MergeableProps[] ? MergePropsReturn<Rest> : {})
  : {};

export const mergeProps = <T extends MergeableProps[]>(
  ...sources: T
): MergePropsReturn<T> => {
  return sources.reduce((acc, props) => {
    if (!props) return acc;

    const merged = { ...acc, ...props };

    // Merge className
    if (acc.className && props.className) {
      merged.className = `${acc.className} ${props.className}`;
    }

    // Merge styles
    if (acc.style && props.style) {
      merged.style = { ...acc.style, ...props.style };
    }

    return merged;
  }, {} as MergeableProps) as MergePropsReturn<T>;
};
