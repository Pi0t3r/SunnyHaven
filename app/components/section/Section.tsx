import {Button} from '../ui/Button';
import Image from 'next/image';
import {iSectionBackground} from '@/app/types/types';
export const SectionBackground = ({children, image}: iSectionBackground) => {
  return (
    <section className='bg-banner text-center py-10 px-10'>
      <Image
        src={image}
        alt=''
        width={600}
        height={200}
        style={{
          marginInline: 'auto',
        }}
      />
      {children}
      <Button />
    </section>
  );
};
