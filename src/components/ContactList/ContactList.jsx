import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetContactsQuery } from 'redux/contacts/api';
import { getFilter } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <motion.ul className={styles.list}>
      <AnimatePresence>
        {isFetching && <Loader />}
        {error && <NotFound data={error.data} status={error.status} />}
        {filteredContactList.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </AnimatePresence>
    </motion.ul>
  );
};

export default ContactList;
