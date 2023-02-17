import {Avatar, Box, Link} from '@mui/material';
import Image from '../Header/image.svg';
import React from 'react';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import {useNavigate} from 'react-router-dom';

const RightSideIcons = () => {
   const navigate = useNavigate();
   const {user} = useGlobalContext();
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            width: '30%',
            justifyContent: 'flex-end',
            textAlign: 'center',
         }}
      >
         {user ? (
            <Avatar
               alt={`${user.name}${user.last_name}`}
               src={user.user_photo}
               sx={{
                  cursor: 'pointer',
                  fill: 'black',
                  height: '2.5rem',
                  width: '2.5rem',
                  marginRight: '10px',
               }}
               onClick={() => {
                  navigate('/my-profile');
               }}
            />
         ) : (
            <Avatar
               sx={{
                  cursor: 'pointer',
                  fill: 'black',
                  height: '2rem',
                  width: '2rem',
                  marginRight: '10px',
               }}
               onClick={() => {
                  navigate('/auth');
               }}
            />
         )}
         <Link>
            <img
               src={Image}
               style={{
                  height: '2rem',
                  width: '2rem',
                  marginTop: '5px',
               }}
            />
         </Link>
      </Box>
   );
};

export default RightSideIcons;
