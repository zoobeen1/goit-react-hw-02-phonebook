import { Box } from '../common';
import { Formik, ErrorMessage } from 'formik';
import { Input, FormStyled } from './form.styled';
import * as yup from 'yup';
import { ErrorText } from './form.styled';
import PropTypes from 'prop-types';

export const InputForm = ({ onSubmit }) => {
  const INITIAL_VALUES = { name: '', number: '' };
  //Validation schema
  const schema = yup.object().shape({
    name: yup.string().min(5).max(40).required('Name is required'),
    number: yup.string().min(5).max(13).required('Phone is required'),
  });
  //Submit function
  function handleSubmit(values, { resetForm }) {
    if (onSubmit(values)) resetForm();
  }
  //Validation Error function
  function FormError({ name }) {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  }
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <label htmlFor="name">Name</label>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Add a new contact"
          required
        ></Input>
        <FormError name="name" />

        <label htmlFor="number">Phone</label>

        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Add a phone number"
          required
        ></Input>
        <FormError name="number" />

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
      </FormStyled>
    </Formik>
  );
};
InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
