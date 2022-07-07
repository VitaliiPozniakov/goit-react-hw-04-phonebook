import React from 'react';
import { List, Span, Item, Btn } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, number, name }) => (
        <Item key={id}>
          <Span></Span>
          {name}: {number}
          <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
