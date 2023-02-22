import {Container, Grid, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {getQuestions} from '../../../helpers/read';

const Statistics = ({aboutMe}) => {
   const [questions, setQuestions] = useState([]);
   const {setShowToast, setErrorType, setToastMessage, user} =
      useGlobalContext();

   function setToast(showToast, errorType, toastMessage) {
      setShowToast(showToast);
      setErrorType(errorType);
      setToastMessage(toastMessage);
   }

   useEffect(() => {
      getQuestions().then(data => {
         if (data.name === 'AxiosError') {
            setToast(true, 'error', data.message);
            return;
         }
         setQuestions(data);
      });
   }, []);

   console.warn(questions);

   const Questions = () => {
      let res = 0;
      questions.map(i => {
         if (user.id === i.author) {
            res += 1;
         }
      });

      return res;
   };

   const viewsCount = () => {
      let res = 0;
      questions.map(i => {
         if (user.id === i.author) {
            res += i.views_count;
         }
      });

      return res;
   };
   return (
      <Container>
         <Grid container direction="column">
            <Grid item>
               <h3>Cтатистика</h3>
               <Grid
                  container
                  sx={{
                     display: 'flex',
                     borderRadius: '0.3rem',
                     justifyContent: 'space-around',
                     //  with: '800px',
                     //  height: '120px',
                     border: '1px solid #D9D9D9',
                  }}
               >
                  <Grid item>
                     <Typography
                        sx={{
                           fontWeight: '400',
                           fontSize: '16px',
                           lineHeight: '1ppx',
                        }}
                     >
                        Вопросов:
                     </Typography>
                     <Typography
                        sx={{
                           fontWeight: '700',
                           fontSize: '40px',
                           lineHeight: '47px',
                           fontStyle: 'normal',
                           color: '#AA6800',
                        }}
                     >
                        {Questions()}
                     </Typography>
                  </Grid>
                  <Grid item>
                     <Typography
                        sx={{
                           fontWeight: '400',
                           fontSize: '16px',
                           lineHeight: '1ppx',
                        }}
                     >
                        Ответов:
                     </Typography>
                     <Typography
                        sx={{
                           fontWeight: '700',
                           fontSize: '40px',
                           lineHeight: '47px',
                           fontStyle: 'normal',
                           color: '#AA6800',
                        }}
                     >
                        666
                     </Typography>
                  </Grid>
                  <Grid item>
                     <Typography
                        sx={{
                           fontWeight: '400',
                           fontSize: '16px',
                           lineHeight: '1ppx',
                        }}
                     >
                        Охват:
                     </Typography>
                     <Typography
                        sx={{
                           fontWeight: '700',
                           fontSize: '40px',
                           lineHeight: '47px',
                           fontStyle: 'normal',
                           color: '#AA6800',
                        }}
                     >
                        {viewsCount()}
                     </Typography>
                  </Grid>
                  <Grid item>
                     <Typography
                        sx={{
                           fontWeight: '400',
                           fontSize: '16px',
                           lineHeight: '1ppx',
                        }}
                     >
                        репутация:
                     </Typography>
                     <Typography
                        sx={{
                           fontWeight: '700',
                           fontSize: '40px',
                           lineHeight: '47px',
                           fontStyle: 'normal',
                           color: '#AA6800',
                        }}
                     >
                        {user.average_rating}
                     </Typography>
                  </Grid>
               </Grid>
            </Grid>
            <Grid item>
               <h3> Обо мне</h3>
               <Box
                  sx={{
                     border: '1px solid #D9D9D9',
                     borderRadius: '0.3rem',
                     minHeight: '5rem',
                     padding: '1rem',
                     //  flex: '0 1 300px',
                     wordBreak: 'break-all',
                     wordWrap: 'break-word',
                  }}
               >
                  {aboutMe}
               </Box>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Statistics;
