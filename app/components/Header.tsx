'use client';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import {Box, Button, ButtonGroup} from '@chakra-ui/react';
import {FaBasketShopping} from 'react-icons/fa6';
import {PL, US} from 'country-flag-icons/react/3x2';
import {Sidebar} from './Sidebar';
import {useState} from 'react';
import Image from 'next/image';
export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [language, setLanguage] = useState('PL');
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'PL' ? 'US' : 'PL'));
  };
  return (
    <Box>
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

        <ButtonGroup zIndex='100'>
          <Button variant='ghost'>
            <FaBasketShopping />
          </Button>
          <Button variant='ghost' onClick={toggleLanguage}>
            {language === 'PL' ? (
              <PL title='Poland' width='30px' />
            ) : (
              <US title='United States' width='30px' />
            )}
          </Button>
          <Button variant='ghost' onClick={() => setOpenSidebar(!openSidebar)}>
            {openSidebar ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </ButtonGroup>
      </Box>
      <Sidebar openSidebar={openSidebar} />
    </Box>
  );
};
