import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.model';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || '', {
  dbName: 'SunnyHaven',
  bufferCommands: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Błąd połączenia z MongoDB: '));
db.once('open', () => {
  console.log('Połączono z MongoDB Atlas');
});

app.get('/', (req, res) => {
  res.send('Witaj w serwerze Next.js!');
});
app.get('/UsersData', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    console.error(`Błąd podczas pobierania użytkowników: ${e}`);
    res.status(500).json({error: 'Wystąpił błąd'});
  }
});
app.post('/UsersData', async (req, res) => {
  const {clerkId, email, username, firstName, lastName} = req.body;
  try {
    const newUser = await User.create({
      clerkId,
      email,
      username,
      firstName,
      lastName,
    });
    res.status(201).json(newUser);
  } catch (e) {
    console.error(`Błąd podczas dodawania użytkownika: ${e}`);
    res.status(500).json({error: 'Wystąpił błąd'});
  }
});

app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na http://localhost:${PORT}`);
});
