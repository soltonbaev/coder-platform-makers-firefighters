import {Grid, Typography} from '@mui/material';
import React from 'react';

const RenderTag = ({title, description}) => {
   return (
      <Grid
         item
         container
         direction="column"
         sx={{
            borderRadius: '0.3rem',
            // border: '1px solid grey',
            backgroundColor: '#D9D9D9',
            // margin: '1rem',
            padding: '0.5rem',
            width: '20%',
         }}
      >
         <Grid item>
            <span
               style={{
                  borderRadius: '0.3rem',
                  color: 'white',
                  backgroundColor: '#AA6800',
                  padding: '0.1rem 0.3rem',
               }}
            >
               {title}
            </span>
         </Grid>
         <Grid item sx={{margin: '0.5rem 0', fontSize: '0.8rem'}}>
            {description}
         </Grid>
         <Grid
            item
            sx={{color: '#AA6800', fontSize: '0.7rem', margin: '0.5rem 0'}}
         >
            Всего задано 250 вопросов
         </Grid>
      </Grid>
   );
};

export default RenderTag;
