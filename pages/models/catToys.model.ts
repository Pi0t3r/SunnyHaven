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
export interface CatToys extends Document {
  _id: ObjectId;
  name: string;
  price: number;
  imageUrl: string;
  stickLength?: number;
  lineLength?: number;
}

const CatToysSchema = new Schema<CatToys>({
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
  stickLength: {
    type: Number,
    required: false,
  },
  lineLength: {
    type: Number,
    required: false,
  },
});

const CatToys = model<CatToys>('CatToys', CatToysSchema);
