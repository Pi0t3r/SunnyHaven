'use client';
import { useState } from 'react';
import { NavItems } from '../data/NavItemsData';
import BurgerMenu from '../ui/BurgerMenu';
import Sidebar from './Sidebar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className='flex justify-between items-center px-10 border-b-2 py-4'>
        <ul className='flex w-1/2 justify-between'>
          {NavItems.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item.icon}
            </li>
          ))}
        </ul>
        <BurgerMenu open={isOpen} handleClick={handleClick} />
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
