const base = 'http://localhost:5000/api';
const baseURLProd = 'https://softclik-softvote.herokuapp.com';
const URLs = {
  currentUser: `${base}/users/current_user`,
  authWithGoogle: `${base}/auth/google`,
  signup: `${base}/auth/signup`,
  login: `${base}/auth/login`,
  logout: `${base}/auth/logout`,
};
export default URLs;
