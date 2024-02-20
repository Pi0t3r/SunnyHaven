import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import {Button} from './Button';
import {iCarouselImage, iCarouselText} from '@/app/types/types';
import Quote from '@/public/assets/img/left-quote-512.png';

export function CarouselImage({items}: iCarouselImage) {
  return (
    <Carousel animation='slide' autoPlay={false} duration={800} sx={{
      height:'max-content'
    }}>
      {items.map((item, index) => (
        <div key={index}>
          <Image
            src={item.src}
            alt=''
            width={600}
            height={200}
            style={{
              marginInline: 'auto',
            }}
          />
          <div className='mt-10 text-left'>
            <span className='text-primary uppercase text-xl'>{item.title}</span>
            <p className='capitalize font-bold text-4xl'>
              {item.desc}
              <span className='text-primary'>{item.bolderDesc}</span>
            </p>
          </div>
          <Button href='/sale' title='shop now'/>
        </div>
      ))}
    </Carousel>
  );
}

export function CarouselText({items}: iCarouselText) {
  return (
    <Carousel animation='slide' autoPlay={false} duration={800}>
      {items.map((item, index) => (
        <div key={index}>
          <Image
            src={Quote}
            alt='item image carousel'
            width={125}
            height={125}
          />
          <p className='text-gray-color text-3xl leading-10'>{item.text}</p>
          <span>- {item.author}</span>
        </div>
      ))}
    </Carousel>
  );
}
