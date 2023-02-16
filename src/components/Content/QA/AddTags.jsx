import React, {useState} from 'react';
import {WithContext as ReactTags} from 'react-tag-input';
import './AddTags.css';

const tagsArr = [
   {
      title: 'javascript',
      description:
         'Динамически типизированный язык широко использующийся в веб разаботке',
   },
   {
      title: 'python',
      description:
         'Строго типизированный язык широко использующийся в разработке бэкэндов, машинном обучении и data science',
   },
   {
      title: 'loop',
      description: '',
   },
   {
      title: 'array',
      description: '',
   },
   {
      title: 'string',
      description: '',
   },
];

const suggestions = tagsArr.map(tag => {
   return {
      id: tag.title,
      text: tag.title,
   };
});

const KeyCodes = {
   comma: 188,
   enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const tagInputArr = [];
tagsArr.map(tag => {
   tagInputArr.push({id: tag.title, text: tag.title});
});
export const AddTags = () => {
   const [tags, setTags] = useState([]);

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
      </>
   );
};
