import { Box } from 'utils/Box';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import AddContactButton from 'components/AddContactButton';
import Message from 'components/Message';
import { useGetContactsQuery } from 'redux/contacts/api';

export default function ContactsPage() {
  const { data: contacts } = useGetContactsQuery();

  return (
    <Box pt="30px" textAlign="center">
      <AddContactButton text="Add new contact" />
      <Box borderRadius={2}>
        <Filter />
      </Box>
      {contacts && contacts.length > 0 ? <ContactList /> : <Message />}
    </Box>
  );
}
