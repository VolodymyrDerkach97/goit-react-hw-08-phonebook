import axios from 'axios';
axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const registerApi = async credentials => {
  const res = await axios.post('/users/signup', credentials);
  return res.data;
};

export const logInApi = async credentials => {
  const res = await axios.post('/users/login', credentials);
  return res.data;
};

export const logOutApi = async () => {
  await axios.post('/users/logout');
};

export const refreshUserApi = async () => {
  const res = await axios.get('/users/current');

  return res.data;
};
