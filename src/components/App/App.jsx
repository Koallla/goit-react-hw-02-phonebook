import React, { Component } from 'react';
import shortid from 'short-id';
import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';

export default class App extends Component {
  state = {
    contacts: [],
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

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { contacts } = this.state;

    return (
      <div>
        <ContactForm
          valueName={name}
          valueNumber={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <section>
          <h2>Contacts</h2>
          <Contacts contacts={contacts} />
        </section>
      </div>
    );
  }
}
