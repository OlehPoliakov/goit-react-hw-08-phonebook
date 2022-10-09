import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { variants } from 'utils/motionVar';
import { ReactComponent as AddContact } from 'img/icons/contact.svg';
import { ReactComponent as DeleteContact } from 'img/icons/delete.svg';
import styles from './ContactItem.module.scss';

const ContactItem = ({ id, name, number, deleteBtn }) => {
  return (
    <motion.li
      className={styles.item}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      variants={variants}
    >
      <AddContact width="40" height="40" fill="#222024a1" />
      <p className={styles.info}>
        <b>{name}</b>
        <em>{number}</em>
      </p>
      <button
        className={styles.Delete}
        type="button"
        aria-label="delete"
        onClick={() => deleteBtn(id)}
      >
        <DeleteContact width="22" height="22" fill="#222024a1" />
      </button>
    </motion.li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteBtn: PropTypes.func.isRequired,
};

export default ContactItem;
