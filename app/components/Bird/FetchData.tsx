'use client';
import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {Card} from '../ui/Card';
import {BirdFood} from '@/pages/models/bird.model';
import axios from 'axios';
import {ErrorMessage} from '../ui/ErrorMessage';
import {ErrorState} from '@/app/types/types';
export const FetchBirdData = ({whichData}: {whichData: string}) => {
  const [birdFood, setBirdFood] = useState<BirdFood[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState | null>(null);
  useEffect(() => {
    axios
      .get(`/api/Birdd/${whichData}`)
      .then((response) => setBirdFood(response.data))
      .catch((error) => setError(error))
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
