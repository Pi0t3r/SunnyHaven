import mongoose, {Document, ObjectId} from 'mongoose';

const dbURL = process.env.MONGODB_URI || '';
mongoose.connect(dbURL);
mongoose.connection.on('error', (err) => {
  console.error('Błąd połączenia z bazą danych.', err);
});

mongoose.connection.on('connected', () => {
  console.log('Połączono z bazą danych');
});

export interface PostModel extends Document {
  _id: ObjectId;
  title: string;
  images: string[];
  date: {
    month: string;
    day: number;
    year: number;
  };
  descriptions: {
    shortDesc: string;
    bolderDesc: string;
    mainDesc: string;
    list: {
      title: string;
      item1: string;
      item2: string;
      item3: string;
    };
    comments: {
      user: {
        name: string;
        surname: string;
        avatar: string;
      };
      dateComm: {
        day: number;
        month: string;
      };
      comment: string;
    }[];
  };
}
