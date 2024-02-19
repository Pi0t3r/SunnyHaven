'use client';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Image from 'next/image';
import {useState} from 'react';
import BurgerMenu from '../ui/BurgerMenu';
import Sidebar from './Sidebar';
const NavItems = [
  {
    icon: <PersonIcon />,
  },
  {
    icon: <FavoriteIcon />,
  },
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
      <div className='flex justify-between px-10 border-b-2 py-4'>
        <ul className='flex w-1/2 justify-between'>
          {NavItems.map((item, index) => (
            <li key={index}>{item.icon}</li>
          ))}
        </ul>
        <BurgerMenu open={isOpen} handleClick={handleClick} />
      </div>
      <Image
        className='mx-auto my-4'
        src='/assets/img/logo2.png'
        width={150}
        height={150}
        alt='Logo'
      />

      <Sidebar isOpen={isOpen} />
    </header>
  );
}
