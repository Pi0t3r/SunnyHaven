import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';
export const CardChakra: React.FC<Record<string, any>> = ({data}) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          objectFit='cover'
          boxSize='200px'
          src={data.imageUrl}
          alt={`${data.name} image food`}
          borderRadius='lg'
          margin='auto'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>
            {data.name} {data.ageCat}
          </Heading>
          <Text>Smak: {data.taste}</Text>
          <Text>Waga: {data.weight}g</Text>

          {data.calories ? <Text> Kalorie: {data.calories}</Text> : ''}
          <Text color='blue.600' fontSize='2xl'>
            {data.price} zł/szt
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant='solid' colorScheme='blue'>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};
