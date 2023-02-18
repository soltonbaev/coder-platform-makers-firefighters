import {Avatar, Container, Grid} from '@mui/material';
import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getQuestion, getUserProfile} from '../../../helpers/read';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {Light} from 'react-syntax-highlighter/dist/esm/styles/prism';

const QuestionPage = () => {
   // console.clear();
   console.group('QuestionPage start');
   const params = useParams();
   const [question, setQuestion] = useState('');
   const [userProfile, setUserProfile] = useState('');
   const [demoCode, setDemoCode] = useState('(num) => num + 1');
   useEffect(() => {
      console.log(params.id);
      getQuestion(params.id).then(res => {
         console.log('getQuestion', res);
         setQuestion(res);
         getUserProfile(res.author).then(res => {
            setUserProfile(res);
         });
      });
   }, []);

   useEffect(() => {}, []);

   const [markdown, setMarkdown] = useState(
      'this is markdown code ```console.log("Hello")```'
   );
   return (
      <Container>
         {console.log('userProfile', userProfile)}
         <h1>{question.title}</h1>
         <Grid container>
            <Avatar src={userProfile.user_photo}></Avatar>
            <Grid item>{userProfile.username}</Grid>
            <Grid item></Grid>
         </Grid>
         <Grid item>
            <SyntaxHighlighter
               // children={String(children).replace(/\n$/, '')}
               style={materialLight}
               language="javascript"
               PreTag="div"
               // {...props}
            >
               {demoCode}
            </SyntaxHighlighter>
            {/* <ReactMarkdown
               children={question.body}
               components={{
                  code({node, inline, className, children, ...props}) {
                     const match = /language-(\w+)/.exec(className || '');
                     return !inline && match ? (
                        <SyntaxHighlighter
                           children={String(children).replace(/\n$/, '')}
                           style={materialLight}
                           language="javascript"
                           PreTag="div"
                           {...props}
                        />
                     ) : (
                        <code className={className} {...props}>
                           {children}
                        </code>
                     );
                  },
               }}
            /> */}
         </Grid>
      </Container>
   );
};

export default QuestionPage;
