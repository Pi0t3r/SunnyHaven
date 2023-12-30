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
  useToast,
} from '@chakra-ui/react';
import {useCart} from '@/context/CartContext';

export const CardChakra: React.FC<Record<string, any>> = ({data, info}) => {
  const {addToCart} = useCart();
  const toast = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: data.id,
      name: data.name,
      price: data.price,
      imageUrl: data.imageUrl,
    });
    toast({
      title: 'Product added to your cart.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };
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
            {data.name} {data.ageCat ? data.ageCat : null}
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
                <Text>Długość patyczka: {data.stickLength} cm</Text>
              ) : null}
              {data.lineLength ? (
                <Text>Długość sznurka: {data.lineLength} cm</Text>
              ) : null}
              {data.size ? <Text>Wymiary: {data.size} cm</Text> : null}
              <Text color='blue.600' fontSize='2xl'>
                {data.price} zł/szt
              </Text>
            </Stack>
          )}
          {info === 'Accessories' && (
            <Stack>
              {data.size ? <Text>Wymiary: {data.size} cm</Text> : null}
              {data.color ? <Text>Kolor: {data.color}</Text> : null}
              {data.weight ? <Text>Ilość: {data.weight} </Text> : null}
              <Text color='blue.600' fontSize='2xl'>
                {data.price} zł/szt
              </Text>
            </Stack>
          )}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant='solid' colorScheme='blue' onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};
