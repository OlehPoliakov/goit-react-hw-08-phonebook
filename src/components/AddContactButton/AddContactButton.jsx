import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function AddContactButton({ text }) {
  return (
    <NavLink to="/contacts/add">
      <Button variant="outline-primary">
        <BsFillPersonPlusFill size={20} />
        <p>{text}</p>
      </Button>
      {/* <BsFillPersonPlusFill size={20} /> */}
    </NavLink>
  );
}

AddContactButton.propTypes = {
  text: PropTypes.string,
};

export default AddContactButton;
