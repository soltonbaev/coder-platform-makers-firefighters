import React from 'react';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import MainRoutes from '../../MainRoutes';
import MiniMenu from '../Header/MiniMenu';
import DevMenu from './DevMenu';
import RenderError from './Errors/RenderError';
import SearchResults from './SearchResults';

const Content = () => {
   const {
      showToast,
      showSearch,
      setShowToast,
      toastMessage,
      errorType,
      setShowSearch,
      searchResults,
      setSearchResults,
      searchInp,
      setSearchInp,
   } = useGlobalContext();

   return (
      <>
         {showSearch && (
            <SearchResults
               setSearchInp={setSearchInp}
               searchInp={searchInp}
               setShowSearch={setShowSearch}
               searchResults={searchResults}
               setSearchResults={setSearchResults}
            />
         )}
         <MiniMenu></MiniMenu>
         <MainRoutes />
         {showToast && (
            <RenderError
               errorType={errorType}
               setShowToast={setShowToast}
               showToast={showToast}
               toastMessage={toastMessage}
            />
         )}
         <DevMenu />
      </>
   );
};

export default Content;
