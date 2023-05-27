import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        console.log(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map(contact => {
          if (contact.id === action.payload.id) {
            return (contact = action.payload);
          }
          return contact;
        });
      })
      .addCase(editContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { addContactAction, deleteContactAction, editContactAction } =
  contactsSlice.actions;
