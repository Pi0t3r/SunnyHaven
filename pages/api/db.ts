import {MongoClient, ServerApiVersion} from 'mongodb';
import {NextRequest, NextResponse} from 'next/server';

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase(databaseName: string, collectionName: string) {
  try {
    await client.connect();
    return client.db(databaseName).collection(collectionName);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

export async function handleDatabaseRequest(
  req: NextRequest,
  res: NextResponse,
  databaseName: string,
  collectionName: string
) {
  try {
    const collection = await connectToDatabase(databaseName, collectionName);
    const documents = await collection.find({}).toArray();
    res.status(200).json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Internal Server Error'});
  }
}
