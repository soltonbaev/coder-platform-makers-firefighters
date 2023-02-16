import axios from 'axios';

const BASE_URL = 'http://104.199.234.60/api/v1';

// login and logout
export const LOGIN = BASE_URL + '/login/';
export const LOGOUT = BASE_URL + '/logout/';
export const REFRESH = BASE_URL + '/refresh/';

// register
export const REGISTER = BASE_URL + '/register/';
export const ACTIVATE = BASE_URL + '/activate/';

// password handling
export const FORGOT_PASSOWRD = BASE_URL + '/forgot_password/';
export const FORGOT_PASSOWRD_COMPLETE = BASE_URL + '/forgot_password_complete/';
export const CHANGE_PASSWORD = BASE_URL + '/change_password/';

// questions
export const QUESTIONS = BASE_URL + '/questions/';
export const QUESTIONS_REVIEWS = BASE_URL + '/question-reviews/';

// answers
export const ANSWERS = BASE_URL + '/answers/';
export const ANSWERS_REVIEW = BASE_URL + '/answer-reviews/';

// others
export const COMMENTS = BASE_URL + '/comments/';
export const FAVORITES = BASE_URL + '/favorites/';
export const PROFILE = BASE_URL + '/profile/';
export const TAGS = BASE_URL + '/tags/';
