import ImageTitle from '@/public/assets/img/banner-img2.png';
import Image from 'next/image';
import {Button} from '../../ui/Button';
export const Sale = () => {
  return (
    <div className='mt-10 text-left'>
      <Image
        src={ImageTitle}
        alt=''
        width={600}
        height={200}
        style={{
          marginInline: 'auto',
        }}
      />
      <span className='text-primary uppercase text-xl'>up to 40% off</span>
      <p className='capitalize font-bold text-4xl'>clearance sale!!!</p>
      <Button title='shop now' href='/sale' />
    </div>
  );
};
