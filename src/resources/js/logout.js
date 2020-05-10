import axios from 'axios';
import URLs from '../../config/URLs';

export default async () => {
  try {
    await axios.get(URLs.logout, {
      headers: {
        authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
      },
    });
    window.localStorage.setItem('jwt', '');
    window.location.replace('/');
  } catch (err) {
    window.localStorage.setItem('jwt', '');
    window.location.replace('/');
  }
};
