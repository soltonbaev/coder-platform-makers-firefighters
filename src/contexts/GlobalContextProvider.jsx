import axios from 'axios';
import React, {
   createContext,
   useContext,
   useEffect,
   useReducer,
   useState,
} from 'react';
import {AddTags} from '../components/Content/QA/AddTags';
import {setToStorage, tokenRefresh} from '../helpers/create';
import {getFromStorage, getUserProfile} from '../helpers/read';
import {getTags} from '../helpers/read';
// import BASE_URL from "../helpers/globals";
import {useNavigate} from 'react-router-dom';
import {USER_LIST} from '../helpers/globals';
export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);


const GlobalContextProvider = ({ children }) => {
  const BASE_URL = "http://104.199.234.60/api/v1";

  const [error, setError] = useState("");
  const [user, setUser] = useState("");


   function setToast(showToast, errorType, toastMessage) {
      setShowToast(showToast);
      setErrorType(errorType);
      setToastMessage(toastMessage);
   }

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
         setToast(
            true,
            'success',
            `Пользователь найден. Добро пожаловать ${user.username}`
         );
         // user.curent = user;
      } catch (error) {
         setToast(true, 'error', error.message);
         // console.log(error);
         //  setError(error);
      }
   };

   const getUsers = async () => {
      let {data} = await axios(USER_LIST);
      dispatch({
         type: 'GET_USERS',
         payload: data,
      });
   };

   useEffect(() => {
      checkAuth();
   }, []);


   const value = {
   
      user,
      setUser,


      showToast,
      setShowToast,
      toastMessage,
      setToastMessage,
      errorType,
      setErrorType,
      redirect,
      setRedirect,
      setToast,
      checkAuth,
   };


   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );
};

export default GlobalContextProvider;
