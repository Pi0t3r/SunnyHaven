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
}

const CatFoodSchema = new Schema<CatFood>({
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
  weight: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    required: true,
  },
  ageCat: {
    type: String,
    required: true,
  },
});

const CatFood = model<CatFood>('CatFood', CatFoodSchema);
