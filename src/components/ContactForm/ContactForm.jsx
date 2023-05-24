import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectIsLoading } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { nanoid } from 'nanoid';

import { Form, InputWraper, Input, Button } from './ContactForm.styled';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const onSubmitContact = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const telInputId = nanoid();

  return (
    <Form action="" onSubmit={onSubmitContact}>
      <InputWraper>
        <label htmlFor={nameInputId}>Name</label>
        <Input
          id={nameInputId}
          type="text"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputWraper>
      <InputWraper>
        <label htmlFor={telInputId}>Number</label>
        <Input
          mask="999-999-9999"
          id={telInputId}
          type="tel"
          value={number}
          onChange={({ target: { value } }) => setNumber(value)}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWraper>

      <Button type="submit" disabled={isLoading}>
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
