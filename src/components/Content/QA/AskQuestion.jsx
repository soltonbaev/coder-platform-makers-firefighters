import {Button, Container} from '@mui/material';
import {Box} from '@mui/system';
import MDEditor from '@uiw/react-md-editor';
import React, {useState} from 'react';
import {AddTags} from './AddTags';
document.documentElement.setAttribute('data-color-mode', 'light');
const AskQuestion = () => {
   const [markdown, setMarkdown] = useState(
      'Опишите детали вашей проблемы и результат который вы ожидаете'
   );
   return (
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
            placeholder="Постарайтесь описать ваш вопрос как можно более конкретней"
         ></input>
         <h2>Тело текста</h2>
         <MDEditor value={markdown} onChange={setMarkdown} />
         {/* <MDEditor.Markdown
            source={markdown}
            style={{whiteSpace: 'pre-wrap'}}
         /> */}
         <h2>Тэги</h2>
         <AddTags />
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
         >
            Задать вопрос
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
      </Container>
   );
};

export default AskQuestion;
