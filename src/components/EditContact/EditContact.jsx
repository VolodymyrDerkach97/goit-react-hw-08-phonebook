import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/operations';
import {
  getOneContact,
  selectContacts,
  selectIsLoading,
} from 'redux/selectors';

import { nanoid } from 'nanoid';

import {
  Overlay,
  ModalStyled,
  InputWrapper,
  InputStyled,
} from './EditContact.styled';
import { toast } from 'react-toastify';

const portalModal = document.querySelector('#modal-root');

const EditContactModal = ({ onClose, editID }) => {
  const contacts = useSelector(selectContacts);
  const getEditContact = getOneContact(contacts, editID);

  const [name, setName] = useState(getEditContact[0].name);
  const [number, setNumber] = useState(getEditContact[0].number);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const onSubmitContact = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    dispatch(editContact({ name, number, id: editID }));
    onClose();
  };

  const onCloseOverlay = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onCloseKey = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseKey);
    return () => window.removeEventListener('keydown', onCloseKey);
  }, [onClose]);

  const nameInputId = nanoid();
  const telInputId = nanoid();

  return createPortal(
    <Overlay onClick={onCloseOverlay}>
      <ModalStyled>
        <form action="" onSubmit={onSubmitContact}>
          <h3>Edit menu</h3>
          <InputWrapper>
            <label htmlFor={nameInputId}>Name</label>
            <InputStyled
              id={nameInputId}
              type="text"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor={telInputId}>Number</label>
            <InputStyled
              mask="+999-999-9999"
              id={telInputId}
              type="tel"
              value={number}
              onChange={({ target: { value } }) => setNumber(value)}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputWrapper>

          <button type="submit" disabled={isLoading}>
            Edit contact
          </button>
        </form>
      </ModalStyled>
    </Overlay>,
    portalModal
  );
};

export default EditContactModal;

EditContactModal.propTypes = {
  onClose: PropTypes.func,
  editID: PropTypes.string,
};
