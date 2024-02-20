'use client';
import BannerImage from '@/public/assets/img/banner-img.png';
import BannerImage2 from '@/public/assets/img/banner-img2.png';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Tab} from '@mui/material';
import Image from 'next/image';
import {useState} from 'react';
import {CatFoodList} from './components/Foodies Section/CatFood';
import {DogFoodList} from './components/Foodies Section/DogFood';
import {iconsList} from './components/data/IconsListData';
import {Banner} from './components/section/Banner/Banner';
import {Sale} from './components/section/Sale/Sale';

import {SectionBackground} from './components/section/Section';
export default function Home() {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <main>
      <SectionBackground image={BannerImage}>
        <Banner />
      </SectionBackground>
      <section>
        <ul className='flex flex-wrap py-20 justify-center gap-12'>
          {iconsList.map((icon, index) => (
            <li key={index}>
              <div className='cursor-pointer'>
                <Image
                  src={icon.icon}
                  alt={icon.alt}
                  width={70}
                  height={70}
                  className='fill-white'
                />
                <p className='capitalize text-xl text-center mt-5'>
                  {icon.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className='px-5'>
        <h2>Pet Foodies</h2>
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
      <SectionBackground image={BannerImage2}>
        <Sale />
      </SectionBackground>
    </main>
  );
}
