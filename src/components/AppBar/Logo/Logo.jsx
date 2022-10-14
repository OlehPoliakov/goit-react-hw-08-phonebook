import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <NavLink className={styles.link} to="/">
      Phone<span className={styles.logo}>book</span>
    </NavLink>
  );
}

export default Logo;
