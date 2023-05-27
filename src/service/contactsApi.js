import axios from 'axios';

export const fetchContactsApi = async () => {
  try {
    const res = await axios.get('/contacts');
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const addContactsApi = async addContact => {
  const res = await axios.post('/contacts', addContact);

  return res.data;
};

export const deleteContactsApi = async contactId => {
  const res = await axios.delete(`/contacts/${contactId}`);

  return res.data;
};

export const editContactsApi = async ({ id, ...credentials }) => {
  const res = await axios.patch(`/contacts/${id}`, credentials);

  return res.data;
};
