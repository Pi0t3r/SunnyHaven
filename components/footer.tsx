import { Box, Stack, Text } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
export const Footer = () => {
  return (
    <Box background="black" color="white" textAlign="center" padding="15px">
      <Stack>
        <Text>+48 999 999 999</Text>
        <Text>pn-pt 09:00 - 18:00</Text>
        <Text>contact@gmail.com</Text>
      </Stack>
      <Stack>
        <Text textTransform="uppercase">Obsługa klienta</Text>
        <Text>Dostawa</Text>
        <Text>Polityka zwrotów</Text>
      </Stack>
      <Stack>
        <Text>O firmie</Text>
        <Text>O nas</Text>
        <Text>Kontakt</Text>
      </Stack>
      <Stack>
        <Text>Śledź nas</Text>
        <Text>
          <FaFacebookF />
        </Text>
        <Text>
          <FaInstagram />
        </Text>
      </Stack>
    </Box>
  )
}
