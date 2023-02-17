import React, {createContext, useContext, useEffect, useState} from 'react';
import {AddTags} from '../components/Content/QA/AddTags';
import {setToStorage, tokenRefresh} from '../helpers/create';
import {getFromStorage, getUserProfile} from '../helpers/read';
import {getTags} from '../helpers/read';
export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({children}) => {
   const [user, setUser] = useState('');
   const [tagsArr, setTagsArr] = useState('');

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
      getTags().then(res => {
         console.log('then res', res);
         setTagsArr(res);
      });
   }, []);

   const value = {
      user,
      setUser,
      tagsArr,
   };

   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );
};

export default GlobalContextProvider;
