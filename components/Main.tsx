import {Box, Heading, chakra} from '@chakra-ui/react';
import {BestSellers} from './BestSellers';
import CarouselComponent from './Carousel';
import {CategoryButtons} from './CategoryButtons';
import {News} from './News';
import {Newsletter} from './Newsletter';
import {Promotion} from './Promotion';
export const Main = () => {
  return (
    <Box>
      <chakra.section>
        <Heading as='h2' size='xl' textAlign='center'>
          Nowości dla Twoich pupili
        </Heading>
        {/* <CarouselComponent /> */}
      </chakra.section>
      <chakra.section>
        <Promotion />
      </chakra.section>
      <chakra.section>
        <News />
      </chakra.section>
      <chakra.section>
        <CategoryButtons />
      </chakra.section>
      <chakra.section>
        <BestSellers />
      </chakra.section>
      <chakra.section>
        <Newsletter />
      </chakra.section>
    </Box>
  );
};
