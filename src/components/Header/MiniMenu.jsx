import {Grid} from '@mui/material';
import {Container} from '@mui/system';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './MiniMenu.css';

const MiniMenu = () => {
   return (
      <Container sx={{height: '3rem'}}>
         <Grid
            container
            sx={{
               gap: '1rem',
               textDecoration: 'none',
               // margin: "auto",
               justifyContent: 'center',

               alignItems: 'center',

               padding: '1rem 0',
            }}
         >
            <Grid className="mini-menu">
               <NavLink to="/">Вопросы</NavLink>
            </Grid>
            <Grid className="mini-menu">
               <NavLink to="/tags">Теги</NavLink>
            </Grid>
            <Grid className="mini-menu">
               <NavLink to="/users">Пользователи</NavLink>
            </Grid>
            <Grid className="mini-menu">
               <NavLink to="/groups">Группы</NavLink>
            </Grid>
         </Grid>
      </Container>
   );
};

export default MiniMenu;
