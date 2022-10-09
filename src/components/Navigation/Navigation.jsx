import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/home">
        Home
      </NavLink>

      <NavLink className={styles.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
