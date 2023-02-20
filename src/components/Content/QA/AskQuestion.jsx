import {Button, Container} from '@mui/material';
import {Box} from '@mui/system';
import MDEditor from '@uiw/react-md-editor';
import React, {useEffect, useState} from 'react';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import {AddTags} from './AddTags';
import {postQuestion} from './../../../helpers/create';
import {useNavigate} from 'react-router-dom';
import {getTags} from '../../../helpers/read';

document.documentElement.setAttribute('data-color-mode', 'light');

const AskQuestion = () => {
   console.clear();
   console.group('AskQuestion.jsx group');
   const {user, redirect, setRedirect} = useGlobalContext();
   // console.log('tagsArr', tagsArr);

   const navigate = useNavigate();
   const [questionTitle, setQuestionTitle] = useState('');
   const [markdown, setMarkdown] = useState(
      'Опишите детали вашей проблемы и результат который вы ожидаете'
   );
   const [tags, setTags] = useState([]);
   const {setShowToast, setErrorType, setToastMessage} = useGlobalContext();

   function setToast(showToast, errorType, toastMessage) {
      setShowToast(showToast);
      setErrorType(errorType);
      setToastMessage(toastMessage);
   }

   const [tagsArr, setTagsArr] = useState('');

   useEffect(() => {
      getTags().then(res => {
         // console.log("then res", res);
         if (res.name === 'AxiosError') {
            setToast(true, 'error', res.message);
            return;
         }

         setTagsArr(res);
      });
   }, []);

   async function handlePostQuestion() {
      console.log(tags);
      const preppedTags = tags.map(tag => {
         return tag.id;
      });
      console.log('preppedTags', preppedTags);
      const formData = new FormData();
      formData.append('title', questionTitle);
      formData.append('body', markdown);
      formData.append('tag', preppedTags);
      if (user) {
         let questionRes = await postQuestion(formData);
         if (questionRes.name === 'AxiosError') {
            setToast(true, 'error', questionRes.message);
            return;
         }
         setToast(true, 'success', 'Вопрос успешно принят');
         navigate(`/questions/${questionRes}`);
      } else {
         setRedirect('AskQuestion');
         navigate('/login');
      }
   }
   return (
      <>
         {tagsArr && (
            <Container maxWidth="lg" sx={{minHeight: '60vh'}}>
               <h1>Задайте вопрос</h1>
               <h2>Заголовок для вопроса</h2>
               <input
                  style={{
                     width: '100%',
                     padding: '0.5rem',
                     borderStyle: 'solid',
                     borderColor: '#D9D9D9',
                     marginBottom: '1rem',
                     borderRadius: '0.3rem',
                     borderWidth: '1px',
                  }}
                  onChange={e => {
                     setQuestionTitle(e.target.value);
                  }}
                  placeholder="Постарайтесь описать ваш вопрос как можно более конкретней"
               ></input>
               <h2>Тело текста</h2>
               <MDEditor value={markdown} onChange={setMarkdown} />
               {/* <MDEditor.Markdown
            source={markdown}
            style={{whiteSpace: 'pre-wrap'}}
         /> */}
               <h2>Тэги</h2>
               <AddTags tagsArr={tagsArr} tags={tags} setTags={setTags} />
               <h2>Похожие вопросы</h2>
               <Box sx={{border: '1px solid #D9D9D9', minHeight: '30vh'}}></Box>
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
                  variant="contained"
                  onClick={handlePostQuestion}
               >
                  {user ? 'Задать вопрос' : 'Войти или зарегистрироваться'}
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
               {/* {console.groupEnd()} */}
            </Container>
         )}
      </>
   );
};

export default AskQuestion;
