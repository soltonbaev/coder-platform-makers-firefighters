import axios from 'axios';
import {ANSWERS, REFRESH, REGISTER} from './globals';
import {QUESTIONS} from './globals';
import {getAccessConfig} from './read';

export const Register = async formData => {
   try {
      const res = await axios.post(`${REGISTER}`, formData);
      // console.log('Register res', res);
      return res;
   } catch (error) {
      // console.log(error);
      return error;
   }
};

export function setToStorage(type, data) {
   if (type === 'token') {
      localStorage.setItem('token', JSON.stringify(data));
   } else if (type === 'uid') {
      localStorage.setItem('uid', JSON.stringify(data));
   }
}

export async function tokenRefresh(token) {
   return await axios.post(REFRESH, {
      refresh: token,
   });
}

export async function postQuestion(data) {
   try {
      let res = await axios.post(QUESTIONS, data, getAccessConfig());
      // console.log('postQuestion result', res);
      return res.data.slug;
   } catch (error) {
      // console.log(error);
      return error;
   }
}

export async function postAnswer(data) {
   try {
      let res = await axios.post(ANSWERS, data, getAccessConfig());
      // console.log('postAnswerResult', res);
      return res;
   } catch (error) {
      return error;
   }
}

export async function setAnswerVote(id, data) {
   try {
      const res = await axios.post(
         ANSWERS + id + '/like/',
         data,
         getAccessConfig()
      );
      // console.log(res);
      return res;
   } catch (error) {
      // console.log(error);
      return error;
   }
}
