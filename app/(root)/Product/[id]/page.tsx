'use client';
import {useEffect, useState} from 'react';
import {ProductModel} from '@/pages/models/product.model';
import Image from 'next/image';
import {IconButton, CircularProgress, Button} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useCart} from '@/context/CartContext';
const ProductPage = () => {
  const [productData, setProductData] = useState<ProductModel>();
  const [loading, setLoading] = useState(true);
  const {addToCart} = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = window.location.pathname.split('/').pop();
        const response = await fetch('/api/Products/ProductsCollection');
        const product: ProductModel[] = await response.json();
        if (productId) {
          const foundProduct = product.find(
            (product) => product._id.toString() === productId
          );
          if (foundProduct) {
            setProductData(foundProduct);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className='grid place-items-center p-20 relative'>
      <IconButton
        onClick={handleGoBack}
        sx={{
          position: 'absolute',
          top: 0,
          left: 20,
        }}
        color='primary'
      >
        <KeyboardBackspaceIcon />
      </IconButton>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {productData ? (
            <>
              <p>{productData.name}</p>
              <Image
                src={productData.imageUrl}
                alt={productData.name}
                width={200}
                height={200}
              />
              {productData.isDiscount === true && (
                <>
                  <p>This product has a discount!</p>
                  <p>{productData.discountPrice} zł</p>
                </>
              )}
            </>
          ) : (
            <p>Product not found</p>
          )}
        </>
      )}
    </div>
  );
};

export default ProductPage;
