import {Box} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../Header/logo.svg';
const Logo = () => {
   const navigate = useNavigate();
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
               <img
                  style={{
                     marginTop: '0.3rem',
                     width: '10rem',
                     cursor: 'pointer',
                  }}
                  src={logo}
                  onClick={() => {
                     navigate('/');
                  }}
               />
            </Box>
         </Box>
      </>
   );
};

export default Logo;
