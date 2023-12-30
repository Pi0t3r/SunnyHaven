import {extendTheme} from '@chakra-ui/react';

const breakpoints = {
  base: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200;x',
  '2xl': '1536px',
};

const theme = extendTheme({breakpoints});
