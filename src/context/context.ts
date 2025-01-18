import { createContext } from "react";

export interface IContext {
    locale: string;
    setLocale: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultValue: IContext = {
    locale: "global",
    setLocale: () => { },
};

export const Context = createContext<IContext>(defaultValue);