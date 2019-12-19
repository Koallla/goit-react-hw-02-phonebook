import React, { Component } from 'react';
import shortid from 'short-id';

import T from 'prop-types';

export default class FormInput extends Component {
  static propTypes = {
    onAddContact: T.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };
    const { onAddContact } = this.props;

    onAddContact(contact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <p>Name</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter contact"
          />
          <p>Number</p>
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Enter number"
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

// import React from 'react';
// import T from 'prop-types';

// const FormInput = ({ onChange, onSubmit, valueName, valueNumber }) => (
//   <>
//     <p>Name</p>
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={valueName}
//         onChange={onChange}
//         placeholder="Enter contact"
//       />
//       <p>Number</p>
//       <input
//         type="text"
//         name="number"
//         value={valueNumber}
//         onChange={onChange}
//         placeholder="Enter number"
//       />

//       <button type="submit">Add contact</button>
//     </form>
//   </>
// );

// FormInput.propTypes = {
//   onChange: T.func.isRequired,
//   onSubmit: T.func.isRequired,
//   valueName: T.string.isRequired,
//   valueNumber: T.string.isRequired,
// };

// export default FormInput;
