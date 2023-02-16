import axios from 'axios';
import {REGISTER} from './globals';

export function setToStorage(data) {
   localStorage.setItem('token', JSON.stringify(data));
}
