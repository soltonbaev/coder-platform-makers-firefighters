import {Box, Grid} from '@mui/material';
import React from 'react';
import './Tags.css';
import {styled, alpha} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {Container} from '@mui/system';
import Search from '@mui/icons-material/Search';
import RenderTag from './RenderTag';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import SearchBox from '../../Header/SearchBox';

const Tags = () => {
   const {tagsArr} = useGlobalContext();
   return (
      <Container maxWidth="lg">
         <Grid container direction="column">
            <h1>Поиск по тэгам </h1>

            <Grid item sx={{display: 'flex', justifyContent: 'space-between'}}>
               <Grid
                  item
                  sx={{
                     maxWidth: '500px',
                     marginBottom: '1.5rem',
                     color: '#474747',
                  }}
               >
                  Тэг - ключевое слово которое позволяет разделять вопросы по
                  схожим темам. Изпользуя тэги правильным образом вы можете
                  помочь другим пользователям легко найти ваш вопрос
               </Grid>
               <Grid item sx={{alignSelf: 'flex-end'}}>
                  <SearchBox
                     style={{
                        height: '1.5rem',
                        width: '10rem',
                        borderColor: 'darkgray',
                        backgroundColor: '#D9D9D9',
                        borderRadius: '0.3rem',
                        paddingLeft: '1.5rem',
                        borderStyle: 'none',
                        marginBottom: '1rem',
                     }}
                     placeholder="искать тэги"
                  ></SearchBox>
               </Grid>
            </Grid>
         </Grid>
         <Grid item container sx={{gap: '1rem'}}>
            {tagsArr &&
               tagsArr.map(tag => {
                  return (
                     <RenderTag
                        key={tag.slug}
                        title={tag.title}
                        description={tag.description}
                     />
                  );
               })}
         </Grid>
      </Container>
   );
};

export default Tags;
