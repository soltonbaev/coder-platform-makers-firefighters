import axios from 'axios';
import {REGISTER} from './globals';

export let formData = new FormData();

export const testRegister = async formData => {
   formData.append('username', 'soltonbaev');
   formData.append('email', 'isoltonbaev@gmail.com');
   formData.append('password', '123456');
   formData.append('password_confirm', '123456');

   try {
      const res = await axios.post(`${REGISTER}`, formData);
      console.log(res);
   } catch (error) {
      console.log(error);
   }
};
