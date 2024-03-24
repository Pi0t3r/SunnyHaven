import {useState} from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Tab} from '@mui/material';
import {FetchData} from '../../Products/FetchData';
export const PetFoodSection = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <section id='Foodies' className='px-5'>
      <h2 className='text-4xl text-center'>Pet Foodies</h2>
      <TabContext value={value}>
        <>
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
        </>
        <TabPanel value='1'>
          <FetchData value='All' type='food' />
        </TabPanel>
        <TabPanel value='2'>
          <FetchData value='Cat' type='food' />
        </TabPanel>
        <TabPanel value='3'>
          <FetchData value='Dog' type='food' />
        </TabPanel>
        <TabPanel value='4'>
          <FetchData value='Bird' type='food' />
        </TabPanel>
      </TabContext>
    </section>
  );
};
