import mongoose, { Schema, Document } from 'mongoose';

const dbURL = process.env.MONGODB_URI || '';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURL, options);

mongoose.connection.on('error', (err) => {
  console.error('Błąd połączenia z bazą danych.', err);
});

mongoose.connection.on('connected', () => {
  console.log('Połączono z bazą danych');
});

mongoose.connection.on('disconnected', () => {
  console.log('Rozłączono z bazą danych');
});

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartDocument extends Document {
  userId: string;
  items: CartItem[];
}

const cartSchema = new Schema({
  userId: { type: String, required: true },
  items: [{ id: String, name: String, price: Number }],
});

const Cart = mongoose.model<CartDocument>('Cart', cartSchema);

const addToCart = async (userId: string, item: CartItem): Promise<CartDocument | null> => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $push: { items: item } },
      { new: true, upsert: true }
    );
    return cart;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

const clearCart = async (userId: string): Promise<boolean> => {
  try {
    const result = await Cart.updateOne({ userId }, { $set: { items: [] } });
    return result.ok === 1;
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};

const removeFromCart = async (userId: string, itemId: string): Promise<boolean> => {
  try {
    const result = await Cart.updateOne({ userId }, { $pull: { items: { id: itemId } } });
    return result.ok === 1;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export { addToCart, clearCart, removeFromCart };
