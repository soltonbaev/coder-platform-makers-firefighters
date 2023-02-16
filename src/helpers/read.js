import axios from 'axios';

import {TAGS} from './globals';
export async function getTags() {
   try {
      let res = await axios.get(TAGS);
      console.log(res);
   } catch (error) {
      console.log(error);
   }
}

export function getFromStorage() {
   return JSON.parse(localStorage.getItem('token'));
}
