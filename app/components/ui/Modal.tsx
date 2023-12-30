import {useCart} from '@/context/CartContext';
import {
  Box,
  Button,
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
import { addToCart, clearCart, removeFromCart } from '@/pages/models/cartSchema.model'
export const ModalComponent = ({OpenModal, onClose}) => {
  const {cart} = useCart();
  return (
    <Modal isOpen={OpenModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {cart.map((item) => {
            if (cart.length === 0) {
              return <Text key={item.id}>Cart is empty</Text>;
            } else {
              return (
                <Box
                  key={item.id}
                  display='flex'
                  background='red'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Image
                    src={item.imageUrl}
                    alt={`${item.name} image product`}
                    width={100}
                    height={100}
                  />
                  <Box display='flex' flexDirection='column'>
                    <Text>{item.name}</Text>
                    <Text>{item.price} zł</Text>
                  </Box>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </Box>
              );
            }
          })}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Go to payment</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
