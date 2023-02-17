import {Avatar, Container, Grid} from '@mui/material';
import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getQuestion, getUserProfile} from '../../../helpers/read';

const QuestionPage = () => {
   // console.clear();
   console.group('QuestionPage start');
   const params = useParams();
   const [question, setQuestion] = useState('');
   const [userProfile, setUserProfile] = useState('');

   useEffect(() => {
      console.log(params.id);
      getQuestion(params.id).then(res => {
         console.log('getQuestion', res);
         setQuestion(res);
      });
   }, []);

   useEffect(() => {
      setUserProfile(getUserProfile(question.author));
   }, []);

   return (
      <Container>
         <h1>{question.title}</h1>
         <Grid container>
            <Avatar src={userProfile.user_photo}></Avatar>
            <Grid item></Grid>
         </Grid>
      </Container>
   );
};

export default QuestionPage;
