import {Box, Heading, Stack, Text, Image} from '@chakra-ui/react';
import {InfoProps} from '../../types/types';
import {useState, useEffect} from 'react';
const Info: React.FC<InfoProps> = ({title, desc}) => {
  return (
    <Box>
      <Text
        display='inline'
        textTransform='uppercase'
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: '-3px',
            height: '1px',
            backgroundColor: 'black',
            zIndex: -1,
            width: '75%',
            transform: 'translateX(-50%)',
          },
        }}
      >
        {title}
      </Text>
      <Text marginTop='10px'>{desc}</Text>
    </Box>
  );
};

export const Promotion = () => {
  return (
    <Box padding={5} textAlign='center'>
      <Heading as={'h3'}>Aktualne promocje</Heading>
      <Stack>
        <Stack>
          <Info
            title='Zbilansowana'
            desc='Zbilansowana karma dla kotów o pełnowartościowym składzie.'
          />
          <Info
            title='Antyoksydacyjna'
            desc='
            Antyoksydacyjna karma dla kotów, chroniąca przed wolnymi rodnikami.'
          />
          <Info
            title='Białkowa'
            desc='
            Białkowa karma dla kotów, bogata w proteiny.'
          />
        </Stack>
        <Box>
          <Image
            src='https://pe1r90.webwave.dev/lib/pe1r90/unsplash-image-lq3y16zr.jpg'
            alt='Dog feed Fresh Kissess'
          />
        </Box>
        <Stack>
          <Info
            title='Naturalna'
            desc='
            Naturalna karma dla kotów, bez sztucznych dodatków.'
          />
          <Info
            title='uniwersalna'
            desc='Uniwersalna karma dla kotów, odpowiednia dla różnych potrzeb.'
          />
          <Info
            title='Zdrowotna'
            desc='Zdrowotna karma dla kotów, wspierająca dobre samopoczucie zdrowia.'
          />
        </Stack>
      </Stack>
    </Box>
  );
};
