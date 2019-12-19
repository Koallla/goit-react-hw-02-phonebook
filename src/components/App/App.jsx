import React, { Component } from 'react';
import styles from './app.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const findToMatch = (contacts, contact) => {
  return contacts.find(
    element => element.name.toLowerCase() === contact.name.toLowerCase(),
  );
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = contact => {
    const findContact = findToMatch(this.state.contacts, contact);
    if (contact.name) {
      // eslint-disable-next-line no-unused-expressions
      findContact
        ? alert(`${findContact.name} is already in contacts`)
        : this.setState(prevState => ({
            contacts: [...prevState.contacts, contact],
          }));
    } else {
      alert('Input name!');
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm
          onChange={this.handleChange}
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
