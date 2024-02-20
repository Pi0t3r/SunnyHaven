'use client';
import {useState, useEffect} from 'react';
import {CatToys, CatAccessories} from '@/pages/models/cat.model';
import Image from 'next/image';
import {CatFoodList} from '@/app/components/Foodies Section/Cat/CatFoodList';
export default function CatShop() {
  const [catToys, setCatToys] = useState<CatToys[]>([]);
  const [catAccessories, setCatAccesories] = useState<CatAccessories[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/Cat/toysCat');
        const data = await response.json();
        if (Array.isArray(data)) {
          setCatToys(data);
        } else {
          console.error(`Invalid data format: ${data}`);
        }
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>hello in Cat shop</h2>
      <ul>
        {catToys.map((toy, index) => (
          <li key={index}>
            <Image
              src={toy.imageUrl}
              alt={`${toy.name} image`}
              width={300}
              height={300}
            />
            <p>
              {toy.name} {toy.price}
            </p>
          </li>
        ))}
      </ul>
      <CatFoodList />
    </div>
  );
}
