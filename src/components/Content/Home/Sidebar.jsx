import React, {useState} from 'react';
import {Box, Container, Grid} from '@mui/material';
import './SideBar.css';
const SideBar = ({handleSortQuestions}) => {
   const [slugAsc, setSlugAsc] = useState(true);
   const [dateCreatedAsc, setDateCreatedAsc] = useState(true);
   const [dateUpdatedAsc, setDateUpdatedAsc] = useState(true);
   const [viewsCountAsc, setViewsCountAsc] = useState(true);
   const [authorAsc, setAuthorAsc] = useState(true);
   return (
      <Grid
         container
         sx={{
            position: 'fixed',
            width: '250px',
            gap: '0.5rem',
            padding: '0rem 1rem 2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '0.3rem',
            backgroundColor: '#d9d9d9',
            // minHeight: '50vh',
         }}
      >
         <h3>Сортировать</h3>
         <Grid item>
            <span
               style={{cursor: 'pointer'}}
               onClick={() => {
                  if (slugAsc) {
                     handleSortQuestions('title');
                     setSlugAsc(false);
                  } else {
                     handleSortQuestions('-title');
                     setSlugAsc(true);
                  }
               }}
            >
               По заголовку
            </span>
         </Grid>
         <Grid item>
            <span
               style={{cursor: 'pointer'}}
               onClick={() => {
                  if (dateCreatedAsc) {
                     handleSortQuestions('created_at');
                     setDateCreatedAsc(false);
                  } else {
                     handleSortQuestions('-created_at');
                     setDateCreatedAsc(true);
                  }
               }}
            >
               По дате создания
            </span>
         </Grid>
         <Grid item>
            <span
               style={{cursor: 'pointer'}}
               onClick={() => {
                  if (dateUpdatedAsc) {
                     handleSortQuestions('updated_at');
                     setDateUpdatedAsc(false);
                  } else {
                     handleSortQuestions('-updated_at');
                     setDateUpdatedAsc(true);
                  }
               }}
            >
               По дате редактирования
            </span>
         </Grid>
         <Grid item>
            <span
               style={{cursor: 'pointer'}}
               onClick={() => {
                  if (viewsCountAsc) {
                     handleSortQuestions('views_count');
                     setViewsCountAsc(false);
                  } else {
                     handleSortQuestions('-views_count');
                     setViewsCountAsc(true);
                  }
               }}
            >
               По количеству просмотров
            </span>
         </Grid>
      </Grid>
   );
};

export default SideBar;
