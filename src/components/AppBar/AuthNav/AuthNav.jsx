import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <ul>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
}

export default AuthNav;
