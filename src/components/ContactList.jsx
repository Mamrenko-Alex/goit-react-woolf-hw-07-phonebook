import { useDispatch, useSelector } from 'react-redux';
import styles from './PhoneBook.module.css';
import { deleteContact } from '../redux/operation';
import { selectAvailableContacts } from '../redux/selector';

export const ContactList = () => {
  const contacts = useSelector(selectAvailableContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact_item}>
          {name} {number}
          <button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
