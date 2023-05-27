import Contacts from '../Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/operations';
import AddContactModal from 'components/AddContact/AddContact';
import Filter from '../Filter';

import { Wrapper } from './ContactsMenu.styled';
import { Button } from '@mui/material';

const ContactsMenu = () => {
  const [showModal, setShowModal] = useState(false);
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

  const togleModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <>
      <Wrapper>
        {showModal && <AddContactModal onClose={togleModal} />}

        <p>Total number of contacts: {contacts.length} </p>
        <Filter />
        <Button
          variant="contained"
          onClick={() => {
            setShowModal(prev => !prev);
          }}
        >
          add contact
        </Button>
      </Wrapper>

      <Contacts contacts={filterContacts()} />
    </>
  );
};
export default ContactsMenu;
