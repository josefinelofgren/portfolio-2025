import { JSX, useState } from "react";
import { Context } from "./context";

export interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: Props) => {

  const [locale, setLocale] = useState("global");

  return (
    <Context.Provider
      value={{
        locale,
        setLocale,
      }
      }
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;