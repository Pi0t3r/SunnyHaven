'use client';
import {Box, Heading, chakra} from '@chakra-ui/react';
import {BestSellers} from '../components/BestSellers';
import {CategoryButtons} from '../components/CategoryButtons';
import {News} from '../components/News';
import {Newsletter} from '../components/Newsletter';
import {Promotion} from '../components/Promotion';
import CarouselComponent from '@/components/Carousel';
export default function Home() {
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
}
