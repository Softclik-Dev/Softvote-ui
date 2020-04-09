import axios from 'axios';
import { FETCH_CURRENT_USER } from './type';

const baseURL = 'http://localhost:5000';
const baseURLProd = 'https://softclik-softvote.herokuapp.com';
const URLs = {
  geLoggedInUser: `${baseURL}/api/auth/current_user`,
};

export const fetchCurrentUser = () => async (dispatch) => {
  const res = await axios.get(URLs.geLoggedInUser);
  dispatch({ type: FETCH_CURRENT_USER, payload: res.data });
};
