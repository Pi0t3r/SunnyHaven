import mongoose, {Document, ObjectId} from 'mongoose';

const dbURL = process.env.MONGODB_URI || '';
mongoose.connect(dbURL);
mongoose.connection.on('error', (err) => {
  console.error('Błąd połączenia z bazą danych.', err);
});

mongoose.connection.on('connected', () => {
  console.log('Połączono z bazą danych');
});
export interface CatFood extends Document {
  _id: ObjectId;
  name: string;
  price: number;
  imageUrl: string;
  weight: number;
  taste: string;
  desc: string;
  calories: string;
  ageCat: string;
  isNew: boolean;
  isSold: boolean;
  isDiscount: boolean;
  discountPrice?: number;
}
export interface CatToys extends Document {
  _id: ObjectId;
  name: string;
  price: number;
  size: string;
  imageUrl: string;
  stickLenght?: number;
  lineLenght?: number;
  isNew: boolean;
  isSold: boolean;
  isDiscount: boolean;
  discountPrice?: number;
}
export interface CatAccessories extends Document {
  _id: ObjectId;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  color: string;
  isNew: boolean;
  isSold: boolean;
  isDiscount: boolean;
  discountPrice?: number;
}
