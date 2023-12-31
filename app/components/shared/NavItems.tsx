import {Box, List, ListItem} from '@chakra-ui/react';
import {LinksSidebar} from './Sidebar';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

export function NavItems() {
  const pathname = usePathname();
  
  return (
    <Box width='350px' display={{base: 'none', sm: 'block'}}>
      <List
        display='flex'
        width='100%'
        justifyContent='space-around'
        alignItems='center'
      >
        {LinksSidebar.map((link) => {
          const isActive = pathname === link.pathname;
          return (
            <ListItem
              key={link.pathname}
              cursor='pointer'
              color={isActive ? 'red.500' : ''}
              fontWeight={isActive ? 'bold' : ''}
            >
              <Link href={link.pathname}>{link.title}</Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
