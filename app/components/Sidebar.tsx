import {chakra, List, ListItem, Link as ChakraLink} from '@chakra-ui/react';
import Link from 'next/link';
import {SidebarProps, SidebarLinkProps} from '../types/types';
const SidebarLink: React.FC<SidebarLinkProps> = ({title, pathname}) => {
  return (
    <Link href={pathname} color={pathname === pathname ? 'red.500' : ''}>
      {title}
    </Link>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({openSidebar}) => {
  return (
    <chakra.aside
      position='fixed'
      top='0'
      bottom='0'
      right='0'
      background='gray'
      width='50%'
      transform={openSidebar ? 'translateX(0)' : 'translateX(100%)'}
      transition='transform .5s ease-in-out'
      padding='20px'
      zIndex={50}
    >
      <List spacing={5} marginTop='50px'>
        <ListItem cursor='pointer'>
          <SidebarLink title='Dom' pathname='/' />
        </ListItem>
        <ListItem cursor='pointer'>
          <SidebarLink title='Koty' pathname='/cats' />
        </ListItem>
        <ListItem cursor='pointer'>
          <SidebarLink title='Psy' pathname='/dogs' />
        </ListItem>
        <ListItem>
          <SidebarLink pathname='/aboutUs' title='O nas' />
        </ListItem>
        <ListItem>
          <SidebarLink pathname='/contact' title='Kontakt' />
        </ListItem>
      </List>
      <List
        position='absolute'
        bottom='20px'
        left='0%'
        display='flex'
        width='100%'
        justifyContent='space-between'
        padding='0 5px'
        flexDirection='column'
        spacing={5}
        alignItems='center'
      >
        <ListItem>
          <SidebarLink title='Zaloguj się' pathname='/login' />
        </ListItem>
        <ListItem>
          <SidebarLink title='Zarejestruj się' pathname='/register' />
        </ListItem>
      </List>
    </chakra.aside>
  );
};
