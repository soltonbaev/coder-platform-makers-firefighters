import {Box, Container} from '@mui/material';
import React from 'react';
import RenderQuestion from './Home/RenderQuestion';

const SearchResults = ({
   setShowSearch,
   searchResults,
   setSearchResults,
   searchInp,
   setSearchInp,
}) => {
   return (
      <Box
         sx={{
            boxShadow: '0.1rem 0.1rem 0.5rem grey',
            width: {xs: '95vw', sm: '50vw'},
            // minHeight: '100px',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 0)',
            top: '3.8rem',
            backgroundColor: 'white',
            zIndex: '1000',
         }}
      >
         <Box sx={{border: '1px solid #D9D9D9', borderRadius: '0.3rem'}}>
            {searchResults && searchResults.length > 0 ? (
               searchResults.map(question => {
                  return (
                     <RenderQuestion
                        setSearchInp={setSearchInp}
                        setShowSearch={setShowSearch}
                        // searchResults={searchResults}
                        // setSearchResults={setSearchResults}
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
               })
            ) : (
               <Box sx={{textAlign: 'center', margin: '1rem'}}>
                  Вопросов не найдено
               </Box>
            )}
         </Box>
      </Box>
   );
};

export default SearchResults;
