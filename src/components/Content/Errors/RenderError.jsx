import {Alert, Snackbar} from '@mui/material';
import React from 'react';

const RenderError = ({errorType, showToast, toastMessage, setShowToast}) => {
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setShowToast(false);
   };
   return (
      <Snackbar open={showToast} autoHideDuration={6000} onClose={handleClose}>
         <Alert
            variant="filled"
            onClose={handleClose}
            severity={errorType}
            sx={{width: '100%'}}
         >
            {toastMessage}
         </Alert>
      </Snackbar>
   );
};

export default RenderError;
