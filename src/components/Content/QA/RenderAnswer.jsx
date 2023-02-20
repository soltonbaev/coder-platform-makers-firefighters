import {Avatar, Grid} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {getUserProfile} from '../../../helpers/read';
import RenderMarkdown from './RenderMarkdown';

const RenderAnswer = ({
   author,
   body,
   comments,
   createdAt,
   updatedAt,
   dislikes,
   likes,
}) => {
   const [userProfile, setUserProfile] = useState('');
   useEffect(() => {
      getUserProfile(author).then(res => setUserProfile(res));
   }, []);
   return (
      <Grid
         className="answer"
         container
         direction="column"
         sx={{margin: '2rem 0'}}
      >
         <Grid
            className="user-info"
            container
            direction="row"
            sx={{gap: '0.3rem'}}
         >
            <Grid item>
               <Avatar src={userProfile.user_photo}></Avatar>
            </Grid>
            <Grid item direction="column" sx={{fontSize: '0.7rem'}}>
               <Grid item sx={{color: '#AA6800', fontWeight: 'bold'}}>
                  {userProfile.username}
               </Grid>
               <Grid item>задан {createdAt}</Grid>
               <Grid item>рейтинг: {userProfile.average_rating}</Grid>
            </Grid>
         </Grid>
         <Grid className="answer_body" item>
            <RenderMarkdown markdown={body}></RenderMarkdown>
         </Grid>
         <Grid item>
            <span
               style={{
                  borderRadius: '0.3rem',
                  padding: '0.1rem 0.2rem',
                  border: '1px solid green',
                  marginRight: '0.5rem',
                  fontSize: '0.7rem',
               }}
            >
               likes: {likes}
            </span>
            <span
               style={{
                  borderRadius: '0.3rem',
                  padding: '0.1rem 0.2rem',
                  border: '1px solid red',
                  fontSize: '0.7rem',
               }}
            >
               dislikes: {dislikes}
            </span>
         </Grid>
      </Grid>
   );
};

export default RenderAnswer;
