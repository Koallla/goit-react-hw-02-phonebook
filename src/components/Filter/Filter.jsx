import React from 'react';
import T from 'prop-types';

const Filter = ({ value, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <input
      type="text"
      value={value}
      name="filter"
      placeholder="To find contact ..."
      onChange={onChange}
    />
  </>
);

Filter.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default Filter;
