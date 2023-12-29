import {Box, Button, Image, Stack, Text} from '@chakra-ui/react';
import {ImageIconButtonProps} from '../types/types';
import Link from 'next/link';

const ImageIconButton: React.FC<ImageIconButtonProps> = ({
  src,
  alt,
  title,
  link,
}) => {
  return (
    <Link href={link}>
      <Button
        p={0}
        borderRadius='md'
        position='relative'
        width='100%'
        height='300px'
      >
        <Image
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: 10,
          }}
        />
        <Box
          transition='background .8s ease-in-out'
          _hover={{
            backgroundColor: 'transparent',
          }}
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#f800ff5e',
            zIndex: 12,
          }}
        />
        <Text
          zIndex={13}
          textTransform='uppercase'
          color='white'
          fontSize='4xl'
          fontWeight='semibold'
        >
          {title}
        </Text>
      </Button>
    </Link>
  );
};
export const CategoryButtons = () => {
  return (
    <Stack display='flex' flexDirection='column' padding='10px'>
      <ImageIconButton
        link='/food'
        title='Karma'
        src='https://www.vets4pets.com/siteassets/species/cat/cat-eating-out-of-food-bowl.jpg?w=585&scale=down'
        alt='Eating cat'
      />
      <ImageIconButton
        link='/accessories'
        title='Akcesoria'
        src='https://a.allegroimg.com/original/11c25a/cbf8c443429d98ee3e39181250d6/Kot-bawiacy-sie-Puzzle-1000-szt'
        alt='playing cat'
      />
    </Stack>
  );
};
