import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from './Box';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Container } from './App.styled';
import SectionTitle from './SectionTitle/SectionTitle';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Message from './Message/Message';
import baseContacts from '../db/contacts.json';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || baseContacts
  );
  const [filter, setFilter] = useState('');

  // Запись в LocalStorage контакты
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Добавляем контакт
  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? Report.info(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  // Удаляем контакт
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  // Фильтр контактов

  const changeFilter = e => setFilter(e.currentTarget.value);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Box>
        <SectionTitle title="Phonebook" />
        <ContactForm onSubmit={addContact} />
      </Box>
      <Box>
        <SectionTitle title="Contacts" />
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={filterContacts()}
            ondDeleteContact={deleteContact}
          />
        ) : (
          <Message text="Your phonebook is empty. Please add contact." />
        )}
      </Box>
    </Container>
  );
}
