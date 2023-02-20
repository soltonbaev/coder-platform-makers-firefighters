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

const INIT_STATE = {
   users: [],
};

function reducer(state = INIT_STATE, action) {
   switch (action.type) {
      case 'GET_USERS':
         return {
            ...state,
            users: action.payload.results,
            //   pages: Math.ceil(action.payload.count / 6),
         };
   }
}
const GlobalContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, INIT_STATE);
   const [user, setUser] = useState('');
   const [error, setError] = useState('');

   const navigate = useNavigate();
   //error handling
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   const [errorType, setErrorType] = useState('');

   const [redirect, setRedirect] = useState('');

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

   const value = {
      usersList: state.users,
      user,
      setUser,

      getUsers,
      showToast,
      setShowToast,
      toastMessage,
      setToastMessage,
      errorType,
      setErrorType,
      redirect,
      setRedirect,
      setToast,
   };

   return (
      <globalContext.Provider value={value}>{children}</globalContext.Provider>
   );
};

export default GlobalContextProvider;
