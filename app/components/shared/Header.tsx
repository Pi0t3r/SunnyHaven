'use client';
import {useState} from 'react';
import {NavItems} from '../data/NavItemsData';
import BurgerMenu from '../ui/BurgerMenu';
import Sidebar from './Sidebar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Badge} from '@mui/material';
import {ModalComponent} from '../ui/Modal';
import {useCart} from '@/context/CartContext';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const {cart} = useCart();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);
  return (
    <header className='fixed inset-x-0 top-0 bg-white z-[1000]'>
      <div className='flex justify-between items-center px-10 border-b-2 py-4'>
        <ul className='flex w-1/2 justify-between'>
          {NavItems.map((item, index) => (
            <li
              key={index}
              className='cursor-pointer hover:scale-110 transition duration-300 ease-in hover:text-gray-300'
            >
              {item.icon}
            </li>
          ))}
          <li
            className='cursor-pointer hover:scale-110 transition duration-300 ease-in hover:text-gray-300'
            onClick={handleOpen}
          >
            <Badge color='primary' badgeContent={cart.length}>
              <ShoppingBasketIcon />
            </Badge>
          </li>
        </ul>
        <BurgerMenu open={isOpen} handleClick={handleClick} />
      </div>
      <ModalComponent onClose={handleClose} open={openModal} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
