import {connectToDatabase} from '@/lib/database';
const middleware = async (req, res, next) => {
  req.db = await connectToDatabase();
  return next();
};

export default middleware;
