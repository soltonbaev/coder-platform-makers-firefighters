import React, {createContext, useContext, useEffect, useState} from 'react';
import {setToStorage, tokenRefresh} from '../helpers/create';
import {getFromStorage, getUserProfile} from '../helpers/read';

export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({children}) => {
   const [user, setUser] = useState('');
   const value = {
      user,
      setUser,
   };

   const checkAuth = async () => {
      let token = getFromStorage('token');
      let uid = getFromStorage('uid');
      try {
         let res = await tokenRefresh(token.refresh);

         setToStorage('token', {
            refresh: token.refresh,
            access: res.data.access,
         });
         let user = await getUserProfile(uid);
         setUser(user);
         // user.curent = user;
      } catch (error) {
         console.log(error);
         //  setError(error);
      }
   };

   useEffect(() => {
      if (localStorage.getItem('token')) {
         checkAuth();
      }
   }, []);

   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );
};

export default GlobalContextProvider;
