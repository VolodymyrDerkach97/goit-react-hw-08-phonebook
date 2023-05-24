import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';



export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: [ 'payload.headers', 'payload.config', 'payload.request'],
      },
    }),
});


