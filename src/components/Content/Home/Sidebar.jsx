import React from 'react';
import {Box, Container} from '@mui/material';
import './SideBar.css';
const SideBar = () => {
   return (
      <div>
         <Box className="container">
            <div className="filter">Фильтровать по тэгам</div>
            <input className="inp" placeholder="поиск тэгов" />
            <span className="preventSearch">prevent search</span>
         </Box>
      </div>
   );
};

export default SideBar;
