import axios from 'axios';
axios.defaults.baseURL = `https://646604cd9c09d77a62faa022.mockapi.io/contacts/`;

export const fetchContactsApi = async () => {
  try {
    const res = await axios.get();

    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const addContactsApi = async addContact => {
  const res = await axios.post(
    'https://646604cd9c09d77a62faa022.mockapi.io/contacts/',
    addContact
  );

  return res.data;
};

export const deleteContactsApi = async contactId => {
  const res = await axios.delete(contactId);

  return res.data;
};
