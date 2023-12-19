import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react'
import { PL, US } from 'country-flag-icons/react/3x2'
import { Sidebar } from './Sidebar'
import { useState } from 'react'
export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [language, setLanguage] = useState('PL')
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'PL' ? 'US' : 'PL'))
  }
  return (
    <Box>
      <Box
        padding="5px"
        backgroundColor="red"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as={'h2'} size={'lg'}>
          LOGO
        </Heading>
        <ButtonGroup zIndex="100">
          <Button variant="ghost" onClick={toggleLanguage}>
            {language === 'PL' ? (
              <PL title="Poland" width="30px" />
            ) : (
              <US title="United States" width="30px" />
            )}
          </Button>
          <Button variant="ghost" onClick={() => setOpenSidebar(!openSidebar)}>
            {openSidebar ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </ButtonGroup>
      </Box>
      <Sidebar openSidebar={openSidebar} />
    </Box>
  )
}
