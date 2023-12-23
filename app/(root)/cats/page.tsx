'use client';
import {useEffect, useState} from 'react';
interface CatData {
  _id: number;
  name: string;
  price: number;
}
const CatsPage = () => {
  const [cats, setCats] = useState<CatData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/foodCat');
        const data: CatData[] = await response.json();

        if (Array.isArray(data)) {
          setCats(data);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cats list product:</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat._id}>
            {cat.name} - ${cat.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatsPage;
