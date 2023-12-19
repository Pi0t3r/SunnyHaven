import {Box, Heading, Stack, Text, Image} from '@chakra-ui/react';
import {InfoProps} from '../types/types';
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
    <Box>
      <Heading as={'h3'}>Aktualne promocje</Heading>
      <Heading>Lista użytkowników</Heading>
      <Stack>
        <Stack>
          <Info
            title='Zbilansowana'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
          />
          <Info
            title='Antyoksydacyjna'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
          />
          <Info
            title='Białkowa'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
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
            title='naturalna'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
          />
          <Info
            title='uniwersalna'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
          />
          <Info
            title='Zdrowotna'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
          />
        </Stack>
      </Stack>
    </Box>
  );
};
