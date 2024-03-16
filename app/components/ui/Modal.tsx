import Modal from '@mui/material/Modal';
import {iModalComponent} from '@/app/types/types';
import {useCart} from '@/context/CartContext';
import Image from 'next/image';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const ModalComponent = ({open, onClose}: iModalComponent) => {
  const {cart, clearCart, removeFromCart} = useCart();

  const totalPrice = cart.reduce((acc, {product, quantity}) => {
    return acc + product.price * quantity;
  }, 0);
  return (
    <Modal open={open} onClose={onClose}>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto bg-white'>
        <>
          <ul className='max-h-52 overflow-y-scroll'>
            {cart.map(({product, quantity}) => (
              <li key={product._id.toString()} className='border-y-[1px]'>
                <div className='grid grid-rows-3 grid-cols-[1fr_2fr_1fr]'>
                  <Image
                    src={product.src}
                    alt={product.name}
                    width={50}
                    height={50}
                    className='row-start-1 row-end-3 col-start-1 col-end-1 object-scale-down w-full'
                  />
                  <p className='row-start-1 row-end-1 col-start-2 col-end-2'>
                    {product.name}
                  </p>
                  <p className='row-start-2 row-end-2 col-start-2 col-end-2'>
                    {product.taste}
                  </p>
                  <p className='row-start-3 row-end-3 col-start-2 col-end-2 text-gray-500'>
                    Qt:{quantity}
                  </p>
                  <p className='row-start-3 row-end-3 col-start-3 col-end-3 text-center text-lg font-semibold'>
                    {product.price * quantity} zł
                  </p>
                  <button className='text-red-500 row-start-1 row-end-1 col-start-3 col-end-3'>
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
        <div className='border-t-[1px] p-5'>
          <p>
            Total: <span className='font-bold'>{totalPrice.toFixed(2)}</span> zł
          </p>
          <div className='flex justify-between'>
            <button onClick={onClose}>Close</button>
            <button onClick={clearCart}>Clear Cart</button>
            <button>Go to Cart</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
