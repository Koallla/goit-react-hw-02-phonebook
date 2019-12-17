import React from 'react';
import T from 'prop-types';

const FormInput = ({ onChange, onSubmit, valueName, valueNumber }) => (
  <>
    <h2>Phonebook</h2>
    <p>Name</p>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={valueName}
        onChange={onChange}
        placeholder="Enter contact"
      />
      <p>Number</p>
      <input
        type="text"
        name="number"
        value={valueNumber}
        onChange={onChange}
        placeholder="Enter number"
      />

      <button type="submit">Add contact</button>
    </form>
  </>
);

FormInput.propTypes = {
  onChange: T.func.isRequired,
  onSubmit: T.func.isRequired,
  valueName: T.node.isRequired,
  valueNumber: T.node.isRequired,
};

export default FormInput;
