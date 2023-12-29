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

export const CardChakra: React.FC<Record<string, any>> = ({data, info}) => {
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
          {info === 'Food' && (
            <Stack>
              <Text>Smak: {data.taste}</Text>
              <Text>Waga: {data.weight}g</Text>

              {data.calories ? <Text> Kalorie: {data.calories}</Text> : null}
              <Text color='blue.600' fontSize='2xl'>
                {data.price} zł/szt
              </Text>
            </Stack>
          )}
          {info === 'Toys' && (
            <Stack>
              {data.stickLength ? (
                <Text>Długość patyczka: {data.stickLength}</Text>
              ) : null}
              {data.lineLength ? (
                <Text>Długość sznurka: {data.lineLength}</Text>
              ) : null}
              <Text color='blue.600' fontSize='2xl'>
                {data.price} zł/szt
              </Text>
            </Stack>
          )}
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
