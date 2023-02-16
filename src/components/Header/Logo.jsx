import {Box} from '@mui/material';
import React from 'react';
import Logo from '../Header/logo.svg';
const logo = () => {
   return (
      <>
         <Box
            sx={{
               width: {xs: '60%', md: '30%'},
               display: 'flex',
               justifyContent: {xs: 'flex', md: 'flex-start'},
            }}
         >
            <Box
               sx={{
                  width: {xs: '100%', sm: '50%'},
                  paddingRight: {xs: '5px'},
               }}
            >
               <img style={{marginTop: '0.3rem', width: '10rem'}} src={Logo} />
            </Box>
         </Box>
      </>
   );
};

export default logo;
