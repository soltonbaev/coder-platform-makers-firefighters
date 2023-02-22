import axios from 'axios';
import {PROFILE} from './globals';
import {getAccessConfig} from './read';

export async function updateUser(id, formData) {
   try {
      let config = getAccessConfig();
      // console.log(config);
      const res = await axios.patch(PROFILE + id + '/', formData, config);
      // console.log(res);
      return res;
   } catch (error) {
      // console.log(error);
      return error;
   }
}
