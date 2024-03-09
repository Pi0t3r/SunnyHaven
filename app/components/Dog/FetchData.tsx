import {iFetchDataDog} from '@/app/types/types';
import {DogToys, DogAccessories, DogFood} from '@/pages/models/dog.model';
import {CircularProgress, Stack} from '@mui/material';
import {useEffect, useState} from 'react';
import {Card} from '../ui/Card';

export const FetchDogData = ({whichData}: iFetchDataDog) => {
  const [loading, setLoading] = useState(true);
  const [dogFood, setDogFood] = useState<DogFood[]>([]);
  const [dogAcc, setDogAcc] = useState<DogAccessories[]>([]);
  const [dogToys, setDogToys] = useState<DogToys[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/Dog/${whichData}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          if (whichData === 'AccesDog') {
            setDogAcc(data);
          } else if (whichData === 'foodDog') {
            setDogFood(data);
          } else if (whichData === 'toysDog') {
            setDogToys(data);
          }
        } else {
          console.error(`Invalid format data: ${data}`);
        }
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [whichData]);

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
                    <Card {...acc} src={acc.imageUrl} />
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
