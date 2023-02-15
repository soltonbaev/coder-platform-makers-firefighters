import {Box} from '@mui/material';
import React from 'react';
import './q.css';
const Questions = () => {
   return (
      <>
         <div style={{width: '80%'}}>
            <Box className="firstBox">
               <div className="question">Последние вопросы</div>
               <button className="firstButton">Задать вопрос</button>
            </Box>
            <Box className="secondBox">
               <ul>
                  <p>0 голосов</p>
                  <p>1 ответ</p>
                  <p>15 просмотров</p>
               </ul>
               <div>
                  <div className="secondQ">
                     Как вывести четные числа из набора смешанных чисел в
                     массиве?
                  </div>
                  <div className="thirdBox">
                     <span className="tegs">javascript</span>
                     <p>users name</p>
                  </div>
               </div>
            </Box>
         </div>
      </>
   );
};

export default Questions;
