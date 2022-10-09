import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import ContactItem from 'components/ContactItem';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, deleteBtn }) => {
  return (
    <motion.ul className={styles.list}>
      <AnimatePresence>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteBtn={deleteBtn}
            />
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteBtn: PropTypes.func.isRequired,
};
