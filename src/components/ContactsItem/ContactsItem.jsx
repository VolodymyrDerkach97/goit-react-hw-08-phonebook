import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditContactModal from 'components/EditContact/EditContact';
import {
  ContactButtonStyled,
  Contact,
  ContactWrapper,
  ButtonWrapper,
} from './ContactsItem.styled';

const ContactsItem = ({ name, id, number, email }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const togleModal = () => {
    setShowEditModal(prev => !prev);
  };
  return (
    <Contact>
      {showEditModal && <EditContactModal onClose={togleModal} editID={id} />}
      <ContactWrapper>
        {name}: <br />
        {number}
        {email}
      </ContactWrapper>

      <ButtonWrapper>
        <ContactButtonStyled
          onClick={togleModal}
          disabled={isLoading}
          startIcon={<EditIcon />}
        >
          Edit
        </ContactButtonStyled>
        <ContactButtonStyled
          onClick={() => {
            dispatch(deleteContact({ name, id }));
          }}
          disabled={isLoading}
          startIcon={<DeleteIcon />}
        >
          Delete
        </ContactButtonStyled>
      </ButtonWrapper>
    </Contact>
  );
};

export default ContactsItem;
