import React from 'react';
import shortid from 'short-id';
import T from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li key={shortid.generate()}>
          {el.name}: {el.number}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: T.arrayOf(T.shape({})).isRequired,
};

export default ContactList;
