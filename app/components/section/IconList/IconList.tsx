import Image from 'next/image';
import Link from 'next/link';
import { iconsList } from '../../data/IconsListData';
export const IconsList = () => {
  return (
    <section>
      <ul className='flex flex-wrap py-20 justify-center gap-12'>
        {iconsList.map((icon, index) => (
          <li key={index}>
            <Link href={icon.href} className='cursor-pointer'>
              <Image
                src={icon.icon}
                alt={icon.alt}
                width={70}
                height={70}
                className='fill-white'
              />
              <p className='capitalize text-xl text-center mt-5'>
                {icon.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
