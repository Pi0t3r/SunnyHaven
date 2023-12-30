import {CatFood} from '@/pages/models/catFood.model';
import {Box, Heading, UnorderedList, ListItem} from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import {CardChakra} from './Card';
import {Loading} from './Loading';

export const CatFoodList = () => {
  const [cats, setCats] = useState<CatFood[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/foodCat');
        const data: CatFood[] = await response.json();

        if (Array.isArray(data)) {
          setCats(data);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box textAlign='center' padding={10}>
      <Heading as='h2'>Karmy dla kotów</Heading>
      {loading ? (
        <Loading />
      ) : (
        <UnorderedList textAlign='center' listStyleType='none'>
          {cats.map((cat) => (
            <ListItem
              key={cat._id.toString()}
              width='fit-content'
              margin='15px auto'
            >
              <CardChakra data={cat} info='Food' />
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};
