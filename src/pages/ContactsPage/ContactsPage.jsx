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

//
// import ContactList from 'components/ContactList';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import styles from './ContactsPage.module.scss';

// import { contactSchema } from 'utils/validationSchema';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContacts, deleteContacts, changeFilter } from 'redux/contactsSlice';

// export default function ContactsPage() {
//   const state = useSelector(state => state);
//   const dispatch = useDispatch();

//   const setValueSubmitForm = data => {
//     if (checkAddingContacts(data.name)) {
//       alert(`${data.name} is already in contacts!`);
//       return;
//     }
//     dispatch(addContacts(data));
//   };

//   const checkAddingContacts = name => {
//     return state.contacts.find(
//       el => el.name.toLowerCase() === name.toLowerCase()
//     );
//   };

//   const filterContacts = () => {
//     const lowerFilter = state.filter.toLowerCase();
//     return state.contacts.filter(el => {
//       return el.name.toLowerCase().includes(lowerFilter);
//     });
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.Formwrapper}>
//         <h1>Phonebook</h1>
//         <ContactForm
//           submitForm={setValueSubmitForm}
//           validationSchema={contactSchema}
//         />
//         <h2>Contacts</h2>
//         <Filter
//           changeInput={e => dispatch(changeFilter(e.currentTarget.value))}
//         />
//       </div>
//       <ContactList
//         contacts={filterContacts()}
//         deleteBtn={id => dispatch(deleteContacts(id))}
//       />
//     </div>
//   );
// }
