import styles from './PhoneBook.module.css';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { SearchFilter } from './SearchFilter';
import { Notification } from './Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operation';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.hero}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <SearchFilter />
      {isLoading && contacts.length && <Notification>Loading...</Notification>}
      {error && <div>{error}</div>}
      {!contacts.length ? (
        isLoading ? (
          <Notification>Loading...</Notification>
        ) : (
          <Notification>You don't have any contacts yet</Notification>
        )
      ) : (
        <ContactList />
      )}
    </div>
  );
};
