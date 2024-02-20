import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {iCard, commonProps} from '@/app/types/types';

export const InfoCard = ({title}: commonProps) => {
  return (
    <div className='absolute top-5 left-5 border-[1px] bg-primary px-4 py-1 rounded-md'>
      <p className='uppercase'>{title}</p>
    </div>
  );
};
export const Card = ({
  src,
  name,
  price,
  isNew,
  isSold,
  isDiscount,
  discountPrice,
}: iCard) => {
  return (
    <div className='relative border-2 p-8 rounded-xl'>
      {(isNew && <InfoCard title='new!' />) ||
        (isSold && <InfoCard title='sold' />) ||
        (isDiscount && <InfoCard title='discount!' />)}
      <Image
        src={src}
        alt=''
        width={400}
        height={400}
        className='mt-14 mx-auto rounded-lg'
      />
      <div className='text-2xl mt-10'>
        <p>{name}</p>
        {isDiscount ? (
          <p className='text-primary'>
            <span className='line-through text-gray-300 mr-5'>
              {price.toFixed(2)} zł
            </span>
            {discountPrice?.toFixed(2)} zł
          </p>
        ) : (
          <p className='text-primary'>{price.toFixed(2)} zł</p>
        )}
      </div>
      <div className='flex gap-4'>
        <button
          className={`border-[1px] rounded-md px-5 py-2 uppercase ${
            isSold && 'bg-gray-300 text-gray-500 line-through'
          }`}
          disabled={isSold}
        >
          add to cart
        </button>
        <button className='border-[1px] rounded-md px-5 py-2 uppercase'>
          <FavoriteIcon />
        </button>
      </div>
    </div>
  );
};
