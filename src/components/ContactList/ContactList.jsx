import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetContactsQuery } from 'redux/contacts/api';
import ContactItem from 'components/ContactItem';
import Container from 'components/Container';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import styles from './ContactList.module.scss';
import useFiltredContacts from 'hooks/useFiltredContacts';

const ContactList = () => {
  const { data: contacts, isFetching, error, refetch } = useGetContactsQuery();
  const { filteredContactList } = useFiltredContacts();

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <motion.ul className={styles.list}>
        <AnimatePresence>
          {isFetching && <Loader />}
          {error && <NotFound data={error.data} status={error.status} />}
          {contacts &&
            filteredContactList.map(({ id, name, number }) => {
              return (
                <ContactItem key={id} id={id} name={name} number={number} />
              );
            })}
        </AnimatePresence>
      </motion.ul>
    </Container>
  );
};

export default ContactList;
