import {chakra, List, ListItem, Button} from '@chakra-ui/react';
import Link from 'next/link';
import {SidebarProps, SidebarLinkProps} from '../../types/types';
import {SignedOut, UserButton} from '@clerk/nextjs';
import {useState} from 'react';
import {PL, US} from 'country-flag-icons/react/3x2';
const SidebarLink: React.FC<SidebarLinkProps> = ({title, pathname}) => {
  return (
    <Link href={pathname} color={pathname === pathname ? 'red.500' : ''}>
      {title}
    </Link>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({openSidebar}) => {
  const [language, setLanguage] = useState('PL');
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'PL' ? 'US' : 'PL'));
  };
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
      <UserButton />
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
      <List>
        <Button variant='ghost' onClick={toggleLanguage}>
          {language === 'PL' ? (
            <PL title='Poland' width='30px' />
          ) : (
            <US title='United States' width='30px' />
          )}
        </Button>
      </List>
      <List>
        <ListItem>
          <SignedOut>
            <Button>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </ListItem>
      </List>
    </chakra.aside>
  );
};
