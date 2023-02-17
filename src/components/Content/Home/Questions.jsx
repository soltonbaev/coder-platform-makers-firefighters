import {
   Box,
   Button,
   Container,
   Grid,
   Pagination,
   Typography,
} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './q.css';
import RenderQuestion from './RenderQuestion';
import SideBar from './Sidebar';
import {getQuestions} from '../../../helpers/read';

// const questions = [
//    {
//       question: 'Как вывести нечетные числа в javascript',
//       votesCount: 5,
//       answersCount: 3,
//       viewsCount: 10,
//       tags: ['javascript', 'even numbers', 'loop'],
//       username: 'codewarrior',
//       id: 1,
//    },
//    {
//       question: 'Как в Питоне превратить строку в массив',
//       votesCount: 10,
//       answersCount: 2,
//       viewsCount: 50,
//       tags: ['python', 'string', 'array'],
//       username: 'noobiest_noob',
//       id: 2,
//    },
//    {
//       question: 'Как добавить в html-элемент несколько классов?',
//       votesCount: 90,
//       answersCount: 7,
//       viewsCount: 60,
//       tags: ['html', 'classes'],
//       username: 'meowmeow',
//       id: 3,
//    },
//    {
//       question: 'Как сгенерировать случайное число в Python?',
//       votesCount: 9,
//       answersCount: 5,
//       viewsCount: 70,
//       tags: ['python', 'random number'],
//       username: 'axios',
//       id: 4,
//    },
//    {
//       question: 'Как найти одинаковые элементы в массиве js?',
//       votesCount: 40,
//       answersCount: 13,
//       viewsCount: 133,
//       tags: ['javascript', 'array'],
//       username: 'jsexpert',
//       id: 5,
//    },
// ];
const Questions = () => {
   console.clear();
   console.group('Questions group');

   const navigate = useNavigate();
   const [questions, setQuestions] = useState('');
   useEffect(() => {
      getQuestions().then(res => {
         setQuestions(res);
         console.log('getQuestions res', res);
      });
   }, []);

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
                     onClick={() => {
                        navigate('/ask-question');
                     }}
                  >
                     Задать вопрос
                  </Button>
               </Box>
               <Box sx={{border: '1px solid #D9D9D9', borderRadius: '0.3rem'}}>
                  {questions &&
                     questions.map(question => {
                        return (
                           <RenderQuestion
                              key={question.created_at}
                              username={question.author}
                              question={question.title}
                              body={question.body}
                              slug={question.slug}
                              // votesCount={question.votesCount}
                              // answersCount={question.answersCount}
                              viewsCount={question.views_count}
                              tags={question.tag}
                           />
                        );
                     })}
               </Box>
               <Box>
                  <Pagination />
               </Box>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Questions;
