import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from './NotFound.module.scss';

function NotFound({ data, status }) {
  return (
    <>
      <p className={styles.Title}>
        Sorry {status} {data} :(
      </p>
      <p className={styles.Text}>Try reloading the page.</p>
      <NavLink to="/" className={styles.Title}>
        Go back to the main page
      </NavLink>
    </>
  );
}

NotFound.prototype = {
  data: propTypes.string,
  status: propTypes.number,
};

export default NotFound;
