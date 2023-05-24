import {
  addContactsApi,
  deleteContactsApi,
  fetchContactsApi,
} from 'service/contactsApi';
import { toast } from 'react-toastify';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const res = await toast.promise(fetchContactsApi(), {
        pending: 'Loading...',
        success: 'Contacts loaded 👌',
        error: `Error🤯`,
      });
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const res = await toast.promise(addContactsApi(contact), {
        pending: 'Loading...',
        success: `Contacts ${contact.name} added 👌`,
        error: `Error🤯`,
      });
      return res;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ name, id }, thunkApi) => {
    try {
      const res = await toast.promise(deleteContactsApi(id), {
        pending: 'Loading...',
        success: `Contact ${name} deleted 👌`,
        error: `Deletion error ${name} 🤯`,
      });
      return res;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
