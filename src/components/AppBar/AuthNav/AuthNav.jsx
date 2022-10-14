import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.scss';
//
// import LoginForm from 'components/LoginForm';

function AuthNav() {
  return (
    <ul className={styles.List}>
      <li className={styles.Item}>
        <NavLink className={styles.Link} to="/register">
          Sign up
        </NavLink>
      </li>
      <li className={styles.Item}>
        <NavLink className={styles.Link} to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );
}

export default AuthNav;
