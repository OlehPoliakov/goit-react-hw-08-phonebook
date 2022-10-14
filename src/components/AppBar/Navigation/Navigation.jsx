import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selecors';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <nav className={styles.nav}>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/home">
          Home
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
