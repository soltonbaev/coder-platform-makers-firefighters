import {Box} from '@mui/system';
import React from 'react';
import BgImage from '../Footer/fire-ext-orange.svg';
import Logo from '../Footer/makers-logo-white.svg';
import firePng from '../Footer/firefighters.svg';
import {Button, Container, Grid, Link, List, ListItem} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {testRegister} from '../../helpers/test';
import {formData} from '../../helpers/test';

const Footer = () => {
   const navigate = useNavigate();
   return (
      <Box
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
                     onClick={() => {
                        testRegister(formData);
                     }}
                  >
                     TEST
                  </Button>
               </Grid>
               <Grid item>
                  <List>
                     <h4>Навигация</h4>
                     <ListItem disableGutters>Вопросы</ListItem>
                     <ListItem disableGutters>Тэги</ListItem>
                     <ListItem disableGutters>Пользователи</ListItem>
                     <ListItem disableGutters>Группы</ListItem>
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
                     <ListItem disableGutters>Профиль</ListItem>
                     <ListItem disableGutters>Активность</ListItem>
                     <ListItem disableGutters>Закладки</ListItem>
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
