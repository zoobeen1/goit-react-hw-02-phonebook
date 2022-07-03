import { Box } from '../common';
export const Contacts = ({ contacts }) => {
  return (
    <Box>
      <h2>Contacts</h2>
      {contacts.map(contact => {
        return (
          <ul key={contact.id}>
            <li>{contact.name}</li>
          </ul>
        );
      })}
    </Box>
  );
};
