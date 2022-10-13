import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from 'redux/auth/operations';

function useLogoutUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return logout;
}

export default useLogoutUser;
