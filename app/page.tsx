'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Box, Heading, chakra} from '@chakra-ui/react';
import {BestSellers} from './components/ui/BestSellers';
import {CategoryButtons} from './components/ui/CategoryButtons';
import {News} from './components/ui/News';
import {Newsletter} from './components/ui/Newsletter';
import {Promotion} from './components/ui/Promotion';
import CarouselComponent from '@/app/components/ui/Carousel';
export default function Home() {
  return (
    <Box>
      <chakra.section>
        <Heading as='h2' size='xl' textAlign='center'>
          Nowości dla Twoich pupili
        </Heading>
        <CarouselComponent />
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
