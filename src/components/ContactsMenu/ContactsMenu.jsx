import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from '../Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactsMenu = () => {
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
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Total number of contacts: {contacts.length} </p>

      <Contacts contacts={filterContacts()} />
    </>
  );
};
export default ContactsMenu;
