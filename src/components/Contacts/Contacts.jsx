import ContactsItem from '../ContactsItem';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.length !== 0 ? (
          contacts.map(props => <ContactsItem key={props.id} {...props} />)
        ) : (
          <li>No contacts found</li>
        )}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
