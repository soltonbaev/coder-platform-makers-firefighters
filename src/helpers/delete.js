import axios from 'axios';

export function clearStorage() {
   localStorage.removeItem('token');
   localStorage.removeItem('uid');
}
