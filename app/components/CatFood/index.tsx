import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
export const CatFoodList = () => {
  const [catFood, setCatFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/foodCat');
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
        <div>
          <ul>
            {catFood.map((food, index) => (
              <li key={index}>
                <p>
                  {food.name} {food.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
