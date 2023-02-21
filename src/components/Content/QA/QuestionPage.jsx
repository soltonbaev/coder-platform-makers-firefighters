import {Avatar, Button, Container, Grid} from '@mui/material';
import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {
   getQuestion,
   getSimilarQuestions,
   getUserProfile,
} from '../../../helpers/read';

import bookmarkIcon from './bookmark-icon.svg';
import MDEditor from '@uiw/react-md-editor';
import {
   postAnswer,
   postQuestion,
   setQuestionVote,
} from '../../../helpers/create';
import RenderAnswer from './RenderAnswer';
import RenderMarkdown from './RenderMarkdown';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

const QuestionPage = () => {
   // console.clear();
   const navigate = useNavigate('');
   document.documentElement.setAttribute('data-color-mode', 'light');

   console.group('QuestionPage start');
   const params = useParams();
   const [question, setQuestion] = useState('');
   const [userProfile, setUserProfile] = useState('');
   const [createdAt, setCreatedAt] = useState('');
   const [updatedAt, setUpdatedAt] = useState('');
   const [markdown, setMarkdown] = useState(
      'this is markdown code ```console.log("Hello")```'
   );
   const [similarQuestions, setSimilarQuestions] = useState('');
   const formatDate = dateString => {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(dateString).toLocaleDateString(undefined, options);
   };

   // const url = useParams();

   useEffect(() => {
      console.log(params.id);
      loadQuestion();
   }, [params.id]);

   const {setShowToast, setErrorType, setToastMessage} = useGlobalContext();

   function setToast(showToast, errorType, toastMessage) {
      setShowToast(showToast);
      setErrorType(errorType);
      setToastMessage(toastMessage);
   }

   function loadQuestion() {
      getQuestion(params.id).then(res => {
         if (res.name === 'AxiosError') {
            setToast(true, 'error', res.message);
            return;
         }
         console.log('getQuestion', res);
         setQuestion(res);
         setCreatedAt(formatDate(res.created_at));
         setUpdatedAt(formatDate(res.created_at));
         getUserProfile(res.author).then(res => {
            setUserProfile(res);
         });
         getSimilarQuestions(res.slug).then(res => {
            // setSimilarQuestions(res);
         });
      });
   }

   async function handleAnswer() {
      console.clear();
      console.group('handleAnswer group');
      let formData = new FormData();
      formData.append('body', markdown);
      formData.append('question', question.slug);
      postAnswer(formData);
      setMarkdown('');
      loadQuestion();
   }
   return (
      <Container>
         {console.log('similar Qs', similarQuestions)}
         <h1>{question.title}</h1>
         <Grid
            className="content-wrapper"
            spacing={3}
            container
            sx={{display: 'flex'}}
         >
            <Grid
               className="left-column"
               item
               sm={9}
               md={9}
               lg={9}
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  flexGrow: 3,
               }}
            >
               <Grid
                  className="user-info"
                  container
                  direction="row"
                  sx={{gap: '0.3rem'}}
               >
                  <Grid item>
                     <Avatar src={userProfile.user_photo}></Avatar>
                  </Grid>
                  <Grid item direction="column" sx={{fontSize: '0.7rem'}}>
                     <Grid item sx={{color: '#AA6800', fontWeight: 'bold'}}>
                        {userProfile.username}
                     </Grid>
                     <Grid item>задан {createdAt}</Grid>
                     <Grid item>рейтинг: {userProfile.average_rating}</Grid>
                  </Grid>
               </Grid>
               <Grid
                  className="question-body"
                  item
                  sx={{
                     border: '1px solid #D9D9D9',
                     borderRadius: '0.3rem',
                     padding: '0 1rem',
                  }}
               >
                  <RenderMarkdown markdown={question.body} />
               </Grid>
               <Grid className="bottom-btns" container sx={{gap: '1rem'}}>
                  <Grid
                     item
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                     }}
                  >
                     <Grid item>
                        {question &&
                           question.tag.map(tag => {
                              return (
                                 <span
                                    style={{
                                       borderRadius: '0.3rem',
                                       backgroundColor: '#AA6800',
                                       fontSize: '0.8rem',
                                       color: 'white',
                                       padding: '0.2rem 0.3rem',
                                       marginRight: '0.5rem',
                                    }}
                                 >
                                    {tag}
                                 </span>
                              );
                           })}
                     </Grid>
                     <Grid
                        item
                        sx={{
                           color: '#004605',
                           display: 'flex',
                           gap: '0.5rem',
                           fontSize: '0.8rem',
                        }}
                     >
                        <Grid item>редактировать</Grid>
                        <Grid item>поделиться</Grid>
                        <Grid item>следить</Grid>
                     </Grid>
                  </Grid>
                  <Grid item sx={{display: 'flex', fontSize: '0.8rem'}}>
                     редактирован последний раз {updatedAt}
                  </Grid>
                  <Grid item sx={{display: 'flex', gap: '0.5rem'}}>
                     <img src={bookmarkIcon} />
                     <span
                        style={{
                           color: 'white',
                           backgroundColor: '#474747',
                           width: '2.5rem',
                           height: '2.5rem',
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                     >
                        -
                     </span>
                     <span
                        style={{
                           color: 'white',
                           backgroundColor: '#AA6800',
                           width: '2.5rem',
                           height: '2.5rem',
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                     >
                        5
                     </span>
                     <span
                        style={{
                           color: 'white',
                           backgroundColor: '#474747',
                           width: '2.5rem',
                           height: '2.5rem',
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                        onClick={() => {
                           setQuestionVote(question.slug);
                        }}
                     >
                        +
                     </span>
                  </Grid>
               </Grid>
               <Grid
                  className="md-editor"
                  container
                  direction="column"
                  sx={{marginTop: '1rem'}}
               >
                  <Grid item>
                     <MDEditor
                        highlightEnable={false}
                        value={markdown}
                        onChange={setMarkdown}
                     />
                  </Grid>
                  <Grid item>
                     <Button
                        sx={{
                           margin: '2rem 0',
                           marginRight: '1rem',
                           backgroundColor: '#474747',
                           color: 'white',
                           '&:hover': {
                              backgroundColor: 'rgba(170, 104, 0, 1)',
                              borderColor: 'rgba(170, 104, 0, 1)',
                           },
                        }}
                        onClick={handleAnswer}
                        variant="contained"
                     >
                        Отправить ответ
                     </Button>
                     <Button
                        sx={{
                           margin: '2rem 0',
                           borderColor: '#474747',
                           color: '#474747',
                           '&:hover': {
                              borderColor: 'rgba(170, 104, 0, 1)',
                              color: 'rgba(170, 104, 0, 1)',
                           },
                        }}
                        variant="outlined"
                     >
                        Отменить
                     </Button>
                  </Grid>
               </Grid>
               <Grid item>
                  {console.log('question answers', question.answers)}
                  {question &&
                     question.answers.map(answer => {
                        return (
                           <RenderAnswer
                              key={answer.id}
                              author={answer.author}
                              body={answer.body}
                              comments={answer.comments}
                              createdAt={answer.createdAt}
                              updatedAt={answer.updatedAt}
                              dislikes={answer.dislikes}
                              likes={answer.likes}
                           />
                        );
                     })}
               </Grid>
            </Grid>
            <Grid
               className="right-column"
               item
               sm={3}
               md={3}
               lg={3}
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  flexGrow: 1,
               }}
            >
               <Grid
                  item
                  sx={{
                     // margin: '1rem',
                     padding: '1rem',
                     borderRadius: '0.3rem',
                     minWidth: '300px',
                     minHeight: '25vh',
                     backgroundColor: '#D9D9D9',
                  }}
               >
                  <h2>Популярные вопросы</h2>
               </Grid>
               <Grid
                  item
                  sx={{
                     // margin: '1rem',
                     padding: '1rem',
                     borderRadius: '0.3rem',
                     minWidth: '300px',
                     minHeight: '25vh',
                     backgroundColor: '#D9D9D9',
                  }}
               >
                  <h2>Похожие вопросы</h2>
               </Grid>
            </Grid>
         </Grid>
      </Container>
   );
};

export default QuestionPage;
