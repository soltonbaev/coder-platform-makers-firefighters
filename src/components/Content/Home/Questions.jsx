import {Box, Button, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import './q.css';
import SideBar from './Sidebar';
const Questions = () => {
   return (
      <Container maxWidth="lg">
         <Grid container spacing={4}>
            <Grid item>
               <SideBar />
            </Grid>
            <Grid item>
               <Box className="firstBox">
                  <h1>Последние вопросы</h1>
                  <Button
                     vairant="contained"
                     sx={{backgroundColor: '#474747', color: 'white'}}
                  >
                     Задать вопрос
                  </Button>
               </Box>
               <Box className="secondBox">
                  <ul>
                     <p>0 голосов</p>
                     <p>1 ответ</p>
                     <p>15 просмотров</p>
                  </ul>
                  <div>
                     <div className="secondQ">
                        Как вывести четные числа из набора смешанных чисел в
                        массиве?
                     </div>
                     <div className="thirdBox">
                        <span className="tegs">javascript</span>
                        <p>users name</p>
                     </div>
                  </div>
               </Box>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Questions;
