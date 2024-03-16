'use client';
import {ReactNode, createContext, useContext, useEffect, useState} from 'react';
import {ObjectId} from 'mongodb';

interface Product {
  _id: ObjectId;
  name: string;
  price: number;
  src: string;
  taste: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: ObjectId) => void;
  clearCart: () => void;
}
interface iCartProvider {
  children: ReactNode;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC<iCartProvider> = ({children}) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem('cartList') || '[]');
  const [cart, setCart] = useState<CartItem[]>(cartLocalStorage);
  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.product._id === product._id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, {product, quantity: 1}]);
    }
  };
  const removeFromCart = (productId: ObjectId) => {
    const updatedCart = cart.filter((item) => item.product._id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
