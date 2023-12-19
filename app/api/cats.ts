import nextConnect from 'next-connect';
import middleware from '@/middleware';
import Product from '@/lib/database/models/product.model';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    const cats = await Product.find({});
    res.status(200).json(cats);
  } catch (error) {
    console.error('Błąd pobierania danych:', error);
    res.status(500).json({error: 'Błąd serwera'});
  }
});

export default handler;
