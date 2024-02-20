import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {CatFood} from '@/pages/models/cat.model';
import {Card} from '../../ui/Card';
export const CatFoodList = () => {
  const [catFood, setCatFood] = useState<CatFood[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/Cat/foodCat');
        const data = await response.json();
        if (Array.isArray(data)) {
          setCatFood(data);
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
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <ul className='flex flex-wrap justify-center gap-5'>
            {catFood.map((food, index) => (
              <li key={index} className='flex flex-col items-center'>
                <Card {...food} src={food.imageUrl} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
