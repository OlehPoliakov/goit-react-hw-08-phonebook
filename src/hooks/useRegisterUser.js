import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'redux/auth/operations';

function useRegisterUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ name, email, password }) => {
    dispatch(registerUser({ name, email, password }));
    navigate('/contacts');
  };

  return { onSubmitForm };
}

export default useRegisterUser;
