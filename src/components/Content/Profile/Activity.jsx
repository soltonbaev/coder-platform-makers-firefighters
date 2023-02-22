import {Grid} from '@mui/material';
import {useEffect, useState} from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {getQuestions} from '../../../helpers/read';
import {userContext} from '../Home/Users';

const Activity = () => {
   const {user} = useGlobalContext();
   const [questions, setQuestions] = useState('');
   useEffect(() => {
      getQuestions().then(res => {
         let filteredQs = res.map(question => {
            if (user.id === question.author) {
               return question;
            }
         });
         setQuestions(filteredQs);
         console.log('activity', filteredQs);
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
