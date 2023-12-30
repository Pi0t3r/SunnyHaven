'use client';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import {Box, Button, ButtonGroup, chakra} from '@chakra-ui/react';
import {FaBasketShopping} from 'react-icons/fa6';

import {Sidebar} from './Sidebar';
import {useState} from 'react';
import Image from 'next/image';
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import {NavItems} from './NavItems';
import Link from 'next/link';
export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Box position='fixed' top={0} insetX={0} zIndex={150}>
      <Box
        padding='5px'
        backgroundColor='#efefef'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box marginLeft={5}>
          <Image
            width={70}
            height={40}
            src='/assets/images/logo_sklep_zoologiczny.png'
            alt={''}
          />
        </Box>
        <SignedIn>
          <chakra.nav display={{base: 'none', sm: 'block'}}>
            <NavItems />
          </chakra.nav>
        </SignedIn>
        <ButtonGroup
          zIndex='100'
          display={{base: 'flex', sm: 'none'}}
          alignItems='center'
        >
          <SignedOut>
            <Button borderRadius='100%'>
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
          <Button variant='ghost' onClick={() => setOpenSidebar(!openSidebar)}>
            {openSidebar ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </ButtonGroup>
      </Box>
      <Sidebar openSidebar={openSidebar} />
    </Box>
  );
};
