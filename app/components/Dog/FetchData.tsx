import {iFetchDataDog} from '@/app/types/types';
import {DogToys, DogAccessories, DogFood} from '@/pages/models/dog.model';
import {CircularProgress} from '@mui/material';
import {useEffect, useState} from 'react';
import {Card} from '../ui/Card';
import axios from 'axios';
import {ErrorMessage} from '../ui/ErrorMessage';
import {ErrorState} from '@/app/types/types';
export const FetchDogData = ({whichData}: iFetchDataDog) => {
  const [loading, setLoading] = useState(true);
  const [dogFood, setDogFood] = useState<DogFood[]>([]);
  const [dogAcc, setDogAcc] = useState<DogAccessories[]>([]);
  const [dogToys, setDogToys] = useState<DogToys[]>([]);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    axios
      .get(`api/Dog/${whichData}`)
      .then((response) => {
        setDogFood(response.data);
        setDogAcc(response.data);
        setDogToys(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  });
  if (error) return <ErrorMessage error={error.message} />;

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {whichData === 'AccesDog' && (
            <>
              <ul>
                {dogAcc.map((acc, index) => (
                  <li key={index}>
                    <Card {...acc} src={acc.imageUrl}  />
                  </li>
                ))}
              </ul>
            </>
          )}
          {whichData === 'foodDog' && (
            <>
              <ul>
                {dogFood.map((food, index) => (
                  <li key={index}>
                    <Card {...food} src={food.imageUrl} />
                  </li>
                ))}
              </ul>
            </>
          )}
          {whichData === 'toysDog' && (
            <>
              <ul>
                {dogToys.map((toy, index) => (
                  <li key={index}>
                    <Card {...toy} src={toy.imageUrl} />
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
