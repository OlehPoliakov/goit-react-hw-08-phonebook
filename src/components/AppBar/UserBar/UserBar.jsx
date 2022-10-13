import { BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { getName, getEmail } from 'redux/auth/selecors';
import useLogoutUser from 'hooks/logoutUser';

function UserBar() {
  const userName = useSelector(state => getName(state));
  const userEmail = useSelector(state => getEmail(state));
  const logout = useLogoutUser();

  return (
    <>
      <div>
        <BiUser />
        <div>
          <p>
            Welcome, <span>{userName}</span>
          </p>
          <p>{userEmail}</p>
        </div>
      </div>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default UserBar;
