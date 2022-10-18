import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'redux/auth/operations';

function useLoginUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
    navigate('/');
  };

  return { onSubmitForm };
}

export default useLoginUser;
