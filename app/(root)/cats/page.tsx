'use client'
import axios from 'axios';
import {useState, useEffect} from 'react';
import Image from 'next/image';

const CatsPage: React.FC = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('/api/cats');
        setCats(response.data);
      } catch (error) {
        console.error('Błąd pobierania danych z API:', error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div>
      <h1>Cats list product:</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat._id}>
            <Image src={cat.image} alt={cat.name} width={200} height={200} />
            <p>{cat.name}</p>
            <p>{cat.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatsPage;
