import { Box } from '../Common';

export const List = ({ children, ...props }) => {
  return (
    <Box {...props} as="ul" p="0px">
      {children}
    </Box>
  );
};
export const ListItem = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      as="li"
      display="flex"
      justifyContent="space-between"
      fontWeight="500"
      mb="10px"
    >
      {children}
    </Box>
  );
};
