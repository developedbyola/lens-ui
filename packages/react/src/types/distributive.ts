export namespace Distributive {
  export type Omit<T, K extends keyof object> = T extends unknown
    ? globalThis.Omit<T, K>
    : never;

  export type Merge<T, O extends object> = T extends unknown
    ? globalThis.Omit<T, keyof O> & O
    : never;
}
