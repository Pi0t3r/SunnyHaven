import {NextRequest, NextResponse} from 'next/server';
import {handleDatabaseRequest} from '../db';
export default async function handler(req: NextRequest, res: NextResponse) {
  return await handleDatabaseRequest(req, res, 'Bird', 'foodBird');
}
