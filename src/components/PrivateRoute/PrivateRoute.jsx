import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selecors';

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
