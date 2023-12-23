import {connectToDatabase} from './db';
import {NextRequest, NextResponse} from 'next/server';
export default async function handler(req: NextRequest, res: NextResponse) {
  try {
    const collection = await connectToDatabase('CatFood');
    const documents = await collection.find({}).toArray();
    res.status(200).json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Internal Server Error'});
  }
}
