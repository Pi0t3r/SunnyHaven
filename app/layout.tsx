import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {ChakraProvider} from '@chakra-ui/react';
import {ClerkProvider} from '@clerk/nextjs';
import {Header} from '@/app/components/shared/Header';
import {Footer} from '@/app/components/shared/Footer';
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
            <main
              style={{
                marginTop: '100px',
              }}
            >
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </ChakraProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
