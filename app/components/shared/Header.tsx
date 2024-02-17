'use client';
import Image from 'next/image';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';

const NavItems = [
  {
    icon: <ShoppingBasketIcon />,
  },
  {
    icon: <SearchIcon />,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <Image
        className='mx-auto'
        src='/assets/img/logo2.png'
        width={150}
        height={150}
        alt='Logo'
      />
      <div className='flex justify-between px-7'>
        <ul className='flex w-1/3 justify-between'>
          {NavItems.map((icon, index) => (
            <li key={index} className='hover:text-red-500 cursor-pointer text-main-black'>
              {icon.icon}
            </li>
          ))}
        </ul>
        <button
          onClick={handleClick}
          className='flex flex-col justify-center items-center gap-y-px'
        >
          <span
            className={`bg-main-black w-10 h-1 rounded-full transition duration-100 ease-in ${
              isOpen ? '-rotate-45 translate-y-1' : ''
            }`}
          ></span>
          <span
            className={`bg-main-black w-10 h-1 rounded-full transition duration-200 ease-in ${
              isOpen ? 'opacity-0 translate-x-full' : ''
            }`}
          ></span>
          <span
            className={`bg-main-black w-10 h-1 rounded-full transition duration-100 ease-in ${
              isOpen ? 'rotate-45 -translate-y-1' : ''
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
}
