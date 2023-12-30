import {LayoutProps} from '../types/types';
import {Box} from '@chakra-ui/react';
const Layout = ({children}: LayoutProps) => {
  return (
    <Box textAlign='center' display='grid' placeItems='center' my={20}>
      {children}
    </Box>
  );
};

export default Layout;
