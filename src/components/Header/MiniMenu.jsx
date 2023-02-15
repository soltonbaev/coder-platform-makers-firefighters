import {Grid} from '@mui/material';
import {Container} from '@mui/system';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './MiniMenu.css';

const MiniMenu = () => {
   return (
      <Container>
         <Grid
            container
            sx={{
               gap: '1rem',
               textDecoration: 'none',
               margin: 'auto',
               justifyContent: 'center',
               height: '1rem',
               padding: '1rem',
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
