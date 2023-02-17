import {Box} from '@mui/system';
import React from 'react';
import Search from '../Header/search.svg';

const SearchBox = ({placeholder, style}) => {
   return (
      <Box sx={{position: 'relative', display: 'flex'}}>
         <input type="text" placeholder={placeholder} style={style} />
         <img src={Search} alt="" className="search-icon" />
      </Box>
   );
};

export default SearchBox;
