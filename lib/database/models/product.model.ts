import {Document, Schema, model} from 'mongoose';

export interface IProduct extends Document {
  _id: string;
  name: string;
  price: string;
  imageUrl: string;
}

const ProductSchema = new Schema({
  name: {type: String, required: true, unique: true},
  price: {type: String, required: true},
  image: {type: String, required: true},
});

export const ProductModel = model<IProduct>('Product', ProductSchema);
