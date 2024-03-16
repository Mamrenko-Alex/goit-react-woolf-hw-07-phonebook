import React from 'react';
import styles from './PhoneBook.module.css';

export const ContactListItem = ({ id, name, phone, onDelete }) => {
  return (
    <li className={styles.contact_item}>
      <div>
        <span className={styles.name_item}>{name}&nbsp; - &nbsp;</span>
        <span className={styles.phone_item}>{phone}</span>
      </div>
      <button
        className={styles.delete_item_button}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};
