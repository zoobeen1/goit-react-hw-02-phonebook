import React from 'react';
import { Box } from '../common';
export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <Box width="95%" mt="10px">
      {contacts.map(contact => {
        return (
          <Box as="ul" key={contact.id} p="0px">
            <Box
              as="li"
              display="flex"
              justifyContent="space-between"
              pl="5px"
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
