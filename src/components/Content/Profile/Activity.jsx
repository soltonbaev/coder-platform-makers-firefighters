import {Grid} from '@mui/material';
import {useEffect, useState} from 'react';
import {getQuestions} from '../../../helpers/read';

const Activity = () => {
   const [questions, setQuestions] = useState('');
   useEffect(() => {
      getQuestions().then(res => {
         // res.filter;
         setQuestions(res);
         console.log('activity', res);
      });
   }, []);
   return (
      <>
         <Grid container>
            <Grid item>
               <h3>Мои Вопросы</h3>
            </Grid>
            <Grid item>
               <h3>Мои Ответы</h3>
            </Grid>
         </Grid>
      </>
   );
};

export default Activity;
