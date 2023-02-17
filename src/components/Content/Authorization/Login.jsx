import {Box, Button, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {login} from '../../../helpers/read';

const Login = () => {
   const {user, setUser} = useGlobalContext();
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [userNameDirty, setUserNameDirty] = useState(false);
   const [userNameError, setUserNameError] = useState(
      'Поле не может быть пустым!'
   );
   const [passwordDirty, setPasswordDity] = useState(false);
   const [passwordError, setPasswordError] = useState(
      'Пароль не может быть пустым!'
   );
   const [formValid, SetFormValid] = useState(false);

   let navigate = useNavigate();

   const handleSubmit = async () => {
      console.clear();
      console.group('Login handleSubmit group');
      let formData = new FormData();
      formData.append('username', userName);
      formData.append('password', password);
      let currUser = await login(formData);
      console.log('currUser', currUser);
      setUser(currUser);
      navigate('/');
   };

   useEffect(() => {
      console.log('current user (useeffect)', user);
   }, [user]);

   useEffect(() => {
      if (userNameError || passwordError) {
         SetFormValid(false);
      } else {
         SetFormValid(true);
      }
   }, [userNameError, passwordError]);
   const userNameHandler = e => {
      setUserName(e.target.value);
      if (e.target.value.length < 2) {
         setUserNameError('Некорректное имя!');
      } else {
         setUserNameError('');
      }
   };
   const passworHandler = e => {
      setPassword(e.target.value);

      if (e.target.value.length < 4 || e.target.value.length > 16) {
         setPasswordError('Пароль должен быть от 4 до 16 символов!');
      } else {
         setPasswordError('');
      }
   };
   const blureHandler = e => {
      switch (e.target.name) {
         case 'userName':
            setUserNameDirty(true);
            break;

         case 'password':
            setPasswordDity(true);
            break;
      }
   };
   return (
      <div>
         <Box sx={{minHeight: '60vh'}}>
            <center>
               <h1>Авторизация</h1>
            </center>
            <center>
               <input
                  className="inp-place"
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={e => userNameHandler(e)}
                  onBlur={e => blureHandler(e)}
                  placeholder="Юзернэйм*"
                  style={{
                     backgroundColor: '#AA6800',
                     color: 'white',
                     paddingLeft: '20px',
                     borderStyle: 'none',
                     borderRadius: '7px',
                  }}
               />
            </center>
            <center>
               <input
                  className="inp-place"
                  type="text"
                  placeholder="Пароль*"
                  name="password"
                  value={password}
                  onChange={e => passworHandler(e)}
                  onBlur={e => blureHandler(e)}
                  style={{
                     backgroundColor: '#AA6800',
                     color: 'white',
                     paddingLeft: '20px',
                     borderStyle: 'none',
                     borderRadius: '7px',
                  }}
               />
            </center>
            <center>
               {userNameDirty && userNameError && (
                  <div
                     style={{
                        color: 'red',
                        fontSize: '0.8rem',
                     }}
                  >
                     {userNameError}
                  </div>
               )}
               {passwordDirty && passwordError && (
                  <div
                     style={{
                        color: 'red',
                        fontSize: '0.8rem',
                     }}
                  >
                     {passwordError}
                  </div>
               )}
               <Button
                  disabled={!formValid}
                  style={{
                     marginTop: '10px',
                     backgroundColor: '#474747',
                     borderStyle: 'none',
                     borderRadius: '7px',
                     width: '250px',
                     height: '35px',
                     color: '#fffdfd',
                  }}
                  onClick={handleSubmit}
               >
                  Войти
               </Button>
            </center>
            <center>
               <RouterLink to="/auth">
                  <Typography sx={{fontSize: '0.8rem'}}>
                     Еще нет аккаунта? Зарегистрироваться
                  </Typography>
               </RouterLink>
            </center>
         </Box>
      </div>
   );
};

export default Login;
