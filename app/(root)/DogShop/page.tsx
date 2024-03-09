'use client'
import {FetchDogData} from '@/app/components/Dog/FetchData';

export default function DogShop() {
  return (
    <>
      <h2>hello in dog shop</h2>
      <FetchDogData whichData='foodDog' />
    </>
  );
}
