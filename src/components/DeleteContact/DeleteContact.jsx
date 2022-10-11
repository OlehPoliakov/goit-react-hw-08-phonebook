import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDeleteContactMutation } from 'redux/contacts/api';
import Loader from 'components/Loader';
import { ReactComponent as DeleteContact } from 'img/icons/delete.svg';
import styles from './DeleteContact.module.scss';

export default function DeletingContact({ id, name }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    deleteContact(id);
    Notify.success(`The ${name} has been removed from your contact list.`);
  };

  return (
    <>
      <button
        className={styles.Delete}
        type="button"
        aria-label="delete"
        onClick={deleteSelectedContact}
      >
        {isDeleting ? (
          <Loader width={30} />
        ) : (
          <DeleteContact width="22" height="22" fill="#222024a1" />
        )}
      </button>
    </>
  );
}

DeletingContact.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
