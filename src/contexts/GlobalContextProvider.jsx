import React, { createContext, useContext, useState } from "react";

export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

<<<<<<< HEAD
const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const value = {
    user,
    setUser,
  };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
=======

const GlobalContextProvider = ({children}) => {
   const [user, setUser] = useState('');
   const value = {
      user,
      setUser,
   };
   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );

>>>>>>> master
};

export default GlobalContextProvider;
