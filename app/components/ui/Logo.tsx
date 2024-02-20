import LogoImg from '@/public/assets/img/logo.png';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      className='mx-auto my-4'
      src={LogoImg}
      width={150}
      height={150}
      alt='Logo'
    />
  );
};
