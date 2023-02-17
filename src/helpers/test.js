import axios from 'axios';
import {REGISTER} from './globals';
import {LOGIN} from './globals';
import {setToStorage} from './create';
import {getUserProfile} from './read';

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

export const testLogin = async () => {
   formData.append('username', 'soltonbaev');
   formData.append('password', '123456');
   try {
      const res = await axios.post(LOGIN, formData);
      console.log('result from test login', res.data);
      await getUserProfile(res.data.id);
      setToStorage(res.data);
   } catch (error) {
      console.log(error);
   }
};
