import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../../redux/';

import { DeleteButton, Contact, ContactWrapper } from './ContactsItem.styled';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

const ContactsItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <Contact>
      <ContactWrapper>
        {name}: <br />
        {phone}
      </ContactWrapper>

      <DeleteButton
        onClick={() => {
          dispatch(deleteContact({ name, id }));
        }}
        disabled={isLoading}
      >
        Delete
      </DeleteButton>
    </Contact>
  );
};

export default ContactsItem;
