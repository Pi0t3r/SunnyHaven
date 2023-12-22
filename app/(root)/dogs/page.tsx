'use client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
const DogsPage: React.FC = () => {
  const [dog, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get('/api/dogs');
        setDogs(response.data);
      } catch (error) {
        console.error('Błąd pobierania danych z API:', error);
      }
    };

    fetchDogs();
  }, []);

  return (
    <Box>
      <h1>Dogs list product:</h1>
      <ul>
        {dog.map((dog) => (
          <li key={dog._id}>
            <Image src={dog.image} alt={dog.name} width={200} height={200} />
            <p>{dog.name}</p>
            <p>{dog.price}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default DogsPage;
