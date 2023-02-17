import {Box} from '@mui/system';
import React from 'react';
import BgImage from '../Footer/fire-ext-orange.svg';
import Logo from '../Footer/makers-logo-white.svg';
import firePng from '../Footer/firefighters.svg';
import {Button, Container, Grid, List, ListItem} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {testLogin, testRegister} from '../../helpers/test';
import {formData} from '../../helpers/test';
import {getTags} from '../../helpers/read';
import {getFromStorage} from '../../helpers/read';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import './Footer.css';
import {clearStorage} from '../../helpers/delete';
const Footer = () => {
   const {user, setUser, tagsArr} = useGlobalContext();
   const navigate = useNavigate();
   function handleLogOut() {
      clearStorage();
      navigate('/login');
      setUser('');
   }
   return (
      <Box
         className="footer"
         sx={{
            position: 'relative',
            display: 'flex',
            minHeight: '250px',
            width: '100vw',
            flexDirection: 'column',
            backgroundColor: 'rgb(71 71 71)',
            backgroundImage: `${BgImage}`,
            color: 'white',
            marginTop: '2rem',
         }}
      >
         <img
            src={BgImage}
            style={{
               position: 'absolute',
               bottom: '0',
               left: '0',
            }}
         />
         <Container maxWidth="lg">
            <Grid
               container
               sx={{
                  margin: 'auto',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  fontSize: '0.8rem',
               }}
            >
               <Grid
                  item
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: '2rem',
                  }}
               >
                  <Box
                     className="footer-logo"
                     sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.1px',
                     }}
                  >
                     <img style={{width: '150px'}} src={Logo} />
                     <img style={{width: '80px'}} src={firePng} />
                  </Box>
                  <Button
                     variant="outlined"
                     sx={{
                        color: ' #ffffff',
                        borderColor: 'white',
                        '&:hover': {
                           backgroundColor: 'rgba(170, 104, 0, 1)',
                           borderColor: 'rgba(170, 104, 0, 1)',
                           // color: '#3c52b2',
                        },
                        // border: '1px solid white',
                        // borderRadius: '8px',
                     }}
                     onClick={() => {
                        navigate('/ask-question');
                     }}
                  >
                     Задать вопрос
                  </Button>
                  <Button
                     variant="outlined"
                     sx={{
                        color: ' #ffffff',
                        borderColor: 'red',
                     }}
                     onClick={async () => {
                        console.clear();
                        console.group('Test button group');
                        console.log('user', user);
                        console.log(tagsArr);
                        // testRegister(formData);
                        // await getTags();
                        // await testLogin();
                        // console.log('Tokens from storage:', getFromStorage());
                        console.groupEnd();
                     }}
                  >
                     TEST
                  </Button>
               </Grid>
               <Grid item>
                  <List>
                     <h4>Навигация</h4>
                     <Link to="/">
                        <ListItem disableGutters>Вопросы</ListItem>
                     </Link>
                     <ListItem disableGutters>
                        <Link to="/tags">Тэги</Link>
                     </ListItem>
                     <ListItem disableGutters>
                        <Link to="/users">Пользователи</Link>
                     </ListItem>
                     <ListItem disableGutters>
                        <Link to="/groups">Группы</Link>
                     </ListItem>
                  </List>
               </Grid>
               <Grid item>
                  <List>
                     <h4>Makers</h4>
                     <ListItem disableGutters>Главный сайт Makers</ListItem>
                     <ListItem disableGutters>О компании</ListItem>
                  </List>
               </Grid>
               <Grid>
                  <List>
                     <h4>Контакты Makers</h4>
                     <ListItem disableGutters>Телеграм</ListItem>
                     <ListItem disableGutters>Инстаграм</ListItem>
                     <ListItem disableGutters>Электронная почта</ListItem>
                  </List>
               </Grid>
               <Grid>
                  <List>
                     <h4>Ваш аккаунт</h4>
                     {user ? (
                        <>
                           <ListItem disableGutters>Профиль</ListItem>
                           <ListItem disableGutters>Активность</ListItem>
                           <ListItem disableGutters>Закладки</ListItem>
                           <ListItem
                              onClick={handleLogOut}
                              sx={{cursor: 'pointer'}}
                              disableGutters
                           >
                              Выйти из аккаунта
                           </ListItem>
                        </>
                     ) : (
                        <>
                           <Link to="/login">
                              <ListItem disableGutters>Войти</ListItem>
                           </Link>
                           <Link to="/auth">
                              <ListItem disableGutters>
                                 Зарегистрироваться
                              </ListItem>
                           </Link>
                        </>
                     )}
                  </List>
               </Grid>
            </Grid>
            <Box
               sx={{
                  textAlign: 'center',
                  fontSize: '0.7rem',
                  padding: '1rem',
               }}
            >
               @ 2023 - проект создан командами из PY24: Николай, Артур,
               Александр JS28: Бекмырза, Эрнас, Ибраим
            </Box>
         </Container>
      </Box>
   );
};

export default Footer;
