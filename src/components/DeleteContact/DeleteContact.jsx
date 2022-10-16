import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { ReactComponent as DeleteContact } from 'img/icons/delete.svg';
import styles from './DeleteContact.module.scss';
import useDeletingContact from 'hooks/useDeletingContact';

export default function DeletingContact({ id, name }) {
  const { isDeleting, deleteSelectedContact } = useDeletingContact(id, name);

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

DeletingContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
