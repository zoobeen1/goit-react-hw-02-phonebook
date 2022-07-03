import { Component } from 'react';
import { Form } from './components/form';
import { Container } from './components/common';
import { nanoid } from 'nanoid';
import { Contacts } from './components/contacts';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    if (name) {
      const newContact = {
        name,
        id: nanoid(),
      };
      this.setState({
        contacts: [...this.state.contacts, newContact],
        name: '',
      });
    }
  };

  render() {
    return (
      <Container>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleSubmit} />
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}
