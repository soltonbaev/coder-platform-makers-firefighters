import React from 'react';
import {Box, Container, Grid} from '@mui/material';
import './SideBar.css';
const SideBar = () => {
   return (
      <Grid
         container
         sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '0.3rem',
            backgroundColor: '#d9d9d9',
            minHeight: '50vh',
         }}
      >
         <Grid item>Фильтровать по тэгам</Grid>
         <Grid item>
            <input className="inp" placeholder="поиск тэгов" />
         </Grid>

         <span className="preventSearch">prevent search</span>
      </Grid>
   );
};

export default SideBar;
