import {useState} from 'react';
import {CatFoodList} from '../../Foodies Section/CatFood/CatFoodList';
import {DogFoodList} from '../../Foodies Section/DogFood/DogFoodList';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Tab} from '@mui/material';
export const PetFoodSection = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <section id='Foodies' className='px-5'>
      <h2 className='text-4xl text-center'>Pet Foodies</h2>
      <TabContext value={value}>
        <div>
          <TabList
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab value='1' label='All' />
            <Tab value='2' label='Cat' />
            <Tab value='3' label='Dog' />
            <Tab value='4' label='Bird' />
            <Tab value='5' label='Fish' />
          </TabList>
        </div>
        <TabPanel value='1'>
          <CatFoodList />
          <DogFoodList />
        </TabPanel>
        <TabPanel value='2'>
          <CatFoodList />
        </TabPanel>
        <TabPanel value='3'>
          <DogFoodList />
        </TabPanel>
      </TabContext>
    </section>
  );
};
