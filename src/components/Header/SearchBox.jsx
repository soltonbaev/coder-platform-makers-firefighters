import {Box} from '@mui/system';
import React from 'react';
import Search from '../Header/search.svg';

const SearchBox = ({placeholder, style}) => {
   return (
      <Box sx={{position: 'relative', display: 'flex'}}>
         <input type="text" placeholder={placeholder} style={style} />
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
