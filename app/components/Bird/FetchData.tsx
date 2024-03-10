'use client';
import {useState, useEffect, SetStateAction} from 'react';
import {CircularProgress} from '@mui/material';
import {Card} from '../ui/Card';
import {BirdFood} from '@/pages/models/bird.model';
import axios from 'axios';
import ErrorIcon from '@mui/icons-material/Error';
import {ErrorMessage} from '../ui/ErrorMessage';
interface ErrorState {
  message: string;
}
export const FetchBirdData = ({whichData}: {whichData: string}) => {
  const [birdFood, setBirdFood] = useState<BirdFood[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState | null>(null);
  useEffect(() => {
    axios
      .get(`/api/Birdd/${whichData}`)
      .then((response) => setBirdFood(response.data))
      .catch((error) => {
        console.error('Error fetching bird foods: ', error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [whichData]);
  if (error) return <ErrorMessage error={error.message} />;
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {whichData === 'foodBird' && (
            <>
              <ul>
                {birdFood.map((item, index) => (
                  <li key={index}>
                    <Card {...item} src={item.imageUrl} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
};
