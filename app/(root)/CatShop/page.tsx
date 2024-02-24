'use client';
// import {FetchCatData} from '@/app/components/Cat/FetchData';
import { FetchCatData } from '@/app/components/Cat/FetchData';

export default function CatShop() {
  return (
    <div className='p-5'>
      <h2>hello in Cat shop</h2>
      <FetchCatData whichData='foodCat' />
    </div>
  );
}
