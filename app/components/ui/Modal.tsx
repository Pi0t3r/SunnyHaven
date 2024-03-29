import Modal from '@mui/material/Modal';
import {iModalComponent} from '@/app/types/types';
import {useCart} from '@/context/CartContext';
import Image from 'next/image';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Button} from '@mui/material';
export const ModalComponent = ({open, onClose}: iModalComponent) => {
  const {
    cart,
    clearCart,
    removeFromCart,
    decreaseProductQuantity,
    increaseProductQuantity,
  } = useCart();
  const totalPrice = cart.reduce((acc, {product, quantity}) => {
    return acc + product.price * quantity;
  }, 0);
  return (
    <Modal open={open} onClose={onClose}>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-fit max-h-96 bg-white'>
        <>
          <ul className='max-h-80 overflow-y-scroll'>
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
                  <p className='row-start-2 row-end-2 col-start-2 col-end-2 text-center text-lg font-semibold'>
                    {(product.price * quantity).toFixed(2)} zł
                  </p>
                  <div className='row-start-3 row-end-3 col-start-2 col-end-2 flex flex-nowrap items-center justify-between px-5'>
                    <button
                      onClick={() => decreaseProductQuantity(product._id)}
                      className='border-[1px] w-5 h-5 flex items-center justify-center rounded-lg'
                    >
                      -
                    </button>
                    <p className='text-gray-500'>{quantity}</p>
                    <button
                      onClick={() => increaseProductQuantity(product._id)}
                      className='border-[1px] w-5 h-5 flex items-center justify-center rounded-lg'
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className='text-red-500 row-start-1 row-end-1 col-start-3 col-end-3'
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
        <div className='border-t-[1px] p-5'>
          <p className='text-center'>
            Total: <span className='font-bold'>{totalPrice.toFixed(2)}</span> zł
          </p>
          <div className='flex justify-between'>
            <Button variant='outlined' size='small' onClick={onClose}>
              Close
            </Button>
            <Button variant='outlined' size='small' onClick={clearCart}>
              Clear Cart
            </Button>
            <Button variant='outlined' size='small'>
              Go to Payment
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
