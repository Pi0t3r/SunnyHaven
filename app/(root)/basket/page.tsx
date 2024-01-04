'use client';
import {useEffect, useState} from 'react';
import {BasketInformation} from '@/app/components/ui/BasketInformation';
import {loadStripe} from '@stripe/stripe-js';
import {Button} from '@chakra-ui/react';
import {useCart} from '@/context/CartContext';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function Basket() {
  const {cart} = useCart();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);
  const onCheckout = async () => {
    const order = {
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };
    setOrders((prevOrders) => [...prevOrders, order]);
  };
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            {item.name} & {item.price}
          </li>
        ))}
      </ul>
      <form action={onCheckout} method='post'>
        <Button type='submit'>Buy</Button>
      </form>
    </div>
  );
}
