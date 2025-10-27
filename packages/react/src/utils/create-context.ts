import React from "react";

const getErrorMessage = (hook: string, provider: string) =>
  `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}.`;

type CreateContextProps<T extends unknown = unknown> = {
  name?: string;
  strict?: boolean;
  defaultValue?: T;
  hookName?: string;
  providerName?: string;
  errorMessage?: string;
};

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

export const createContext = <T>(props?: CreateContextProps<T>) => {
  const {
    name,
    defaultValue,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage = getErrorMessage(hookName, providerName),
  } = props || {};

  const Context = React.createContext<T | undefined>(defaultValue);
  Context.displayName = name;

  const useContext = () => {
    const context = React.useContext(Context);

    if (!context && strict) {
      const err = new Error(errorMessage);
      err.name = "ContextError";
      Error.captureStackTrace?.(err, useContext);
      throw err;
    }

    return context;
  };

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
};
