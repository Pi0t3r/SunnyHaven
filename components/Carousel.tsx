import {Box} from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <Box background='#3d3c3c' width='100%' height='200px'></Box>
        <Carousel.Caption>
          <h3>Sterylne zabawki</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Box background='#3d3c3c' width='100%' height='200px'></Box>
        <Carousel.Caption>
          <h3>Zdrowe karmy</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Box background='#3d3c3c' width='100%' height='200px'></Box>
        <Carousel.Caption>
          <h3>Wielobarwne akcesoria</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
