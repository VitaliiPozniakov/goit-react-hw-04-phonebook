import { Component } from 'react';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { Container } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notification from './Notification';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount () {
const contactFromLocalStorage = localStorage.getItem('contacts')
const ParsedContactFromLocalStorage =  JSON.parse(contactFromLocalStorage)
ParsedContactFromLocalStorage && this.setState({contacts: ParsedContactFromLocalStorage})
  }
  
  componentDidUpdate (prevProps, prevState) {
 if (this.state.contacts !== prevState.contacts) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts) )
 }
  }
 

  addContact = (name, number) => {
    // console.log(name, number)

    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    if (
      name.trim() === null ||
      name.trim() === `` ||
      number.trim() === null ||
      number.trim() === ``
    ) {
      Notify.warning(`all fields must be completed`);
      return;
    }

    this.state.contacts.some(contact => contact.name === name)
      ? Notify.warning(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { contacts, filter } = this.state;
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmitProp={this.addContact} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 1 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )}
          {contacts.length > 0 ? (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Notification message="Your contactlist is empty" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
