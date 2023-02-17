import React, {useEffect, useState} from 'react';
import {WithContext as ReactTags} from 'react-tag-input';
import './AddTags.css';
import {getTags} from '../../../helpers/read';
import {useGlobalContext} from '../../../contexts/GlobalContextProvider';

// let tagsArr = getTags();
// console.log('tagsArr', tagsArr);
// tagsArr = [];

export const AddTags = ({tagsArr, tags, setTags}) => {
   console.group('AddTags group');
   console.log('tagsArr', tagsArr);

   useEffect(() => {}, []);

   const suggestions = tagsArr?.map(tag => {
      return {
         id: tag.title,
         text: tag.title,
      };
   });

   const tagInputArr = [];
   tagsArr?.map(tag => {
      tagInputArr.push({id: tag.title, text: tag.title});
   });

   useEffect(() => {}, []);

   const KeyCodes = {
      comma: 188,
      enter: 13,
   };

   const delimiters = [KeyCodes.comma, KeyCodes.enter];

   const handleDelete = i => {
      setTags(tags.filter((tag, index) => index !== i));
   };

   const handleAddition = tag => {
      setTags([...tags, tag]);
   };

   const handleDrag = (tag, currPos, newPos) => {
      const newTags = tags.slice();

      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);

      // re-render
      setTags(newTags);
   };

   const handleTagClick = index => {
      console.log('The tag at index ' + index + ' was clicked');
   };

   return (
      <>
         {tagsArr && (
            <ReactTags
               placeholder="Добавить тэг"
               tags={tags}
               suggestions={suggestions}
               delimiters={delimiters}
               handleDelete={handleDelete}
               handleAddition={handleAddition}
               handleDrag={handleDrag}
               handleTagClick={handleTagClick}
               inputFieldPosition="bottom"
               autocomplete
            />
         )}

         {console.groupEnd()}
      </>
   );
};
