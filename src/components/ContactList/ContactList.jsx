import React from 'react';
// import shortid from 'short-id';
import T from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button type="submit" onClick={() => onDelete(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: T.arrayOf(T.shape({})).isRequired,
  onDelete: T.func.isRequired,
};

export default ContactList;
