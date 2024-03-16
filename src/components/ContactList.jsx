import { useDispatch, useSelector } from 'react-redux';
import styles from './PhoneBook.module.css';
import { deleteContact } from '../redux/operation';
import { selectAvailableContacts } from '../redux/selector';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(selectAvailableContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contacts_list}>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          onDelete={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
