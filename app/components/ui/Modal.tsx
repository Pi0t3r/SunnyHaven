import Modal from '@mui/material/Modal';
import {iModalComponent} from '@/app/types/types';
import {useCart} from '@/context/CartContext';
export const ModalComponent = ({open, onClose}: iModalComponent) => {
  const {cart} = useCart();
  return (
    <Modal open={open} onClose={onClose}>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-auto bg-white'>
        <p>Cart list:</p>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};
