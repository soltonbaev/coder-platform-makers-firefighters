import React from 'react';

export const globalContext = createContext();
export const useGlobalContext = () => useContext(useGlobalContext);

const GlobalContextProvider = ({children}) => {
   return <globalContext.Provider>{children}</globalContext.Provider>;
};

export default GlobalContextProvider;
