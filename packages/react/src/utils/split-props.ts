export const splitProps = <T extends object, K extends Array<keyof T>>(
  props: T,
  keys: K,
): [Pick<T, K[number]>, Omit<T, K[number]>] => {
  const included: Partial<T> = {};
  const excluded: Partial<T> = {};

  (Object.keys(props) as Array<keyof T>).forEach((key) => {
    if (keys.includes(key)) {
      included[key] = props[key];
    } else {
      excluded[key] = props[key];
    }
  });

  return [included as Pick<T, K[number]>, excluded as Omit<T, K[number]>];
};
