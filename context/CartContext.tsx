'use client';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  handleDecreaseQuantity: (imageUrl: string) => void;
  handleIncreaseQuantity: (imageUrl: string) => void;
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
        const parsetCart = JSON.parse(storedCart);
        if (parsetCart && parsetCart.length > 0) {
          setCart(parsetCart);
        }
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [cart]);
  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.imageUrl === product.imageUrl
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].price += product.price;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (imageUrl: string) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.imageUrl !== imageUrl)
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  const handleIncreaseQuantity = (imageUrl: string) => {
    const updatedCart = cart.map((item) =>
      item.imageUrl === imageUrl ? {...item, quantity: item.quantity + 1} : item
    );
    setCart(updatedCart)
  };
  const handleDecreaseQuantity = (imageUrl: string) => {
    const updatedCart = cart.map((item) =>
      item.imageUrl === imageUrl && item.quantity > 1
        ? {...item, quantity: item.quantity - 1}
        : item
    );
    setCart(updatedCart)
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
      }}
    >
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
