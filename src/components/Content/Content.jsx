import React from 'react';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import MainRoutes from '../../MainRoutes';
import MiniMenu from '../Header/MiniMenu';
import RenderError from './Errors/RenderError';

const Content = () => {
   const {showToast, setShowToast, toastMessage, errorType} =
      useGlobalContext();

   return (
      <>
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
      </>
   );
};

export default Content;
