import {Box, Grid} from '@mui/material';
import React from 'react';

const RenderQuestion = ({
   votesCount,
   answersCount,
   viewsCount,
   question,
   tags,
   username,
   isAnswered,
}) => {
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
            <Grid item>{question}</Grid>

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
                  {tags.map(tag => {
                     return <Grid item>{tag}</Grid>;
                  })}
               </Grid>
               <Grid item sx={{fontSize: '0.8rem'}}>
                  {username}
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default RenderQuestion;
