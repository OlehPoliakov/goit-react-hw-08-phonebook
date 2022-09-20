// import PropTypes from 'prop-types';
import { Item, Name, Number, Delete } from './ContactList.styled.jsx';

export default function ContactList({ contacts, ondDeleteContact }) {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}:</Name>
          <Number>{number}</Number>
          <Delete type="button" onClick={() => ondDeleteContact(id)}>
            delete
          </Delete>
        </Item>
      ))}
    </>
  );
}
