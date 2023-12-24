'use client';
import {useEffect, useState} from 'react';

import {CatFood} from '@/pages/models/catFood.model';
import {
  Box,
  Text,
  Heading,
  Stack,
  Card,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  UnorderedList,
  Button,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';
const CatsPage = () => {
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
        <p>Loading...</p>
      ) : (
        <UnorderedList textAlign='center' listStyleType='none'>
          {cats.map((cat) => (
            <ListItem
              key={cat._id.toString()}
              width='fit-content'
              margin='auto'
            >
                <Card maxW='sm'>
                  <CardBody>
                    <Image
                      objectFit='cover'
                      boxSize='200px'
                      src={cat.imageUrl}
                      alt={`${cat.name} image food`}
                      borderRadius='lg'
                      margin='auto'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>
                        {cat.name} for {cat.ageCat}
                      </Heading>
                      <Text fontSize='sm'>{cat.desc}</Text>
                      <Text color='blue.600' fontSize='2xl'>
                        {cat.price} zł/szt
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                        Buy now
                      </Button>
                      <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};

export default CatsPage;
