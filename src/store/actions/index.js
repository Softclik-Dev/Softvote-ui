import axios from 'axios';
import { FETCH_CURRENT_USER } from './type';
import URLs from '../../config/URLs';

export const fetchCurrentUser = () => async (dispatch) => {
  const res = await axios.get(URLs.currentUser, {
    headers: { authorization: `Bearer ${window.localStorage.getItem('jwt')}` },
  });
  dispatch({ type: FETCH_CURRENT_USER, payload: res.data });
};
