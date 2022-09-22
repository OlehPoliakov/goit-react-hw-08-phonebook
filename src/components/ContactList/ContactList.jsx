import PropTypes from 'prop-types';
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import {
  List,
  Item,
  Name,
  Number,
  Delete,
  Icon,
  Wraper,
} from './ContactList.styled.jsx';

export default function ContactList({ contacts, ondDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Wraper>
            <Icon>
              <FaUserAlt />
            </Icon>
            <Name>{name}:</Name>
          </Wraper>
          <Wraper>
            <Number>{number}</Number>
            <Delete type="button" onClick={() => ondDeleteContact(id)}>
              <FaTrashAlt />
            </Delete>
          </Wraper>
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func,
};
