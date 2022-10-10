import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import AddContactButton from 'components/AddContactButton';
import styles from './ContactsPage.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, changeFilter } from 'redux/contactsSlice';

export default function ContactsPage() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const lowerFilter = state.filter.toLowerCase();
    return state.contacts.filter(el => {
      return el.name.toLowerCase().includes(lowerFilter);
    });
  };

  return (
    <div className={styles.wrapper}>
      <AddContactButton text="Add new contact" />
      <div className={styles.Formwrapper}>
        <Filter
          changeInput={e => dispatch(changeFilter(e.currentTarget.value))}
        />
      </div>
      <ContactList
        contacts={filterContacts()}
        deleteBtn={id => dispatch(deleteContacts(id))}
      />
    </div>
  );
}
