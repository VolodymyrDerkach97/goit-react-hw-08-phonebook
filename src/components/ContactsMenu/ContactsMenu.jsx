import Contacts from '../Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/operations';
import AddContactModal from 'components/AddContactModal/AddContactModal';
import Filter from '../Filter';

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
      <h2>Phonebook</h2>
      <button
        onClick={() => {
          setShowModal(prev => !prev);
        }}
      >
        add contact modal
      </button>
      {showModal && <AddContactModal onClose={togleModal} />}

      <h2>Contacts</h2>
      <p>Total number of contacts: {contacts.length} </p>
      <Filter />
      <Contacts contacts={filterContacts()} />
    </>
  );
};
export default ContactsMenu;
