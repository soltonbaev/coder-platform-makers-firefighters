import React from 'react';

const RenderError = ({showToast, toastMessage}) => {
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpen(false);
   };
   return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity={errorType} sx={{width: '100%'}}>
            {toastMessage}
         </Alert>
      </Snackbar>
   );
};

export default RenderError;
