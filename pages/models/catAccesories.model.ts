import mongoose, {Schema, model, Document, ObjectId} from 'mongoose';

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
export interface CatAccessories extends Document {
  _id: ObjectId;
  name: string;
  price: number;
  imageUrl: string;
  size?: string;
  color?: string;
  weight?: string;
}

const CatAccessoriesSchema = new Schema<CatAccessories>({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  weight: {
    type: String,
    required: false,
  },
});

const CatAccessories = model<CatAccessories>(
  'CatAccessories',
  CatAccessoriesSchema
);
