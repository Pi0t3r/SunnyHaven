import {Box, Heading, ListItem, UnorderedList} from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import {Loading} from './ui/Loading';
import {CatToys} from '@/pages/models/catToys.model';
import {CardChakra} from './ui/Card';
export const CatToysList = () => {
  const [catToys, setCatToys] = useState<CatToys[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/toyCat');
        const data: CatToys[] = await response.json();
        if (Array.isArray(data)) {
          setCatToys(data);
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
  return <Box>
  <Heading as='h2'>Zabawki dla kotów</Heading>
  {loading ? (
    <Loading />
  ) : (
    <UnorderedList textAlign='center' listStyleType='none'>
      {catToys.map((toy) => (
        <ListItem
          key={toy._id.toString()}
          width='fit-content'
          margin='15px auto'
        >
          <CardChakra data={toy} info='Toys'/>
        </ListItem>
      ))}
    </UnorderedList>
  )}
</Box>
};
