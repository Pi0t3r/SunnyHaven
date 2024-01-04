import {useCart} from '@/context/CartContext';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import {DeleteIcon} from '@chakra-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
interface ModalComponentProps {
  OpenModal: any;
  onClose: () => void;
}
export function ModalComponent({OpenModal, onClose}: ModalComponentProps) {
  const {
    cart,
    removeFromCart,
    clearCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
  } = useCart();

  const updateTotalSum = () => {
    const totalSum = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return totalSum;
  };

  return (
    <Modal isOpen={OpenModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {cart.length === 0 ? (
            <Text>Cart is empty</Text>
          ) : (
            cart.map((item) => (
              <Box
                key={item._id}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                border='1px solid black'
                m={2}
                p={2}
              >
                <Image
                  src={item.imageUrl}
                  alt={`${item.name} image product`}
                  width={100}
                  height={100}
                />
                <Box display='flex' flexDirection='column'>
                  <Text>{item.name}</Text>
                  <Divider orientation='horizontal' />
                  <Text>{item.price} zł</Text>
                  <Text>{item._id}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                </Box>
                <ButtonGroup>
                  <Button
                    onClick={() => handleIncreaseQuantity(item.imageUrl)}
                    variant='outline'
                    colorScheme='blue'
                    size='sm'
                    mt='2'
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => handleDecreaseQuantity(item.imageUrl)}
                    variant='outline'
                    colorScheme='red'
                    size='sm'
                    mt='2'
                    isDisabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <Button onClick={() => removeFromCart(item.imageUrl)}>
                    <DeleteIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            ))
          )}
        </ModalBody>
        <ModalFooter p={10}>
          <Text fontWeight='bold'>Total: {updateTotalSum().toFixed(2)} zł</Text>
          <Button onClick={() => clearCart()}>Clear Cart</Button>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' as={Link} href='/basket'>
            Go to payment
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
