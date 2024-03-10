import type {Metadata} from 'next';
import {Chilanka} from 'next/font/google';
import './globals.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import {CartProvider} from '@/context/CartContext';
const inter = Chilanka({subsets: ['latin'], weight: '400'});

export const metadata: Metadata = {
  title: 'Sunny Haven',
  description: 'Online Shop for pets',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
