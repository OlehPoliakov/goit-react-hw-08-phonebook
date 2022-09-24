import PropTypes from 'prop-types';
import { ReactComponent as AddContact } from '../../icons/contact.svg';
import { ReactComponent as DeleteContact } from '../../icons/delete.svg';
import {
  List,
  Item,
  Name,
  Number,
  Delete,
  Add,
  Wraper,
} from './ContactList.styled.jsx';

export default function ContactList({ contacts, ondDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Wraper>
            <Add>
              <AddContact width="40" height="40" fill="#222024a1" />
            </Add>

            <Name>{name}:</Name>
          </Wraper>

          <Wraper>
            <Number>{number}</Number>

            <Delete type="button" onClick={() => ondDeleteContact(id)}>
              <DeleteContact width="20" height="20" fill="#ff0000aa" />
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
