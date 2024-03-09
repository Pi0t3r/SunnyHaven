import type {Metadata} from 'next';
import {Chilanka} from 'next/font/google';
import './globals.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();
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
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
