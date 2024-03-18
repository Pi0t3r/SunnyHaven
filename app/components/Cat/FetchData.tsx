import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {Card} from '../ui/Card';
import {CatAccessories, CatFood, CatToys} from '@/pages/models/cat.model';
import {iCard, iFetchDataCat} from '@/app/types/types';
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
        switch (whichData) {
          case 'AccesCat':
            setCatAcc(response.data);
            break;
          case 'foodCat':
            setCatFood(response.data);
            break;
          case 'toysCat':
            setCatToys(response.data);
            break;
          default:
            break;
        }
      })
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
          {whichData === 'AccesCat' && (
            <>
              <ul>
                {catAcc.map((acc, index) => (
                  <li key={index}>
                    <Card
                      {...acc}
                      src={acc.imageUrl}
                      _id={acc._id.toString()}
                    />
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
                    <Card
                      {...food}
                      src={food.imageUrl}
                      _id={food._id.toString()}
                    />
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
                    <Card
                      {...toy}
                      src={toy.imageUrl}
                      _id={toy._id.toString()}
                    />
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
