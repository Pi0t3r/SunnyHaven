import {Box, Heading, Stack, Text, Image} from '@chakra-ui/react';
import {ProductProps} from '../types/types';
const Product: React.FC<ProductProps> = ({title, price, src}) => {
  return (
    <Box border='1px solid black' overflow='hidden'>
      <Text fontWeight='semibold' fontSize='18px'>
        {title}
      </Text>
      <Image
        src={src}
        alt='Dog food'
        margin='0 auto'
        transition='transform .5s ease-out'
        _hover={{
          transform: 'scale(1.1)',
        }}
      />
      <Text marginTop='15px'>{price.toFixed(2)} zł</Text>
    </Box>
  );
};

export const News = () => {
  return (
    <Box textAlign='center'>
      <Heading>News</Heading>
      <Stack padding='10px'>
        <Product
          title='Produkt 1'
          price={250.0}
          src='https://leopardus.pl/hpeciai/b9b4466d59909c7b23f8bc53d9ce6be9/pol_il_CLUB-4-PAWS-Medium-Breeds-sucha-karma-dla-psa-14kg-28519.webp'
        />
        <Product
          title='Produkt 2'
          price={150.0}
          src='https://leopardus.pl/hpeciai/f4fd01a2b88350146e11aa5099a0fbb6/pol_il_CLUB-4-PAWS-Light-sucha-karma-dla-psa-14kg-20786.webp'
        />
        <Product
          title='Produkt 3'
          price={375.0}
          src='https://leopardus.pl/hpeciai/2c1ef44f6e543524fe0c6b7f073efbd0/pol_il_CLUB-4-PAWS-All-Breeds-Z-Jagniecina-I-Ryzem-sucha-karma-dla-psa-2kg-28522.webp'
        />
        <Product
          title='Produkt 4'
          price={75.0}
          src='https://leopardus.pl/hpeciai/d106f919d5ed8551318da58de4a537fe/pol_il_Club-4-Paws-Puppy-Large-z-kurczakiem-sucha-karma-dla-szczeniat-ras-duzych-14kg-31375.webp'
        />
      </Stack>
    </Box>
  );
};
