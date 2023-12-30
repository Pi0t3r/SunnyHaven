'use client';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  useDisclosure,
} from '@chakra-ui/react';
import {FaBasketShopping} from 'react-icons/fa6';
import {Sidebar} from './Sidebar';
import {useState} from 'react';
import Image from 'next/image';
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import {NavItems} from './NavItems';
import Link from 'next/link';
import {useCart} from '@/context/CartContext';
import {ModalComponent} from '../ui/Modal';
export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const {cart} = useCart();
  const {isOpen, onOpen, onClose} = useDisclosure();
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
        <NavItems />
        <Box
          display='flex'
          alignItems='center'
          width='25%'
          justifyContent='space-around'
        >
          <Button variant='ghost' zIndex={51} onClick={onOpen}>
            <FaBasketShopping />
            {cart.length > 0 && <chakra.span>{cart.length}</chakra.span>}
            {isOpen && <ModalComponent OpenModal={onOpen} onClose={onClose}/>}
          </Button>
          <SignedIn>
            <chakra.nav display={{base: 'none', sm: 'flex'}}>
              <UserButton />
            </chakra.nav>
          </SignedIn>
          <ButtonGroup
            zIndex='100'
            display={{base: 'flex', sm: 'none'}}
            alignItems='center'
          >
            <SignedOut>
              <Button borderRadius='100%'>
                <Link href='/sign-in'>Login</Link>
              </Button>
            </SignedOut>
            <Button
              variant='ghost'
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              {openSidebar ? <CloseIcon /> : <HamburgerIcon />}
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Sidebar openSidebar={openSidebar} />
    </Box>
  );
};
