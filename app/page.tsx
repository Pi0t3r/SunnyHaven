import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CustomCarousel } from './components/ui/Carousel';
export default function Home() {
  return (
    <main>
      <section className='bg-banner text-center'>
        <CustomCarousel />

      </section>
    </main>
  );
}
