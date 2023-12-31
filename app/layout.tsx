import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {CSSReset, ChakraProvider, Container} from '@chakra-ui/react';
import {ClerkProvider} from '@clerk/nextjs';
import {Header} from '@/app/components/shared/Header';
import {Footer} from '@/app/components/shared/Footer';
import {CartProvider} from '@/context/CartContext';
const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Sunny Haven',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <CartProvider>
          <body className={inter.className}>
            <ChakraProvider>
              <CSSReset />
              <header>
                <Header />
              </header>

              <Container
                style={{
                  marginTop: '100px',
                }}
              >
                {children}
              </Container>
              <footer>
                <Footer />
              </footer>
            </ChakraProvider>
          </body>
        </CartProvider>
      </ClerkProvider>
    </html>
  );
}
