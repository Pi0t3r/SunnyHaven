import {Box, Heading, ListItem, UnorderedList} from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import {Loading} from './ui/Loading';
import {CatAccessories} from '@/pages/models/catAccesories.model';
import {CardChakra} from './ui/Card';

export const CatAccesoriesList = () => {
  const [catAccesories, setCatAccesories] = useState<CatAccessories[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/accessoriesCat');
        const data: CatAccessories[] = await response.json();
        if (Array.isArray(data)) {
          setCatAccesories(data);
        } else {
          console.error(`Invalid data format: ${data}`);
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Box>
      <Heading as='h2'>Akcesoria dla kotów</Heading>
      {loading ? (
        <Loading />
      ) : (
        <UnorderedList textAlign='center' listStyleType='none'>
          {catAccesories.map((acc) => (
            <ListItem
              key={acc._id.toString()}
              width='fit-content'
              margin='15px auto'
            >
              <CardChakra data={acc} info='Accessories'/>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};
