import {useCart} from '@/context/CartContext';
import {
  Box,
  Button,
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
interface ModalComponentProps {
  OpenModal: any;
  onClose: () => void;
}
export function ModalComponent({OpenModal, onClose}: ModalComponentProps) {
  const {cart, removeFromCart, clearCart} = useCart();
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
                  <Text>{item.count !== undefined ? item.count : 1}</Text>

                </Box>
                <Button onClick={() => removeFromCart(item._id)}>
                  <DeleteIcon />
                </Button>
              </Box>
            ))
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => clearCart()}>Clear Cart</Button>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Go to payment</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
