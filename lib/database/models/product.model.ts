import {Document, Schema, model, models} from 'mongoose';

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

const Product = models.Product || model('Product', ProductSchema);

export default Product;
