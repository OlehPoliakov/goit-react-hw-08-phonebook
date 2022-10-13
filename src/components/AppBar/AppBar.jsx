import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selecors';
import Navigation from './Navigation';
import Logo from './Logo';
import AuthNav from './AuthNav';
import UserBar from './UserBar';
import styles from './AppBar.module.scss';

export default function Appbar() {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      {isLoggedIn ? <UserBar /> : <AuthNav />}
    </header>
  );
}
