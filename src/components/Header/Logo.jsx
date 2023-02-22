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
               width: {xs: '8rem', md: '10rem'},
               // width: '5rem',
               display: 'flex',
               justifyContent: 'center',
            }}
         >
            <img
               style={{
                  width: '100%',
                  marginTop: '0.3rem',
                  objectFit: 'contain',
                  cursor: 'pointer',
               }}
               src={logo}
               onClick={() => {
                  navigate('/');
               }}
            />
         </Box>
      </>
   );
};

export default Logo;
