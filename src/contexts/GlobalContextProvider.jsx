import React, { createContext, useContext } from "react";

export const globalContext = createContext();
export const useGlobalContext = () => useContext(useGlobalContext);

const GlobalContextProvider = ({ children }) => {
  return (
    <globalContext.Provider value={null}>{children}</globalContext.Provider>
  );
};

export default GlobalContextProvider;
