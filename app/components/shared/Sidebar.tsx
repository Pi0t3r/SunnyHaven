import {chakra, List, ListItem, Button, Stack} from '@chakra-ui/react';
import Link from 'next/link';
import {SidebarProps} from '../../types/types';
import {SignedIn, SignedOut} from '@clerk/nextjs';
import {useState} from 'react';
import {PL, US} from 'country-flag-icons/react/3x2';
import {NavItems} from './NavItems';
import {usePathname} from 'next/navigation';
const LinksSidebar = [
  {
    title: 'Home',
    pathname: '/',
  },
  {
    title: 'Cats',
    pathname: '/cats',
  },
  {
    title: 'Dogs',
    pathname: '/dogs',
  },
  {
    title: 'About us',
    pathname: '/aboutUs',
  },
  {
    title: 'Contact',
    pathname: '/contact',
  },
];

export const Sidebar: React.FC<SidebarProps> = ({openSidebar}) => {
  const [language, setLanguage] = useState('PL');
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'PL' ? 'US' : 'PL'));
  };
  const pathname = usePathname();
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
      {' '}
      <Stack
        position='absolute'
        top='75px'
        width='100%'
        left={0}
        display='grid'
        placeItems='center'
      >
        <SignedIn>
          <chakra.nav>
            <NavItems />
          </chakra.nav>
        </SignedIn>
        <List spacing={5} marginTop='50px'>
          {LinksSidebar.map((link) => {
            const isActive = pathname === link.pathname;
            return (
              <ListItem
                key={link.pathname}
                cursor='pointer'
                color={isActive ? 'red.500' : ''}
              >
                <Link href={link.pathname}>{link.title}</Link>
              </ListItem>
            );
          })}
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
      </Stack>
    </chakra.aside>
  );
};
