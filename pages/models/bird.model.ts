import mongoose, {Document, ObjectId} from 'mongoose';

const dbURL = process.env.MONGODB_URI || '';

mongoose.connect(dbURL);
mongoose.connection.on('error', (err) => {
  console.error(`Błąd połączenia z bazą danych: ${err}`);
});

mongoose.connection.on('connected', () => {
  console.log('Połączono z bazą danych');
});

export interface BirdFood extends Document {
  _id: ObjectId;
  name: string;
  price: number;
  imageUrl: string;
  weight: string;
  taste: string;
  isNew: boolean;
  isSold: boolean;
  isDiscount: boolean;
  discountPrice?: number;
}
