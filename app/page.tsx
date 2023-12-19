'use client';
import {Box, chakra} from '@chakra-ui/react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/footer';
import {Main} from '@/components/Main';
export default function Home() {
  return (
    <Box>
      <chakra.header>
        <Header />
      </chakra.header>
      <chakra.main textAlign='center'>
        <Main />
      </chakra.main>
      <chakra.footer>
        <Footer />
      </chakra.footer>
    </Box>
  );
}
