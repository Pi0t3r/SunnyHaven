import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {Card} from '../ui/Card';
import {DogAccessories, DogFood, DogToys} from '@/pages/models/dog.model';
import {iFetchDataCat} from '@/app/types/types';
export const FetchCatData = ({whichData}: iFetchDataCat) => {
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
          if (whichData === 'AccesCat') {
            setDogAcc(data);
          } else if (whichData === 'foodCat') {
            setDogFood(data);
          } else if (whichData === 'toysCat') {
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
          {whichData === 'AccesCat' && (
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
          {whichData === 'foodCat' && (
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
          {whichData === 'toysCat' && (
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
