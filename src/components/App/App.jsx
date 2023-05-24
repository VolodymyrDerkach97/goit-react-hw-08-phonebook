import Contacts from '../Contacts';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import { Container } from './App.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalaizeContacts = filter.toLowerCase();
    return [...contacts]
      .filter(contact =>
        contact.name.toLowerCase().includes(normalaizeContacts)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <p>Total number of contacts: {contacts.length} </p>
      <Filter />
      <Contacts contacts={filterContacts()} />

      <ToastContainer autoClose={2000} />
    </Container>
  );
};
