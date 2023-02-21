import {Avatar, Box, Grid} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getUserProfile} from '../../../helpers/read';

const RenderQuestion = ({
   votesCount,
   answersCount,
   viewsCount,
   question,
   tags,
   username,
   isAnswered,
   slug,
   setShowSearch,
   showSearch,
   setSearchInp,
}) => {
   const [questionObj, setQuestionObj] = useState('');
   //  const [uName, setUName] = useState('');
   //  const [userPic, setUserPic] = useState('');

   useEffect(() => {
      getUserProfile(username).then(res => {
         console.log('username', res.username);
         //  setUName(res.username);
         //  setUserPic(res.user_photo);
         setQuestionObj(res);
      });
   }, []);

   return (
      <Grid
         container
         sx={{
            gap: '1rem',
            alignItems: 'center',
            padding: '1rem',
            borderStyle: 'none',
            borderBottom: '1px solid #D9D9D9',
         }}
      >
         <Grid
            item
            container
            direction="row"
            sx={{fontSize: '0.7rem', gap: '1rem'}}
         >
            <Grid item>{votesCount} голосов</Grid>
            <Grid item>{answersCount} ответ</Grid>
            <Grid item>{viewsCount} просмотров</Grid>
         </Grid>
         <Grid item container sx={{gap: '1rem'}}>
            <Grid item>
               <Link
                  to={`/questions/${slug}`}
                  state={questionObj}
                  onClick={() => {
                     setShowSearch && setShowSearch(false);
                     setSearchInp && setSearchInp('');
                  }}
               >
                  {question}
               </Link>
            </Grid>

            <Grid
               item
               container
               direction="row"
               sx={{justifyContent: 'space-between'}}
            >
               <Grid
                  item
                  sx={{display: 'flex', fontSize: '0.8rem', gap: '0.5rem'}}
               >
                  {tags?.map(tag => {
                     return (
                        <Grid
                           key={tag}
                           item
                           sx={{
                              border: '1px solid #AA6800',
                              padding: '0.1rem 0.3rem',
                              borderRadius: '0.3rem',
                              color: '#AA6800',
                           }}
                        >
                           {tag}
                        </Grid>
                     );
                  })}
               </Grid>
               <Grid
                  item
                  sx={{display: 'flex', gap: '0.5rem', fontSize: '0.8rem'}}
               >
                  <Avatar
                     src={questionObj.user_photo}
                     alt={questionObj.username}
                     sx={{width: '1rem', height: '1rem'}}
                  ></Avatar>

                  {questionObj.username}
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default RenderQuestion;
