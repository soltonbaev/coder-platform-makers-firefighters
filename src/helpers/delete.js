import axios from 'axios';
import {QUESTIONS} from './globals';
import {getAccessConfig} from './read';

export function clearStorage() {
   localStorage.removeItem('token');
   localStorage.removeItem('uid');
}

export async function deleteQuestion(slug) {
   try {
      let res = await axios.delete(QUESTIONS + slug, getAccessConfig());
      return res;
   } catch (error) {
      return error;
   }
}
