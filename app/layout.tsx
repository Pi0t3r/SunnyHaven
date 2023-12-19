import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {ChakraProvider} from '@chakra-ui/react';
import {ClerkProvider} from '@clerk/nextjs';
import {Header} from '@/components/Header';
import {Footer} from '@/components/footer';
const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Sunny Haven',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ChakraProvider>
            <header>
              <Header />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </ChakraProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
