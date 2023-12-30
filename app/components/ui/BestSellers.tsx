import {Box, Heading, Stack, Text, Image} from '@chakra-ui/react';
import {ItemProps} from '../../types/types';

const Item: React.FC<ItemProps> = ({title, price, src}) => {
  return (
    <Box border='1px solid black' overflow='hidden'>
      <Image
        alt=''
        src={src}
        transition='transform .5s ease-out'
        _hover={{
          transform: 'scale(1.1)',
        }}
        zIndex={5}
      />
      <Text zIndex='10' position='relative'>
        {title}
      </Text>
      <Text>{price.toFixed(2)} zł</Text>
    </Box>
  );
};

export const BestSellers = () => {
  return (
    <Box textAlign='center'>
      <Heading textTransform='uppercase'>bestsellery</Heading>
      <Stack padding='10px'>
        <Item
          title='Produkt 4 B'
          price={210.0}
          src='https://www.dolina-noteci.pl/pol_pl_Mokra-karma-dla-kota-Rafi-Cat-Adult-z-indykiem-100-g-6635_1.jpg'
        />
        <Item
          title='Produkt 4 B'
          price={210.0}
          src='https://www.dolina-noteci.pl/pol_pl_Mokra-karma-dla-kota-Rafi-Cat-Adult-z-indykiem-100-g-6635_1.jpg'
        />
        <Item
          title='Produkt 4 B'
          price={210.0}
          src='https://www.dolina-noteci.pl/pol_pl_Mokra-karma-dla-kota-Rafi-Cat-Adult-z-indykiem-100-g-6635_1.jpg'
        />
        <Item
          title='Produkt 4 B'
          price={210.0}
          src='https://www.dolina-noteci.pl/pol_pl_Mokra-karma-dla-kota-Rafi-Cat-Adult-z-indykiem-100-g-6635_1.jpg'
        />
      </Stack>
    </Box>
  );
};
