import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operations';
import { getIsRefreshing } from 'redux/auth/selecors';

function useRefreshCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  const isRefreshing = useSelector(state => getIsRefreshing(state));
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentUser(dispatch(getCurrentUser()));
  }, [dispatch]);

  return { currentUser, isRefreshing };
}

export default useRefreshCurrentUser;
