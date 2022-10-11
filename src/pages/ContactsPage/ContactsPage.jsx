import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import AddContactButton from 'components/AddContactButton';
import Message from 'components/Message';
import { useGetContactsQuery } from 'redux/contacts/api';
import styles from './ContactsPage.module.scss';

export default function ContactsPage() {
  const { data } = useGetContactsQuery();

  return (
    <div className={styles.wrapper}>
      <AddContactButton text="Add new contact" />
      <div className={styles.Formwrapper}>
        <Filter />
      </div>
      {!data || data.length === 0 ? <Message /> : <ContactList />}
    </div>
  );
}
