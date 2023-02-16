import {Container} from '@mui/material';
import MDEditor from '@uiw/react-md-editor';
import React, {useState} from 'react';
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
      </Container>
   );
};

export default AskQuestion;
