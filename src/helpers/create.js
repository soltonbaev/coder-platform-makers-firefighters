import axios from 'axios';
import {REFRESH, REGISTER} from './globals';
import {LOGIN} from './globals';
import {getUserProfile} from './read';
export const Register = async formData => {
   try {
      const res = await axios.post(`${REGISTER}`, formData);
      console.log(res);
      console.log(REGISTER);
   } catch (error) {
      console.log(error);
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
