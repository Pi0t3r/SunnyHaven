import { iFetchDataCat } from '@/app/types/types';
import { CatAccessories, CatFood, CatToys } from '@/pages/models/cat.model';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { Card } from '../ui/Card';

export const FetchCatData = ({whichData}: iFetchDataCat) => {
  const [loading, setLoading] = useState(true);
  const [catFood, setCatFood] = useState<CatFood[]>([]);
  const [catAcc, setCatAcc] = useState<CatAccessories[]>([]);
  const [catToys, setCatToys] = useState<CatToys[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/Cat/${whichData}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          if (whichData === 'AccesCat') {
            setCatAcc(data);
          } else if (whichData === 'foodCat') {
            setCatFood(data);
          } else if (whichData === 'toysCat') {
            setCatToys(data);
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
                {catAcc.map((acc, index) => (
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
                {catFood.map((food, index) => (
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
                {catToys.map((toy, index) => (
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
