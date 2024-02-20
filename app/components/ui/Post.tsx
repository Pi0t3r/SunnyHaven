import Image from 'next/image';
import Link from 'next/link';
import {iPost} from '@/app/types/types';
export const Post = ({src, title, desc, day, month}: iPost) => {
  return (
    <div className='mt-10 relative '>
      <div className='absolute top-0 left-0 bg-light-gray p-3 rounded-xl m-4 w-16 h-16 flex items-center justify-center'>
        <p className='flex flex-col text-lg capitalize'>
          <span className='text-primary'>{day}</span>
          {month}
        </p>
      </div>
      <Image
        src={src}
        alt=''
        width={400}
        height={300}
        className='rounded-2xl'
      />
      <p className='text-xl my-4 capitalize'>{title}</p>
      <p className='text-gray-color'>{desc}</p>
      <button className='mt-4 text-gray-color underline underline-offset-8 decoration-4'>
        <Link href='' />
        Read more
      </button>
    </div>
  );
};
