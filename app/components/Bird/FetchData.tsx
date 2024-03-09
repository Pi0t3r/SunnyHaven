'use client'
// import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {Card} from '../ui/Card';
import {BirdFood} from '@/pages/models/bird.model';
import {useQuery} from '@tanstack/react-query';
import ErrorIcon from '@mui/icons-material/Error';
export const FetchBirdData = ({whichData}: {whichData: string}) => {
  const {isPending, error, data} = useQuery({
    queryKey: ['foodBird'],
    queryFn: async () => {
      const response = await fetch(`api/Bird/${whichData}`).then((res) =>
        res.json()
      );
      if (!response.ok) {
        console.error('Failed to fetch data');
      }
      return response.json();
    },
  });
  if (isPending) return <CircularProgress />;
  if (error) return 'Wystąpił błąd: ' + <ErrorIcon />;

  return (
    <>
      {whichData === 'foodBird' && data && (
        <ul>
          {data.map((item: BirdFood, index: number) => (
            <li key={index}>
              <Card {...item} src={item.imageUrl} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
