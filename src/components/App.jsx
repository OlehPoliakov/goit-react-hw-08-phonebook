import React from 'react';
import { Box } from './Box';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Container } from './App.styled';
import SectionTitle from './SectionTitle/SectionTitle';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Message from './Message/Message';
import baseContacts from './db/contacts.json';
import { flex } from 'styled-system';

export class App extends React.Component {
  state = {
    contacts: baseContacts,
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? Report.info(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <Box>
          <Box>
            <SectionTitle title="Phonebook" />
            <ContactForm onSubmit={this.addContact} />
          </Box>

          <Box>
            <Box>
              <SectionTitle title="Contacts" />
              <Filter value={filter} onChange={this.changeFilter} />
            </Box>
            {contacts.length > 0 ? (
              <ContactList
                contacts={this.filterContacts()}
                ondDeleteContact={this.deleteContact}
              />
            ) : (
              <Message text="Your phonebook is empty. Please add contact." />
            )}
          </Box>
        </Box>
      </Container>
    );
  }
}
{
  /* <SectionTitle contactsLength={contacts.length} title="Contacts" />; */
}
