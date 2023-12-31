'use client';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('Cart saved to localStorage: ', cart);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [cart]);
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (imageUrl: string) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.imageUrl !== imageUrl)
    );
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

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
