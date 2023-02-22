import {Box} from '@mui/system';
import React from 'react';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import {searchQuestions} from '../../helpers/read';
import Search from '../Header/search.svg';

const SearchBox = ({placeholder, style}) => {
   const {
      showSearch,
      setShowSearch,
      setSearchResults,
      searchInp,
      setSearchInp,
   } = useGlobalContext();

   function handleSearch(e) {
      // console.log(e.target.value);
      setSearchInp(e.target.value);
      searchQuestions(e.target.value).then(res => {
         setSearchResults(res);
      });
      if (e.target.value) {
         setShowSearch(true);
      } else {
         setShowSearch(false);
      }
   }

   return (
      <Box sx={{position: 'relative', display: 'flex'}}>
         <input
            onChange={handleSearch}
            type="text"
            value={searchInp}
            placeholder={placeholder}
            style={style}
         />
         <img
            style={{
               position: 'absolute',
               left: '0.5rem',
               top: '0.5rem',
               width: '0.8rem',
            }}
            src={Search}
            alt=""
            className="search-icon"
         />
      </Box>
   );
};

export default SearchBox;
