import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operations';
import { getIsRefreshing } from 'redux/auth/selecors';

function useRefreshCurrentUser() {
  const isRefreshing = useSelector(state => getIsRefreshing(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return { isRefreshing };
}

export default useRefreshCurrentUser;
