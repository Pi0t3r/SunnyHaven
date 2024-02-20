import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {Card} from '../../ui/Card';
import {DogFood} from '@/pages/models/dog.model';

export const DogFoodList = () => {
  const [dog, setDog] = useState<DogFood[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/Dog/foodDog');
        const data = await response.json();
        if (Array.isArray(data)) {
          setDog(data);
        } else {
          console.error(`Invalid data format: ${data}`);
        }
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    {loading ? (
        <CircularProgress />
    ): (
        <>
           <ul className='flex flex-wrap justify-center gap-5'>
            {dog.map((food, index) => (
              <li key={index} className='flex flex-col items-center'>
                <Card {...food} src={food.imageUrl} />
              </li>
            ))}
          </ul> 
        </>
    )}
    </>
  )
};
