import {Grid} from '@mui/material';
import {Container} from '@mui/system';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {getQuestions, getTag} from '../../../helpers/read';
import RenderQuestion from './RenderQuestion';

const RenderTagPage = () => {
   const {setToast} = useGlobalContext();
   const params = useParams('');
   const [tag, setTag] = useState('');
   const [questions, setQuestions] = useState('');

   useEffect(() => {
      getTag(params.id).then(res => {
         if (res.name === 'AxiosError') {
            setToast(true, 'error', res.message);
            return;
         }
         // console.log(params);
         // console.log('RenderTagPage res', res);
         setTag(res);
      });

      getQuestions().then(res => {
         if (res.name === 'AxiosError') {
            setToast(true, 'error', res.message);
            return;
         }
         // console.log('question res', res);
         setQuestions(res);
      });
   }, []);

   return (
      <Container>
         {/* {console.log(questions)} */}
         <Grid container>
            <Grid item>
               <h1>{tag.title}</h1>
               <Grid>{tag.description}</Grid>
            </Grid>
            <Grid>
               {questions &&
                  questions.map(question => {
                     if (question.tag.includes(tag.title)) {
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
                     }
                  })}
            </Grid>
         </Grid>
      </Container>
   );
};

export default RenderTagPage;
