import {Box} from '@mui/system';
import React from 'react';
import Search from '../Header/search.svg';

const SearchBox = () => {
   return (
      <Box sx={{position: 'relative', display: 'flex'}}>
         <input
            type="text"
            placeholder="искать вопросы"
            style={{
               height: '4vh',
               width: '30vw',
               borderColor: 'darkgray',
               backgroundColor: '#D9D9D9',
               borderRadius: '10px',
               paddingLeft: '10%',
               borderStyle: 'none',
            }}
         />
         <img src={Search} alt="" className="search-icon" />
      </Box>
   );
};

export default SearchBox;
