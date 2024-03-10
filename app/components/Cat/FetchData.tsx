import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {Card} from '../ui/Card';
import {CatAccessories, CatFood, CatToys} from '@/pages/models/cat.model';
import {iFetchDataCat} from '@/app/types/types';
import axios from 'axios';
import {ErrorMessage} from '../ui/ErrorMessage';
import {ErrorState} from '@/app/types/types';
export const FetchCatData = ({whichData}: iFetchDataCat) => {
  const [loading, setLoading] = useState(true);
  const [catFood, setCatFood] = useState<CatFood[]>([]);
  const [catAcc, setCatAcc] = useState<CatAccessories[]>([]);
  const [catToys, setCatToys] = useState<CatToys[]>([]);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    axios
      .get(`api/Cat/${whichData}`)
      .then((response) => {
        setCatFood(response.data);
        setCatAcc(response.data);
        setCatToys(response.data);
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
