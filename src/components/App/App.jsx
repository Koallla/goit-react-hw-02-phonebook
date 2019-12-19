import React, { Component } from 'react';
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

// const matchCheck = (contacts, contact) =>
// {contacts.forEach(element => if (element.name === contact.name) {
//   alert('FAILLLLL')
// } else continue)}

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = contact => {
    const findContact = findToMatch(this.state.contacts, contact);
    findContact
      ? alert(`${findContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onChange={this.handleChange}
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
