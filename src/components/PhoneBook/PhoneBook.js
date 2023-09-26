import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { Div, Title, ContactsTitle } from './PhoneBookStyles.js';

import { ContactForm } from 'components/ContactForm/ContactForm.js';

import { ContactList } from 'components/ContactList/ContactList.js';

import { Filter } from 'components/Filter/Filter.js';

import { fetchContacts } from 'redux/operations.js';

import { getContacts } from 'redux/selectors.js';

const PhoneBook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error } = useSelector(getContacts);

  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {error && <p>Error...</p>}
      {!isLoading && <ContactList />}
    </Div>
  );
};

export { PhoneBook };
