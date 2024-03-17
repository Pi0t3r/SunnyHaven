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
  increaseProductQuantity: (productId: ObjectId) => void;
  decreaseProductQuantity: (productId: ObjectId) => void;
}
interface iCartProvider {
  children: ReactNode;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
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
  const increaseProductQuantity = (productId: ObjectId) => {
    const updatedCart = cart.map((item) => {
      if (item.product._id === productId) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
    setCart(updatedCart);
  };
  const decreaseProductQuantity = (productId: ObjectId) => {
    const updatedCart = cart.map((item) => {
      if (item.product._id === productId && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1};
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseProductQuantity,
        increaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
