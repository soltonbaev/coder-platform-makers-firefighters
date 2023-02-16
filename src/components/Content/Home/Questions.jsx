import {Box, Button, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import './q.css';
import RenderQuestion from './RenderQuestion';
import SideBar from './Sidebar';
const questions = [
   {
      question: 'Как вывести нечетные числа в javascript',
      votesCount: 5,
      answersCount: 3,
      viewsCount: 10,
      tags: ['javascript', 'even numbers', 'loop'],
      username: 'codewarrior',
   },
   {
      question: 'Как в Питоне превратить строку в массив',
      votesCount: 10,
      answersCount: 2,
      viewsCount: 50,
      tags: ['python', 'string', 'array'],
      username: 'noobiest_noob',
   },
   {
      question: 'Как добавить в html-элемент несколько классов?',
      votesCount: 90,
      answersCount: 7,
      viewsCount: 60,
      tags: ['html', 'classes'],
      username: 'meowmeow',
   },
   {
      question: 'Как сгенерировать случайное число в Python?',
      votesCount: 9,
      answersCount: 5,
      viewsCount: 70,
      tags: ['python', 'random number'],
      username: 'axios',
   },
   {
      question: 'Как найти одинаковые элементы в массиве js?',
      votesCount: 40,
      answersCount: 13,
      viewsCount: 133,
      tags: ['javascript', 'array'],
      username: 'jsexpert',
   },
];
const Questions = () => {
   return (
      <Container maxWidth="lg" sx={{minHeight: '60vh'}}>
         <Grid container sx={{gap: '2rem'}}>
            <Grid item>
               <SideBar />
            </Grid>
            <Grid item>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <h1>Последние вопросы</h1>
                  <Button
                     variant="contained"
                     sx={{
                        height: '2rem',
                        backgroundColor: '#474747',
                        color: 'white',
                        '&:hover': {
                           backgroundColor: 'rgba(170, 104, 0, 1);',
                           // color: '#3c52b2',
                        },
                     }}
                  >
                     Задать вопрос
                  </Button>
               </Box>
               <Box sx={{border: '1px solid #D9D9D9', borderRadius: '0.3rem'}}>
                  {questions.map(question => {
                     return (
                        <RenderQuestion
                           username={question.username}
                           question={question.question}
                           votesCount={question.votesCount}
                           answersCount={question.answersCount}
                           viewsCount={question.viewsCount}
                           tags={question.tags}
                        />
                     );
                  })}
               </Box>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Questions;
