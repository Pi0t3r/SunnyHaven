import {Card} from '../ui/Card';
import axios from 'axios';
import {ErrorMessage} from '../ui/ErrorMessage';
import {ErrorState} from '@/app/types/types';
import {CircularProgress, Pagination} from '@mui/material';
import {useEffect, useState} from 'react';
import {ProductModel} from '@/pages/models/product.model';

export const FetchData = ({value, type}: {value: string; type: string}) => {
  const [error, setError] = useState<ErrorState | null>(null);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const productsPerPage = 10;
  useEffect(() => {
    axios
      .get('/api/Products/ProductsCollection')
      .then((res) => setProducts(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    if (value === 'Cat') {
      setProducts([...products.filter((c) => c.animal === 'Cat')]);
    } else if (value === 'Dog') {
      setProducts([...products.filter((c) => c.animal === 'Dog')]);
    } else if (value === 'Bird') {
      setProducts([...products.filter((c) => c.animal === 'Bird')]);
    } else {
      return;
    }

    if (type === 'food') {
      setProducts((prevProducts) =>
        prevProducts.filter((c) => c.type === 'food')
      );
    }
  }, [value, products, type]);
  const handleChangePage = (event: React.ChangeEvent<any>, value: number) => {
    setPage(value);
  };
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  const ShowProducts = () => {
    return (
      <ul className='flex flex-col flex-wrap justify-center items-center gap-5'>
        {currentProducts.map((product) => (
          <li key={product._id.toString()}>
            <Card src={product.imageUrl} {...product} />
          </li>
        ))}
        <Pagination
          style={{
            marginInline: 'auto',
            marginTop:20
          }}
          page={page}
          onChange={handleChangePage}
          count={Math.ceil(products.length / productsPerPage)}
        />
      </ul>
    );
  };

  if (error) return <ErrorMessage error={error.message} />;
  return <>{loading ? <CircularProgress /> : <ShowProducts />}</>;
};
