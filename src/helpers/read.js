import axios from 'axios';
import {QUESTIONS, TAGS, USER_LIST} from './globals';
import {PROFILE} from './globals';
import {LOGIN} from './globals';
import {setToStorage} from './create';

export async function getTags() {
   console.log('access config', getAccessConfig());
   try {
      let res = await axios.get(TAGS, getAccessConfig());
      console.log('getTags results', res.data);
      return res.data;
   } catch (error) {
      console.log(error);
      return error;
   }
}
export async function getTagsRaw() {
   console.log('access config', getAccessConfig());
   try {
      let res = await axios.get(TAGS + window.location.search);
      console.log('getTags results', res.data);
      return res.data;
   } catch (error) {
      console.log(error);
      return error;
   }
}

export async function getTag(slug) {
   // console.log('access config', getAccessConfig());
   try {
      let res = await axios.get(`${TAGS}${slug}/`);
      console.log('getTag results', res);
      console.log(`${TAGS}${slug}`);
      return res.data;
   } catch (error) {
      console.log(error);
      return error;
   }
}

export function getFromStorage(type) {
   if (type === 'token') {
      return JSON.parse(localStorage.getItem('token'));
   } else if (type === 'uid') {
      return JSON.parse(localStorage.getItem('uid'));
   }
}

export function getAccessConfig() {
   try {
      const accessToken = getFromStorage('token').access;
      const Authorization = `Bearer ${accessToken}`;
      return {
         headers: {
            Authorization,
         },
      };
   } catch (error) {
      console.log(error);
   }
}

export async function getUserProfile(id) {
   try {
      let res = await axios.get(`${PROFILE}${id}`, getAccessConfig());
      console.log('getUserProfile result', res.data);
      return res.data;
   } catch (error) {
      console.log(error);
      return error;
   }
}

export const login = async formData => {
   try {
      const res = await axios.post(LOGIN, formData);
      // console.log('Result of login request', res.data);
      setToStorage('token', {
         refresh: res.data.refresh,
         access: res.data.access,
      });
      setToStorage('uid', res.data.id);
      let userProfileRes = await getUserProfile(res.data.id);
      // console.log('userProfieRes', userProfileRes);
      return userProfileRes;
   } catch (error) {
      // console.log('Login failed');
      console.log('login error', error);
      return error;
   }
};

export async function getQuestions() {
   try {
      let res = await axios(QUESTIONS);
      // console.log('getQuestions result', res);
      return res.data.results;
   } catch (error) {
      return error;
   }
}

export async function searchQuestions(query) {
   try {
      let res = await axios(QUESTIONS + '?search=' + query);
      // console.log('searchQuestions result', res);
      return res.data.results;
   } catch (error) {
      return error;
   }
}

export async function sortQuestions(type) {
   try {
      let res = await axios(
         QUESTIONS + window.location.search + `&ordering=${type}`
      );
      console.error('getQuestions result', res.data);
      return res.data;
   } catch (error) {
      return error;
   }
   //   console.log(res.data.results);
}

export async function getQuestionsRaw() {
   try {
      let res = await axios(QUESTIONS + window.location.search);
      console.error('getQuestions result', res.data);
      return res.data;
   } catch (error) {
      return error;
   }
   //   console.log(res.data.results);
}

export async function getQuestion(slug) {
   try {
      let res = await axios(QUESTIONS + slug);
      // console.log('getQuestion result', res);
      return res.data;
   } catch (error) {
      return error;
   }
}

export async function getSimilarQuestions(slug) {
   try {
      let res = await axios.post(QUESTIONS + slug + '/similar_questions/');
      console.log('getSimQuestions result', res);
      return res.data;
   } catch (error) {
      console.log('getSimQs error', error);
      return error;
   }
}

export async function getUsers() {
   try {
      let res = await axios.get(USER_LIST + window.location.search);
      console.log(res, 'ernas');
      return res.data;
   } catch (error) {
      console.log(error);
      return error;
   }
}
