'use client';
import {Box, ButtonGroup, Button} from '@chakra-ui/react';
import {CatFoodList} from '@/app/components/ui/CatFoodList';
import {CatToysList} from '@/app/components/ui/CatToysList';
import {useState} from 'react';
import {CatAccesoriesList} from '@/app/components/ui/CatAccesoriesList';
const CatsPage = () => {
  const [currentList, setCurrentList] = useState('Food');
  const renderSelectedList = () => {
    switch (currentList) {
      case 'Toys':
        return <CatToysList />;
        break;
      case 'Accesories':
        return <CatAccesoriesList />;
        break;
      default:
        return <CatFoodList />;
    }
  };
  return (
    <Box textAlign='center' marginTop={20}>
      <ButtonGroup mt={10}>
        <Button
          variant='outline'
          colorScheme='blue'
          onClick={() => setCurrentList('Food')}
        >
          Karma
        </Button>
        <Button
          variant='outline'
          colorScheme='blue'
          onClick={() => setCurrentList('Toys')}
        >
          Zabawki
        </Button>
        <Button
          variant='outline'
          colorScheme='blue'
          onClick={() => setCurrentList('Accesories')}
        >
          Akcesoria
        </Button>
      </ButtonGroup>
      {renderSelectedList()}
    </Box>
  );
};

export default CatsPage;
