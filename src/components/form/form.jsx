import { Box } from '../common';
export const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Box
      as="input"
      p={2}
      border="normal"
      borderRadius="normal"
      width="90%"
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      placeholder="Add a new contact"
      required
    />

    <Box
      as="button"
      type="submit"
      mt={2}
      bg="button_color"
      color="light_text"
      border="normal"
      borderRadius="normal"
      px={3}
      py={2}
    >
      {'Add contact'}
    </Box>
  </form>
);
