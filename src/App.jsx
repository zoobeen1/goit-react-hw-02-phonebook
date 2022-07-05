import { Component } from 'react';
import { nanoid } from 'nanoid';
import { InputForm } from './components/1orm';
import { Container } from './components/1ommon';
import { Contacts } from './components/1ontacts';
import { Filter } from './components/1ilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = values => {
    const name = values.name;
    const names = this.state.contacts.map(contact => contact.name);

    if (!names.includes(name)) {
      const newContact = {
        name,
        id: nanoid(),
        number: values.number,
      };
      this.setState({
        contacts: [...this.state.contacts, newContact],
      });
      return true;
    }

    alert(`${name} is already in contacts`);
    return false;
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const lowercaseFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(lowercaseFilter);
    });
  };

  // *************************************************************************
  render() {
    const { filter } = this.state;

    return (
      <Container>
        <h2>Phonebook</h2>
        <InputForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={this.getVisibleContacts()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
