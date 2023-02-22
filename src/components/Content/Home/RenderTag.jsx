import {Grid, Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

const RenderTag = ({title, slug, description}) => {
   return (
      <Grid
         item
         container
         direction="column"
         sm={3}
         md={3}
         lg={2}
         sx={{
            width: '100%',
            borderRadius: '0.3rem',
            // border: '1px solid grey',
            backgroundColor: '#D9D9D9',
            // margin: '1rem',
            padding: '0.5rem',
         }}
      >
         <Grid item>
            <span
               style={{
                  borderRadius: '0.3rem',
                  fontSize: '0.8rem',
                  color: 'white',
                  backgroundColor: '#AA6800',
                  padding: '0.1rem 0.3rem',
               }}
            >
               <Link style={{color: 'white'}} to={`/tags/${slug}`}>
                  {title}
               </Link>
            </span>
         </Grid>
         <Grid item sx={{margin: '0.5rem 0', fontSize: '0.8rem'}}>
            {description}
         </Grid>
         {/* <Grid
            item
            sx={{color: '#AA6800', fontSize: '0.7rem', margin: '0.5rem 0'}}
         >
            Всего задано 250 вопросов
         </Grid> */}
      </Grid>
   );
};

export default RenderTag;
