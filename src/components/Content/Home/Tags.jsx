import {Box, Grid, Pagination} from '@mui/material';
import React, {useEffect, useState} from 'react';
import './Tags.css';
import {styled, alpha} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {Container} from '@mui/system';
import Search from '@mui/icons-material/Search';
import RenderTag from './RenderTag';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';
import SearchBox from '../../Header/SearchBox';
import {getTags, getTagsRaw} from '../../../helpers/read';
import {useSearchParams} from 'react-router-dom';

const Tags = () => {
   // const { tagsArr } = useGlobalContext();
   const [searchParams, setSearchParams] = useSearchParams();
   const [search, setSearch] = useState('');
   const {setShowToast, setErrorType, setToastMessage} = useGlobalContext();
   const [currentPage, setCurrentPage] = useState(1);

   function setToast(showToast, errorType, toastMessage) {
      setShowToast(showToast);
      setErrorType(errorType);
      setToastMessage(toastMessage);
   }

   const [tagsObj, setTagsObj] = useState('');
   const [filtered, setFiltered] = useState(tagsObj);
   // console.log(filtered);
   //   useEffect(() => {
   //     getTags().then((res) => {
   //       // console.log("then res", res);
   //       if (res.name === "AxiosError") {
   //         setToast(true, "error", res.message);
   //         return;
   //       }
   //       setTagsObj(res);
   //     });
   //   }, []);

   useEffect(() => {
      setFiltered(tagsObj);
   }, [tagsObj]);

   useEffect(() => {
      getTagsRaw().then(res => {
         setTagsObj(res);
         // console.log("tagsObj", res);
         // console.log('getQuestions res', res);
      });
   }, [searchParams]);

   useEffect(() => {
      setSearchParams({
         page: currentPage,
      });
      //  console.log(currentPage);
   }, [currentPage]);

   const filterTags = () => {
      if (search.length === 0) {
         return tagsObj;
      } else {
         let res = {
            ...tagsObj,
            results: tagsObj?.results?.filter(item =>
               item.title.toLowerCase().includes(search.toLowerCase())
            ),
         };
         return res;
      }
   };

   useEffect(() => {
      let res = filterTags();
      setFiltered(res);
   }, [search]);
   return (
      <Container maxWidth="lg">
         {tagsObj && console.log(tagsObj)}
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
                  <input
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
                     value={search}
                     onChange={e => setSearch(e.target.value)}
                  />
               </Grid>
            </Grid>
         </Grid>
         <Grid item container sx={{gap: '1rem'}}>
            {filtered &&
               filtered?.results.map(tag => {
                  console.log('tag item', tag);
                  return (
                     <RenderTag
                        key={tag.slug}
                        slug={tag.slug}
                        title={tag.title}
                        description={tag.description}
                     />
                  );
               })}
         </Grid>
         {/* <Grid item> */}
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
            }}
         >
            <Pagination
               count={Math.ceil(tagsObj.count / 10)}
               page={currentPage}
               onChange={(e, p) => {
                  setCurrentPage(p);
               }}
            />
         </Box>
         {/* </Grid> */}
      </Container>
   );
};

export default Tags;
