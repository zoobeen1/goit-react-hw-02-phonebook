import React from 'react';
import { Box } from '../Common';
import PropTypes from 'prop-types';
export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <Box width="95%" mt="10px" pt="20px">
      {contacts.map(contact => {
        return (
          <Box as="ul" key={contact.id} p="0px">
            <Box
              as="li"
              display="flex"
              justifyContent="space-between"
              fontWeight="500"
              mb="10px"
            >
              {`${contact.name}:`}
              <p> {contact.number} </p>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
