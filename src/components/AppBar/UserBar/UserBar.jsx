import { useSelector } from 'react-redux';
import { getName, getEmail } from 'redux/auth/selecors';
import useLogoutUser from 'hooks/useLogoutUser';
import { ReactComponent as User } from 'img/icons/user.svg';
import styles from './UserBar.module.scss';

function UserBar() {
  const userName = useSelector(state => getName(state));
  const userEmail = useSelector(state => getEmail(state));
  const logout = useLogoutUser();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.GroupWrapper}>
        <User
          className={styles.UserIcon}
          width="60"
          height="60"
          fill="#222024a1"
        />
        <div className={styles.TextWrapper}>
          <p className={styles.Text}>
            Welcome, <span className={styles.UserName}>{userName}</span>
          </p>
          <p className={styles.UserEmail}>{userEmail}</p>
        </div>
      </div>
      <button className={styles.Button} type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default UserBar;
