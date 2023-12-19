import { Box, Stack, Text, Input } from '@chakra-ui/react'

export const Newsletter = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height="300px"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundImage="https://www.zooplus.pl/magazyn/wp-content/uploads/2022/12/Kot-czy-pies-wspolna-zabawa-na-trawie.jpeg"
    >
      <Box
        zIndex={10}
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: '#635f5fa8',
        }}
      />
      <Stack
        zIndex={11}
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        color="white"
      >
        <Text zIndex={13} fontSize="3xl">
          Dołącz do nas
        </Text>
        <Text>
          Dla wszystkich nowych subskrybentów -15% na pierwsze zamówienie
        </Text>
        <Box>
          <Text>Twój e-mail:</Text>
          <Input
            placeholder="twoj@email.com"
            size="lg"
            _placeholder={{ color: 'white' }}
          />
        </Box>
      </Stack>
    </Box>
  )
}
