export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectOneContact = (state, id) => console.log(id);

export const getOneContact = (contacts, id) => {
  return contacts.filter(contact => id === contact.id);
};
