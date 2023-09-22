import PropTypes from 'prop-types';
import { Box } from '../Common';
export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contact by name</label>
      <Box
        as="input"
        mt={2}
        p={2}
        border="normal"
        borderRadius="normal"
        width="95%"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Find contact by name"
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
